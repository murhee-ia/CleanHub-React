import featureStyles from "./Landing.module.css"
import { FaCheck } from "react-icons/fa6"

const Features = () => {
  return (
    <section className={featureStyles['features-section']}>
      {/* HEADING */}
      <header className={featureStyles['features-header']}>
        <span>DISCOVER</span><span>Platform Features</span>
      </header>
      <div className={featureStyles['features-main-grid']}>
        {/* RECRUITERS */}
        <div className={featureStyles['col1']}>
          <h2>RECRUITERS</h2>
          <ul>
            {[
            "Create job listings easily for specific cleaning tasks to recruit the right cleaner",
            "View and manage all posted jobs, applications, and hired cleaners in one place",
            "Screen applicants based on qualifications, location, and ratings to find the best match",
            "Receive notifications when someone applies for your posted job"
            ].map((text, index) => (
            <li key={index} className={featureStyles['features-items']}>
              <FaCheck className={featureStyles['FaCheck']}/>
              <span>{text}</span>
            </li>
            ))}
          </ul>
        </div>
        {/* GENERAL */}
        <div className={featureStyles['col2']}>
          <h2>GENERAL</h2>
          <ul>
            {[
            "Ensure safety and trust with user verification for both recruiters and job hunters",
            "Use location-based filtering to connect recruiter and hunters nearby",
            "Access all features on the go including job posting, browsing, managing, and tracking",
            "Keep track of all past jobs or applications for both recruiters and job hunters",
            "Get assistance with job disputes or platform-related questions through the customer support",
            ].map((text, index) => (
            <li key={index} className={featureStyles['features-items']}>
              <FaCheck className={featureStyles['FaCheck']}/>
              <span>{text}</span>
            </li>
            ))}
          </ul>
        </div>
        {/* JOB HUNTERS */}
        <div className={featureStyles['col3']}>
          <h2>JOB HUNTERS</h2>
          <ul>
            {[
            "Search for available cleaning tasks by location, type, pay rate, or schedule with ease",
            "Quick application process for jobs that suit your skills and your availability",
            "A profile showcasing your cleaning experience, ratings, and past work for credibility",
            "Get notifications like when a recruiter selected your job application"
            ].map((text, index) => (
            <li key={index} className={featureStyles['features-items']}>
              <FaCheck className={featureStyles['FaCheck']}/>
              <span>{text}</span>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features