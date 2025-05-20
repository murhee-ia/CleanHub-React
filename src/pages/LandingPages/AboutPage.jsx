import aboutStyles from './LandingPages.module.css'
import { FaEye, FaFlag, FaMedal  } from 'react-icons/fa'
import profilePic from '../../assets/images/profile-pic.jpg'

const AboutPage = () => {
  return (
    <div>
      <header className={aboutStyles['landing-page-header']}>LEARN ALL ABOUT</header>
      {/* WHY SECTION */}
      <section className={aboutStyles['section-container']}>
        <h1>WHY?</h1>
        <p style={{textAlign:'center', color:'var(--green-950)'}}>Why did we make CleanHub?</p>
        <div>
          <p className={aboutStyles['why-text']}>At CleanHub, we believe that finding quality cleaning services and connecting with job opportunities should be simple and accessible. Many people, whether government entities, businesses, or homeowners, face difficulties in finding trustworthy and reliable cleaners for their specific needs. Traditional hiring methods can be time-consuming, lack transparency, and often fail to provide a quick solution. On the other hand, there are many individuals who seek flexible, short-term work but struggle to find reliable platforms that connect them with such opportunities.</p>
        </div>
      </section>
      {/* WHAT SECTION */}
      <section className={aboutStyles['section-container']}>
        <h1>WHAT?</h1>
        <p style={{textAlign:'center', color:'var(--green-950)'}}>What do we propose as solution?</p>
        <div className={aboutStyles['what-container']} style={{textAlign:'justify'}}>
          <div className={aboutStyles['box']}>
            <FaEye className={aboutStyles['icon']}></FaEye>
            <h3>VISION</h3>
            <div></div>
            <p>To be the leading platform for connecting communities, organization, and individuals with reliable cleaning services, creating cleaner and healthier environments while empowering job seekers with opportunities and also promoting economic growth while supporting local communities.</p>
          </div>
          <div className={aboutStyles['box']}>
            <FaFlag className={aboutStyles['icon']}></FaFlag>
            <h3>MISSION</h3>
            <div></div>
            <p>To bridge the gap between those in need of cleaning services and individuals seeking flexible work by providing an intuitive, secure, and efficient platform. We aim to build trust, reliability, and convenience, ensuring a positive and rewarding experience for both service seekers and providers.</p>
          </div>
          <div className={aboutStyles['box']}>
            <FaMedal className={aboutStyles['icon']}></FaMedal>
            <h3>GOALS</h3>
            <div></div>
            <p>To create a trusted platform that connects job seekers with recruiters through secure systems, offering flexible opportunities and high-quality services. We aim to expand our reach by partnering with communities, businesses, and goverments increasing job availability across regions.</p>
          </div>
        </div>
      </section>
      {/* WHO SECTION */}
      <section className={aboutStyles['section-container']}>
        <h1>WHO?</h1>
        <p style={{textAlign:'center', color:'var(--green-950)'}}>Meet the person behind CleanHub</p>
        <div className={aboutStyles['who-container']}>
          <div className={aboutStyles['profile']}>
            <div className={aboutStyles['profile-pic']}><img src={profilePic}/></div>
            <h3>Ma. Cristina M. Pasague</h3>
            <small><i>Software Engineer</i></small>
            <p className={aboutStyles['profile-intro']}>Cristina is a skilled software engineer and a technology expert. She has contributed to several big open-source projects.</p>
          </div>
          <div className={aboutStyles['profile-details']}>
            <h3 className={aboutStyles['profile-details-title']}>Profile Details</h3>
            <div className={aboutStyles['br']}></div>
            <span>Education: </span><p>Bachelor of Science in Computer Science, NORSU</p>
            <span>Email: </span><p>mcrispasague@gmail.com</p>
            <span>Address: </span><p>431 Pulantubig, Dumaguete City, PH</p>
            <span>Company: </span><p>Example Corporation</p>
          </div>
        </div>
      </section>
      <h1 className={aboutStyles['last-greetings']}>THANK YOU!</h1>
    </div>
  )
}

export default AboutPage