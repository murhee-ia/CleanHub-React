import { useLayoutEffect, useRef, useState } from 'react'
import JobCard from './JobCard'
import jobCardsContainerStyles from './HomeComponents.module.css'

const JobCardsContainer = ({jobs}) => {

  const cardDetailsRefs = useRef([])
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    const calculateHeights = () => {
      const heights = cardDetailsRefs.current.map((ref) => ref?.offsetHeight || 0);
      const max = Math.max(...heights);
      setMaxHeight(max);
    };
    const frame = requestAnimationFrame(calculateHeights);
    return () => cancelAnimationFrame(frame);
  }, [jobs]);

  return (
    <div className={jobCardsContainerStyles["job-cards-container"]}>
      {
        jobs.length == 0 
          ? (<h1 
              style={{
                margin:'20px', 
                color:'white', 
                fontSize:'1.5rem', 
                fontWeight:'600'
              }}>
              No Jobs Available.
            </h1>)
          : (jobs.map( (job, index)=> (
            <JobCard 
              key={index}
              job={job}
              ref={(element) => (cardDetailsRefs.current[index] = element)}
              maxHeight={maxHeight}
            />
          )))
      }
    </div>
  )
}

export default JobCardsContainer