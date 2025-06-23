import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cardStyles from './HomeComponents.module.css'
import { 
  FaBookmark, 
  FaRegBookmark, 
  FaGlobeAmericas, 
  FaRegMoneyBillAlt,
  FaUserFriends, 
} from 'react-icons/fa'

const JobCard = React.forwardRef(({job, maxHeight}, ref) => {

  const [isSaved, setIsSaved] = useState(false);

  const truncatedTitle = job.title.length > 60 ? job.title.substring(0, 60) + '...' : job.title;

  return (
    <div className={cardStyles["jobcard"]}>
      <div className={cardStyles["jobcard-details"]}
        ref={ref} style={maxHeight > 0 ? {height:`${maxHeight}px`} : {}}>
        <div>
          <small className={cardStyles["jobcard-category"]}>{job.job_category}</small>
        </div>
        <div className={cardStyles["jobcard-main-info"]}>
          <h3 className={cardStyles["jobcard-title"]}>{truncatedTitle}</h3>
          <h4 className={cardStyles["jobcard-payment"]}><FaRegMoneyBillAlt />{job.payment}</h4>
          <h5 className={cardStyles["jobcard-employer"]}><FaUserFriends />{job.job_recruiter.full_name}</h5>
        </div>
      </div>
      <div className={cardStyles["line-separator"]}></div>
      <div>
        <small className={cardStyles["jobcard-location"]}><FaGlobeAmericas />{job.city}</small>
        <div>
          <button className={cardStyles["jobcard-view-btn"]}>
            <Link to={`/hub/jobs/${job.id}`}>View</Link>
          </button>
          <button className={cardStyles["jobcard-save-icon"]}>
            { isSaved==true ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>
    </div>
  )
})

export default JobCard