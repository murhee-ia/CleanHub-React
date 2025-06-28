import React from 'react'
import ListCard from './ListCard'
import listCardsContainerStyles from './HomeComponents.module.css'

const ListCardsContainer = ({jobs, isPostPage}) => {
  return (
    <div className={listCardsContainerStyles["list-cards-container"]} >
      {
        jobs.length == 0 
          ? (<h1 
              style={{
                margin:'20px', 
                color:'white', 
                fontSize:'1.5rem', 
                fontWeight:'600'
              }}>
              {isPostPage ? "Nothing has been posted yet." : "You haven't applied to any job yet."}
            </h1>)
          : (jobs.map( (job, index)=> (
            <ListCard 
              key={job.id} 
              job={job}
              isPostPage={isPostPage} 
            />
          )))
      }
    </div>
  )
}

export default ListCardsContainer