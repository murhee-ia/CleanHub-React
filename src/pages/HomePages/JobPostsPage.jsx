import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../axios-client'
import PageTitle from '../../components/HomeComponents/PageTitle'
import ListCardsContainer from '../../components/HomeComponents/ListCardsContainer'
import jobPostStyles from './HomePages.module.css'
import { FaPlus } from 'react-icons/fa'

const JobPostsPage = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axiosClient.get('/jobs/user-posts')
      .then(({data}) => {
        setJobs(data)
      }).catch((error) => {
        console.error('Error fetching user job posts:', error);
      })
  }, [])

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
        <ListCardsContainer jobs={jobs} isPostPage={true} />
      </div>
    </div>
  )
}

export default JobPostsPage