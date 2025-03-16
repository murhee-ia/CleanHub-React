import StarsCanvas from '../../components/HomeComponents/StarsCanvas'
import Banner from '../../components/HomeComponents/Banner.jsx'

const LandingPage = () => {

  const styles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 0,
    color: '#ffffff'
  }

  return (
    <div className="bg-gradient-green" style={styles}>
      <StarsCanvas/>
      <Banner/>
    </div>
  )
}

export default LandingPage