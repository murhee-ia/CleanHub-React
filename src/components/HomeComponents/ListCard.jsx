import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate';
import listCardStyles from './HomeComponents.module.css'
import { FaHourglassHalf } from "react-icons/fa"

const ListCard = ({job, isPostPage}) => {

  const truncatedTitle = job.title.length > 60 ? job.title.substring(0, 60) + '...' : job.title;

  return (
    <div className={`${listCardStyles['jobcard']} ${listCardStyles['listcard']}`}>
      <div className={listCardStyles['list-job-status-section']}>
        <div>
          <small className={job.application_status ? listCardStyles["status-open"] : listCardStyles["status-closed"]}>
              {job.application_status ? "Application Open" : "Application Closed"}
          </small>
          {isPostPage && (
            job.approved_status ? null :
              <small className={listCardStyles["status-pending"]}><FaHourglassHalf/>Pending...</small>
          )}
        </div>
        <small>{formatDate(job.created_at)}</small>
      </div>
      <div className={listCardStyles['list-job-title-section']}>
        <h4>{truncatedTitle}</h4>
        <small>{job.job_category}</small>
      </div>
      <div className={listCardStyles['list-job-actions-section']}>
        <Link to={`/hub/jobs/${job.id}`}>View Job</Link>
        {isPostPage && (
          <Link to={`/hub/jobs/${job.id}/applicants`}>Choose Applicants</Link>
        )}
      </div>
    </div>
  )
}

export default ListCard