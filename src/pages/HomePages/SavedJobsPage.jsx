import PageTitle from '../../components/HomeComponents/PageTitle'
import savedJobsStyle from './HomePages.module.css'

const SavedJobsPage = () => {
  return (
    <div className={savedJobsStyle['home-page']}>
      <div className={savedJobsStyle['page-header']}>
        <PageTitle title="Saved Jobs" subtitle="Look back at all the jobs you have saved." />
      </div>
      <div className={savedJobsStyle['page-body']}>

      </div>
    </div>
  )
}

export default SavedJobsPage