import PageTitle from '../../components/HomeComponents/PageTitle'
import jobPostStyles from './HomePages.module.css'

const JobPostsPage = () => {
  return (
    <div className={jobPostStyles['home-page']}>
      <div className={jobPostStyles['page-header']}>
        <PageTitle title="Job Posts" subtitle="See all the jobs you have posted." />
      </div>
      <div className={jobPostStyles['page-body']}>

      </div>
    </div>
  )
}

export default JobPostsPage