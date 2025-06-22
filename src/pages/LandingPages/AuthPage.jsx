import StarsCanvas from "../../components/LandingComponents/StarsCanvas"
import UserAuth from "../../components/AuthComponents/UserAuth"
import { Navigate } from "react-router-dom"
import { useStateContext } from "../../context/ContextProvider.jsx"
import { motion } from "framer-motion"
import { useEffect } from "react"

const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      y: direction === 'top' ? '-100%' : '100%',
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};

const AuthPage = () => {

  const {currentUser, token} = useStateContext()

  if (token && currentUser) {
    if (currentUser.role == 'normal') {
      return <Navigate to="/hub" />;
    }
    if (currentUser.role == 'admin') {
      return <Navigate to="/admin-panel" />;
    }
  }

  const styles = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 0,
  }

  return (
    <div className="bg-gradient-green" style={styles}>
      <motion.div
        variants={slideIn('top', "tween", 0.2, 1)}
        initial="hidden"
        animate="show">
        <UserAuth/>
      </motion.div>
      <StarsCanvas/>
    </div>
  )
}

export default AuthPage