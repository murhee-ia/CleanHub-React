import { useEffect, useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import { formatDate } from '../../utils/formatDate';
import axiosClient from '../../axios-client';
import PageTitle from '../../components/HomeComponents/PageTitle';
import Modal from '../../components/HomeComponents/Modal';
import profileStyles from './HomePages.module.css';


const ProfilePage = () => {

  const {userInfo, setUserInfo, saveUser} = useStateContext();

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
        setUserInfo(data)
      })
  }, [])

  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleEdit = (field) => {
    setIsModalOpen(true)
    setModalContent(field)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setUpdatedData(event.target.value);
  }

  const handleCloseModal = () => {
    setModalContent(null)
    setIsModalOpen(false)
  }

  const handleSubmit = () => {
    axiosClient.put(`/user/update/info`, { field: modalContent, value: updatedData })
      .then(({ data }) => {
        setUserInfo(data);
        handleCloseModal();
        setUpdatedData("");
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  }

  const handleFileChange = (event) => {
    event.preventDefault()
    setSelectedFile(event.target.files[0]);
  }

  const handleSubmitFile = () => {

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('profile_picture', selectedFile);

    axiosClient.post('/user/update/profile-picture', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(({ data }) => {
      setUserInfo(data);
      const localStorageUser = {
        full_name: data.full_name,
        user_name: data.user_name,
        role: data.role,
        profile_picture: data.profile_picture,
      };
      saveUser(localStorageUser);
      setSelectedFile(null);
      setIsModalOpen(false);
    })
    .catch((error) => {
      console.error("Error uploading profile picture:", error);
    });
  };

  return (
    <div className={profileStyles['home-page']}>
      <div className={profileStyles['page-header']}>
        <PageTitle title="User Profile" subtitle="Review your profile based on your personal info." />
      </div>
      <div className={profileStyles['page-body']}>
        <div className={profileStyles['profile-container']}>
          <div className={profileStyles['user-info']}>
            <div className={profileStyles['profile-header']}>
              <h2 className={profileStyles['profile-name']}>{userInfo.full_name || 'Welcome User'}</h2>
              <p className={profileStyles['profile-username']}>Username: @{userInfo.user_name || 'username'}</p>
            </div>
            
            <div className={profileStyles['info-grid']}>
              <div className={profileStyles['info-card']} onClick={() => handleEdit("email")}>
                <div className={profileStyles['info-icon']}>✉️</div>
                <div className={profileStyles['info-content']}>
                  <label className={profileStyles['info-label']}>Email Address</label>
                  <span className={profileStyles['info-value']}>{userInfo.email || 'email@example.com'}</span>
                </div>
              </div>

              <div className={profileStyles['info-card']} onClick={() => handleEdit("location")}>
                <div className={profileStyles['info-icon']}>📍</div>
                <div className={profileStyles['info-content']}>
                  <label className={profileStyles['info-label']}>Location</label>
                  <span className={profileStyles['info-value']}>{userInfo.location || 'Not specified'}</span>
                </div>
              </div>
              
              <div className={profileStyles['info-card']}>
                <div className={profileStyles['info-icon']}>👤</div>
                <div className={profileStyles['info-content']}>
                  <label className={profileStyles['info-label']}>Member Since</label>
                  <span className={profileStyles['info-value']}>{formatDate(userInfo.created_at)}</span>
                </div>
              </div>
              
              <div className={profileStyles['info-card']}>
                <div className={profileStyles['info-icon']}>⭐</div>
                <div className={profileStyles['info-content']}>
                  <label className={profileStyles['info-label']}>Status</label>
                  <span className={profileStyles['info-value']}>Active Member</span>
                </div>
              </div>
            </div>

            <div className={profileStyles['bio-section']} onClick={() => handleEdit("bio")}>
              <h3 className={profileStyles['bio-title']}>About Me</h3>
              <p className={profileStyles['bio-content']}>{userInfo.bio  || 'Write Something about yourself.'}</p>
            </div>
          </div>
          
          <div className={profileStyles['profile-picture-section']}>
            <div className={profileStyles['profile-picture-container']} onClick={() => handleEdit("profile_picture")}>
              {userInfo.profile_picture ? (
                <img 
                  src={`${import.meta.env.VITE_API_BASE_URL}${userInfo.profile_picture}`} 
                  alt="Profile" 
                  className={profileStyles['profile-picture']}
                />
              ) : (
                <div className={profileStyles['profile-picture-placeholder']}>
                  <div className={profileStyles['placeholder-icon']}>👑</div>
                  <span className={profileStyles['placeholder-text']}>Upload Photo</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={profileStyles['user-history']}>
          {/* User history content goes here */}
        </div>
      </div>
      {
        isModalOpen && (
          <Modal>
            <button className={profileStyles["close-button"]} onClick={handleCloseModal}>&times;</button>
            {modalContent == 'profile_picture' && (
              <div className={profileStyles["modal-input-div"]}>
                <h3>Upload Profile Picture</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <button onClick={handleSubmitFile}>Done</button>
              </div>
            )}
            {modalContent == 'email' && (
              <div className={profileStyles["modal-input-div"]}>
                <h3>Change Email Address</h3>
                <input type="email" placeholder="Enter new email" onChange={handleChange}/>
                <button onClick={handleSubmit}>Save</button>
              </div>
            )}
            {modalContent == 'bio' && (
              <div className={profileStyles["modal-input-div"]}>
                <h3>Enter your Bio</h3>
                <textarea 
                  placeholder="Write anything about yourself that you want employers to know.." 
                  rows="4"
                  onChange={handleChange}/>
                <button onClick={handleSubmit}>Save</button>
              </div>
            )}
            {modalContent == 'location' && (
              <div className={profileStyles["modal-input-div"]}>
                <h3>Edit your Location</h3>
                <input type="text" placeholder="Where do you live?" onChange={handleChange}/>
                <button onClick={handleSubmit}>Save</button>
              </div>
            )}
          </Modal>
        )
      }
    </div>
  )
}

export default ProfilePage