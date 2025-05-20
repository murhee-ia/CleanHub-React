import { useState, useEffect } from 'react'
import {NavLink, Link} from 'react-router-dom'
import bannerStyles from './LandingComponents.module.css'
import logoImg from '../../assets/images/logoImg.jpg'
import bannerImg from '../../assets/images/bannerImg.png'
import { FaBars } from 'react-icons/fa6'

const Banner = () => {

  const [isMenuClicked, setMenuClicked] = useState(false);
  const [isMobileSized, setIsMobileSized] = useState(false);

  // For Mobile Size Condition
  const checkScreenSize = () => {
    const isMobile = window.innerWidth <= 640;
    setIsMobileSized(isMobile);
  };

  useEffect(() => {
    checkScreenSize();  // Initial check
    window.addEventListener('resize', checkScreenSize);  // Add event listener to set window size
    return () => {
      window.removeEventListener('resize', checkScreenSize);  // Cleanup the event listener on unmount
    };
  }, []);

  const handleClick = (event) => {
    setMenuClicked(!isMenuClicked);
  };

  return (
    <section className={bannerStyles['banner-section']}>
        <nav className={bannerStyles['banner-nav']}>
          {/* LOGO */}
          <div className={bannerStyles['logo-container']}>
            <img src={logoImg} /><span>CleanHub</span>
          </div>
          {/* BUTTONS */}
          <div className={bannerStyles['buttons-container']}>
            <NavLink to="/l-jobs" className={bannerStyles['button']}>Jobs</NavLink>
            <NavLink to="/l-help" className={bannerStyles['button']}>Help</NavLink>
            <NavLink to="/l-about" className={bannerStyles['button']}>About</NavLink>
            <NavLink to="/join-now" className={`${bannerStyles['button']} ${bannerStyles['main-button']}`}>Join Now!</NavLink>
          </div> 
          {/* For mobile buttons */}
          {isMobileSized && (
          <div className={bannerStyles['buttons-container']} style={{display: isMenuClicked ? 'flex':'none'}}>
            <NavLink to="/l-jobs" className={bannerStyles['button']}>Jobs</NavLink>
            <NavLink to="/l-help" className={bannerStyles['button']}>Help</NavLink>
            <NavLink to="/l-about" className={bannerStyles['button']}>About</NavLink>
            <NavLink to="/join-now" className={bannerStyles['button']}>Join Now</NavLink>
            <button className={bannerStyles['close-button']} onClick={(event) => handleClick(event)}>Close</button>
          </div>)}
          {isMobileSized && (
            <button className={bannerStyles['bar-button']} onClick={(event) => handleClick(event)}>
              <FaBars className={bannerStyles['FaBars']}></FaBars>
            </button>
          )}
        </nav>
        <div className={bannerStyles['banner-article-container']}>
            <article className={bannerStyles['article']}>
              <h1 className={bannerStyles['article-h1']}>"Spark Up Spaces to Power Up Careers — Jobs and Cleaners, <span>Perfectly Matched!</span>"</h1>
              <p className={bannerStyles['article-p']}>Welcome to <span>CleanHub</span>, an online community that easily connects job hunters with flexible cleaning gigs. Are you a government agency looking to maintain public spaces? Private homeowner in need of a tidy vacation house? Someone seeking short-term work with fast pay? CleanHub got you covered! Post or find cleaning jobs effortlessly, and get tasks done on your schedule.</p>
              <div className='letsbeginbutton-container'>
                <button className='whiteShadow'><Link to='/join-now'>Let's Begin</Link></button>
              </div>
            </article>
            <div className={bannerStyles['bannerImg-container']}>
              <img src={bannerImg} />
            </div>
        </div>
    </section>
  )
}

export default Banner