import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from "../../../axios-client.js";
import createJobStyles from "../HomePages.module.css";
import rawCities from "../../../cities.json"

import {
  FaLongArrowAltLeft,
  FaQuoteLeft,
  FaTable,
  FaBookOpen,
  FaRegListAlt,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaCalendarAlt, 
  FaRegMoneyBillAlt,
  FaCamera,
  FaTimes
} from 'react-icons/fa'

const CreateJobPage = () => {

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const cities = rawCities.map(({ id, name, country }) => ({ id, name, country }));

  useEffect(() => {
    axiosClient.get('/jobs/categories')
    .then(({data}) => {
      setCategories(data);
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
  }, [])

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    job_category_id: '',
    description: '',
    qualifications: '',
    city: 'Manila, PH',
    full_address: '',
    schedule: '',
    payment: '',
  })

  const handleFieldValueChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData, [name]: value,
    }))
  }

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    const MAX_FILE_SIZE_MB = 10;
    const validImages = [];

    for (const file of files) {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert(`${file.name} exceeds 10MB limit.`);
        continue;
      }

      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
        alert(`${file.name} is not a supported image type.`);
        continue;
      }

      if (selectedFiles.length + validImages.length >= 10) {
        alert("You can only upload up to 10 images.");
        break;
      }

      validImages.push(file);
    }

    setSelectedFiles((prev) => [...prev, ...validImages]);
  };

  const removeImage = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    selectedFiles.forEach((file, index) => {
      payload.append(`media_paths[]`, file);
    });

    axiosClient.post('/job/', payload, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then((response) => {
      alert(response.data.message)
      navigate('/hub/job-posts');
    }).catch((error) => {
      console.error('Error posting job:', error.response?.data || error.message);
    });
  }

  

  return (
    <div className={createJobStyles['showContainer']}>

      <div className={createJobStyles.header}>
        <Link to="/hub/feed" className={createJobStyles.backButton}>
          <FaLongArrowAltLeft className={createJobStyles.backIcon} />
          Back to Feed
        </Link>

        <div className={createJobStyles.titleSection}>
          <h1 className={createJobStyles.jobTitle}>Create New Cleaning Job</h1>
          <small className={createJobStyles.category}>Fill in the job posting form below</small>
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className={createJobStyles['post-job-form']}>
        
        <label htmlFor="jobTitle"><FaQuoteLeft />Job Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleFieldValueChange} 
            placeholder="Enter job title" 
            maxLength="101"
          />
        
        <label htmlFor="jobCategory"><FaTable />Job Category</label>
        <select 
          name="job_category_id" 
          value={formData.job_category_id} 
          onChange={handleFieldValueChange}>
            <option aria-readonly>Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.title}</option>
            ))}
        </select>
        
        <label htmlFor="jobDescription"><FaBookOpen />Job Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleFieldValueChange}
          rows="5"
          placeholder="Describe the job in detail...">
        </textarea>
        
        <label htmlFor="jobQualifications"><FaRegListAlt />Job Qualifications</label>
        <textarea
          name="qualifications"
          value={formData.qualifications}
          onChange={handleFieldValueChange}
          rows="6"
          placeholder="List qualifications required for this job...">
        </textarea>

        <label><FaGlobeAmericas />Location (City, Country)</label>
        <select name='city' value={formData.city} onChange={handleFieldValueChange}>
          {cities.map((city) => (
            <option key={city.id} value={`${city.name}, ${city.country}`}>
              {`${city.name}, ${city.country}`}
            </option>
          ))}
        </select>

        <label htmlFor="jobFullLocation"><FaMapMarkerAlt />Full Address</label>
          <input 
            type="text" 
            name="full_address" 
            value={formData.full_address} 
            onChange={handleFieldValueChange} 
            placeholder="Enter the full address"
          />
        
        <label htmlFor="jobSchedule"><FaCalendarAlt />Job Schedule</label>
          <input 
            type="text" 
            name="schedule" 
            value={formData.schedule} 
            onChange={handleFieldValueChange} 
            placeholder="e.g., January 01, 2025 9:00 AM - 5:00 PM" 
          />

        <label htmlFor="jobPayment"><FaRegMoneyBillAlt />Job Payment</label>
          <input 
            type="text" 
            name="payment"  
            value={formData.payment} 
            onChange={handleFieldValueChange} 
            placeholder="Enter payment amount" 
          />

        <label htmlFor="jobPayment"><FaCamera />Upload Media</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />

        <div className={createJobStyles.previewJobContainer}>
          {selectedFiles.map((file, index) => (
            <div key={index} className={createJobStyles.imagePreview}>
              <img src={URL.createObjectURL(file)} alt={`preview-${index}`} />
              <button type="button" onClick={() => removeImage(index)}>
                <FaTimes />
              </button>
            </div>
          ))}
        </div>

        <button type="submit" name='post-job-btn' className='single-page-btn'>Post Job</button>

      </form>
    </div>
  )
}

export default CreateJobPage