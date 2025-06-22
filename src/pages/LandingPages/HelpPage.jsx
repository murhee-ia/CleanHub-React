import { useState } from "react"
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client.js"
import helpStyles from "./LandingPages.module.css"
import { FaSearch, FaArrowLeft } from 'react-icons/fa'
import Footer from "../../components/LandingComponents/Footer.jsx";


const HelpPage = () => {

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    try{
      const response = await axiosClient.post('/help-request', {name, email, category, message})
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Failed to submit your request. Try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <header className={helpStyles['landing-page-header']}>GET HELP & FAQs</header>
      <section className={helpStyles['section-container']}>
        <form action="#" method='POST' className={helpStyles['search-help-form']}>
          <FaSearch className={helpStyles['search-icon']}/>
          <input type="text" id="search-help" name="search-help" placeholder="Search FAQs..."/>
        </form>
        <h1>Ask Help For Your Problem</h1>
        <p style={{textAlign:'center', color:'var(--green-950)'}}>By correctly filling in the form below:</p>
        <form onSubmit={handleSubmit} className={helpStyles['get-help-form']}>
          <label htmlFor="name">NAME: </label>
            <input type="text" placeholder='Type your full name' required value={name}
            onChange={(event) => setName(event.target.value)}/>
          <label htmlFor="email">EMAIL: </label>
            <input type="email" placeholder='Provide an active email' required value={email}
            onChange={(event) => setEmail(event.target.value)}/>
          <label htmlFor="category">CATEGORY: </label>
            <select id="category" name="category" required value={category}
              onChange={(event) => setCategory(event.target.value)}>
              <option value="" disabled>Select which category is the message about</option>
              <option value="recruiter">Job Recruiting</option>
              <option value="hunter">Job Hunting</option>
              <option value="general">In General</option>
            </select>
          <label htmlFor="question">MESSAGE: </label>
            <textarea name="question" placeholder='State your concerns...' rows='5' required value={message}
            onChange={(event) => setMessage(event.target.value)}></textarea>
          <button type="submit" className={`${helpStyles['submit-button']} ${'whiteShadow'}`}>
            {loading ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </section>
      <h1 className={helpStyles['last-greetings']}>GLAD TO ASSIST YOU!</h1>
      {/* GO BACK BUTTON */}
      <div style={{textAlign: 'center'}}>
        <Link to="/" className={helpStyles['back-button']}>
          <FaArrowLeft className={helpStyles['back-icon']}/>
          <span>Back</span>
        </Link>
      </div>
      <Footer/>
    </div>
  )
}

export default HelpPage