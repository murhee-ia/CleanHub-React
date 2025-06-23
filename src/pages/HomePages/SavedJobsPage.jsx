import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client'
import PageTitle from '../../components/HomeComponents/PageTitle'
import JobCardsContainer from '../../components/HomeComponents/JobCardsContainer'
import savedJobsStyle from './HomePages.module.css'

const SavedJobsPage = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axiosClient.get('/jobs/saved')
      .then(({data}) => {
        setJobs(data);
      }).catch((err) => {
        console.error("Error fetching saved jobs:", err)
      })
  }, []);

  return (
    <div className={savedJobsStyle['home-page']}>
      <div className={savedJobsStyle['page-header']}>
        <PageTitle title="Saved Jobs" subtitle="Look back at all the jobs you have saved." />
      </div>
      <div className={savedJobsStyle['page-body']}>
        <JobCardsContainer jobs={jobs} />
      </div>
    </div>
  )
}

export default SavedJobsPage