import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider';
import axiosClient from '../../axios-client';
import showStyles from './HomePages.module.css';
import { FaLongArrowAltLeft, FaRegBookmark } from "react-icons/fa";

const ShowJobPage = () => {

  const { jobID } = useParams(); 

  const { userInfo, setUserInfo } = useStateContext();
  const [job, setJob] = useState(null);
  const [mediaPaths, setMediaPaths] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    axiosClient.get(`/job/${jobID}`)
      .then(({data}) => {

        setJob(data);

        const savedJobs = userInfo.saved ? JSON.parse(userInfo.saved) : [];
        setIsSaved(savedJobs.includes(Number(jobID)));

        const mediaPaths = Array.isArray(data.media_paths)
          ? data.media_paths
          : JSON.parse(data.media_paths) || [];
        setMediaPaths(mediaPaths);
      })
      .catch(error => {
        console.error("Error fetching job details:", error);
      });
  }, [job, isSaved]);

  const isJobOwner = userInfo && job && (userInfo.id === job.job_recruiter.id);

  const handleSaveJob = () => {

    const savedJobs = JSON.parse(userInfo.saved || '[]');
    
    const updatedSavedJobs = isSaved 
      ? savedJobs.filter((id) => id != job.id) // removing from saved jobs
      : [...savedJobs, job.id] // adding to saved jobs
       
    console.log("Updated Saved Jobs: ", updatedSavedJobs);

    axiosClient.put('/job/save', { saved: updatedSavedJobs })
      .then(({data}) => {
        setIsSaved(!isSaved)
        setUserInfo(data)
      }).catch((error) => {
        console.error("Error saving job: ", error);
      });
  }

  const handleApply = () => {
    axiosClient.post(`/job/apply/${jobID}`)
      .then(({data}) => {
        alert(data.message)
      }).catch((error) => {
        console.error("Error applying for the job:", error);
        alert("An error occurred while applying for the job.");
      });
  }

  const handleCloseApplication = () => {
    axiosClient.put(`/job/${jobID}`, { application_status: false })
      .then((response) => {
        setJob(response.data.job);
        alert(response.data.message);
      }).catch((error) => {
        console.error("Error updating application status:", error);
      });
  }

  if (!job) {
    return (
      <div className={showStyles.showContainer}>
        <div className={showStyles.loading}>Loading job details...</div>
      </div>
    );
  }

  return (
    <div className={showStyles.showContainer}>
      {/* Header Section */}
      <div className={showStyles.header}>
        <Link to="/hub/feed" className={showStyles.backButton}>
          <FaLongArrowAltLeft className={showStyles.backIcon} />
          Back to Feed
        </Link>
        
        <div className={showStyles.titleSection}>
          <h1 className={showStyles.jobTitle}>{job.title}</h1>
          <small className={showStyles.category}>{job.job_category}</small>
        </div>
      </div>

      {/* Main Content */}
      <div className={showStyles.mainContent}>
        {/* Left Column */}
        <div className={showStyles.leftColumn}>
          {/* Recruiter Info */}
          <div className={showStyles.recruiterCard}>
            <div className={showStyles.recruiterHeader}>
              <img 
                src={`${import.meta.env.VITE_API_BASE_URL}${job.job_recruiter.profile_picture}`} 
                alt='Profile Picture'
                className={showStyles.recruiterAvatar}
              />
              <div className={showStyles.recruiterInfo}>
                <h4 className={showStyles.recruiterFullName}>{job.job_recruiter.full_name}</h4>
                <small className={showStyles.recruiterUsername}>
                  @{job.job_recruiter.user_name} | {job.job_recruiter.email}
                </small>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className={showStyles.showJobSection}>
            <h2 className={showStyles.sectionTitle}>Job Description</h2>
            <div className={showStyles.description}>
              {job.description}
            </div>
          </div>

          {/* Qualifications */}
          <div className={showStyles.showJobSection}>
            <h2 className={showStyles.sectionTitle}>Qualifications</h2>
            <div className={showStyles.qualifications}>
              {job.qualifications}
            </div>
          </div>

          {/* Media Section */}
          {mediaPaths.length > 0 && (
            <div className={showStyles.showJobSection}>
              <h2 className={showStyles.sectionTitle}>Job Images</h2>
              <div className={showStyles.mediaContainer}>
                <div className={showStyles.mainImage}>
                  <img 
                    src={mediaPaths[selectedImageIndex]} 
                    alt={`Job image ${selectedImageIndex + 1}`}
                    className={showStyles.selectedImage}
                  />
                </div>
                {/* Thumbnail */}
                {mediaPaths.length > 1 && (
                  <div className={showStyles.thumbnails}>
                    {mediaPaths.map((path, index) => (
                      <img
                        key={index}
                        src={path}
                        alt={`Thumbnail ${index + 1}`}
                        className={`${showStyles.thumbnail} ${index === selectedImageIndex ? showStyles.activeThumbnail : ''}`}
                        onClick={() => setSelectedImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className={showStyles.rightColumn}>
          {/* Job Details Card */}
          <div className={showStyles.detailsCard}>
            <h2 className={showStyles.cardTitle}>Job Details</h2>
            
            <div className={showStyles.detailItem}>
              <span className={showStyles.detailLabel}>Location:</span>
              <span className={showStyles.detailValue}>{job.city}</span>
            </div>

            <div className={showStyles.detailItem}>
              <span className={showStyles.detailLabel}>Full Address:</span>
              <span className={showStyles.detailValue}>{job.full_address}</span>
            </div>

            <div className={showStyles.detailItem}>
              <span className={showStyles.detailLabel}>Schedule:</span>
              <span className={showStyles.detailValue}>{job.schedule}</span>
            </div>

            <div className={showStyles.detailItem}>
              <span className={showStyles.detailLabel}>Payment:</span>
              <span className={showStyles.detailValue}>{job.payment}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={showStyles.actionButtons}>
            {
              isJobOwner ? (
                job.application_status && job.approved_status ? (
                  <button 
                    className='single-page-btn'
                    onClick={handleCloseApplication}
                  >
                    Close Application
                  </button>
                ) : null
              ) : (
                <button 
                  className='single-page-btn'
                  style={job.application_status ? {display:'unset'} : {display:'none'} }
                  onClick={handleApply}
                >
                  Apply Now!
                </button>
              )
            }
            <button 
              className={`${showStyles.saveButton} ${isSaved ? showStyles.saved : ''}`}
              onClick={handleSaveJob}
            >
              <FaRegBookmark className={showStyles.saveIcon} />
              {isSaved ? 'Saved' : 'Save Job'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowJobPage