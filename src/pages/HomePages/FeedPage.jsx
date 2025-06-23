import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import axiosClient from '../../axios-client';``
import PageTitle from '../../components/HomeComponents/PageTitle'
import JobCardsContainer from '../../components/HomeComponents/JobCardsContainer';
import feedStyles from './HomePages.module.css'
import { FaSearch } from 'react-icons/fa'

const FeedPage = () => {

  const [jobs, setJobs] = useState([])
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    // FETCHING CATEGORIES
    axiosClient.get('/jobs/categories')
    .then(({data}) => {
      setCategories(data);
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
    // FETCHING JOBS
    axiosClient.get('/jobs/all', {
      params: {
        category: category == "All" ? null : category,
        search: search
      }
    }).then(({data}) => {
      setJobs(data);
    }).catch((error) => {
      console.error("Error fetching jobs:", error);
    });

  }, [category, search]);

  const handleChangeCategory = (newCategory) => {
    setCategory(newCategory)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className={feedStyles['home-page']}>
      <div className={feedStyles['page-header']}>
        <PageTitle title="Hello, Welcome!" subtitle="Browse cleaning jobs to your heart's content!" />
        {/* <!-- Search Bar with Filters --> */}
        <div className={feedStyles['search-bar-section']}>
          <div className={feedStyles['search-bar']}>
            <input type="text" 
              placeholder="Type anything to search..."
              value={search}
              onChange={handleSearch}
            />
            <button className={feedStyles['search-button']}>
              <FaSearch className={feedStyles['search-icon']} />
            </button>
          </div>
        </div>
      </div>
      <div className={feedStyles['page-body']}>
        {/* JOB CATEGORIES */}
        <div className={feedStyles["job-categories-section"]}>
          <h3>Categories</h3>
          <ul>
            <li><button onClick={() => handleChangeCategory("All")}>All</button></li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button onClick={()=>handleChangeCategory(cat.id)}>{cat.title}</button>
              </li>
            ))}
          </ul>
        </div>
        {/* JOB CARDS */}
        <JobCardsContainer jobs={jobs} />
      </div>
    </div>
  )
}

export default FeedPage