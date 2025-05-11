import StarsCanvas from '../../components/LandingComponents/StarsCanvas'

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
    </div>
  )
}

export default LandingPage