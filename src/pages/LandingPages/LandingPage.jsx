import StarsCanvas from '../../components/LandingComponents/StarsCanvas'
import Banner from '../../components/LandingComponents/Banner.jsx'
import Features from '../../components/LandingComponents/Features.jsx'
import Guide from '../../components/LandingComponents/Guide.jsx'

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
      <Features/>
      <Guide/>
    </div>
  )
}

export default LandingPage