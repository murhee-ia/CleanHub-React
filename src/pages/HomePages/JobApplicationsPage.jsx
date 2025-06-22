import PageTitle from '../../components/HomeComponents/PageTitle'
import jobApplicationStyles from './HomePages.module.css'

const JobApplicationsPage = () => {
  return (
    <div className={jobApplicationStyles['home-page']}>
      <div className={jobApplicationStyles['page-header']}>
        <PageTitle title="Job Applications" subtitle="Track updates of all your job applications." />
      </div>
      <div className={jobApplicationStyles['page-body']}>

      </div>
    </div>
  )
}

export default JobApplicationsPage