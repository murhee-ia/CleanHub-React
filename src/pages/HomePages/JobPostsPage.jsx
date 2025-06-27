import { Link } from 'react-router-dom'
import PageTitle from '../../components/HomeComponents/PageTitle'
import jobPostStyles from './HomePages.module.css'
import { FaPlus } from 'react-icons/fa'

const JobPostsPage = () => {
  return (
    <div className={jobPostStyles['home-page']}>
      <div className={jobPostStyles['page-header']}>
        <PageTitle title="Job Posts" subtitle="See all the jobs you have posted." />
        {/* <!-- Create New Job Button --> */}
        <section className={jobPostStyles["search-bar-section"]}>
          <Link to='/hub/create-job' className={jobPostStyles["post-bar-button"]} >
            <FaPlus /> Post A Job
          </Link>
        </section>
      </div>
      <div className={jobPostStyles['page-body']}>

      </div>
    </div>
  )
}

export default JobPostsPage