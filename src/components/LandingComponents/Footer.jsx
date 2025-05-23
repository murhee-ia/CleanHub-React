import { NavLink, Link } from 'react-router-dom'
import footerStyles from './LandingComponents.module.css'
import { 
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaLocationArrow
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className={footerStyles["footer-container"]}>
      {/* <!-- About CleanHub Section --> */}
      <div className={footerStyles['about']}>
        <h4>About CleanHub</h4>
        <p>CleanHub bridges the gap between job hunters and recruiters looking for cleaning services. We aim to create a trusted community where both parties can benefit from seamless hiring and task completion.</p>
      </div>
      <div className={footerStyles["footer-content"]}>

        {/* <!-- Quick Links Section --> */}
        <div className={`${footerStyles['footer-section']} ${footerStyles['links']}`}>
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to=''>Browse Jobs</NavLink></li>
            <li><NavLink to='/l-about'>About Us</NavLink></li>
            <li><NavLink to='/l-help'>Get Help</NavLink></li>
          </ul>
        </div>

        {/* <!-- Contact Information Section --> */}
        <div className={`${footerStyles['footer-section']} ${footerStyles['contacts']}`}>
          <h4>Contact Us</h4>
          <p><FaEnvelope style={{marginTop: '3px', marginRight: '6px'}}></FaEnvelope>support@cleanhub.com</p>
          <p><FaPhone style={{marginTop: '3px', marginRight: '6px'}}></FaPhone>+1 234 567 890</p>
          <p><FaLocationArrow style={{marginTop: '3px', marginRight: '6px'}}></FaLocationArrow>123 CleanHub St, Dumaguete, PH</p>
        </div>

        {/* <!-- Social Media Section --> */}
        <div className={`${footerStyles['footer-section']} ${footerStyles['social-media']}`}>
          <h4>Follow Us</h4>
          <div className={footerStyles["social-icons"]}>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/ma.cristina.pasague/'><FaFacebook/></a>
            <a target="_blank" rel="noopener noreferrer" href='https://x.com/mria_louella?t=Lf7YgXm7R8LsnqJdtTbg4w&s=09'><FaTwitter/></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/mriasteena/'><FaInstagram/></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/login'><FaLinkedin/></a>
          </div>
        </div>
      </div>

      {/* <!-- Footer Bottom --> */}
      <div className={footerStyles["footer-bottom"]}>
        <p>&copy; 2024 CleanHub. All Rights Reserved. | <Link to="#">Privacy Policy</Link> | <Link to="#">Terms of Service</Link></p>
      </div>
    </section>
  )
}

export default Footer