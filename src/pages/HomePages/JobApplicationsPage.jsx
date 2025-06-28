import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client'
import PageTitle from '../../components/HomeComponents/PageTitle'
import ListCardsContainer from '../../components/HomeComponents/ListCardsContainer'
import jobApplicationStyles from './HomePages.module.css'

const JobApplicationsPage = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axiosClient.get('/jobs/user-applications')
      .then(({data}) => {
        setJobs(data)
      }).catch((error) => {
        console.error("Error fetching applied jobs: ", error);
      })
  }, [])

  return (
    <div className={jobApplicationStyles['home-page']}>
      <div className={jobApplicationStyles['page-header']}>
        <PageTitle title="Job Applications" subtitle="Track updates of all your job applications." />
      </div>
      <div className={jobApplicationStyles['page-body']}>
        <ListCardsContainer jobs={jobs} isPostPage={false}/>
      </div>
    </div>
  )
}

export default JobApplicationsPage