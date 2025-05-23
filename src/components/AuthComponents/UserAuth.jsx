import authStyles from './UserAuth.module.css'
import logoImg from '../../assets/images/logoImg.jpg'
import { createRef, useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const UserAuth = () => {

  // Refs to access elements for CSS modifications
  const container = createRef(null);
  const toSigninButton = createRef(null);
  const toSignupButton = createRef(null);

  useEffect(() => {

    const containerCurrent = container.current;
    const toSigninButtonCurrent = toSigninButton.current;
    const toSignupButtonCurrent = toSignupButton.current;

    const handleSignupClick = () => {
      containerCurrent.classList.add(authStyles.active);
    };
  
      const handleSigninClick = () => {
      containerCurrent.classList.remove(authStyles.active);
    };

    toSignupButtonCurrent.addEventListener('click', handleSignupClick);
    toSigninButtonCurrent.addEventListener('click', handleSigninClick);

    // Cleanup event listeners when the component unmounts
    return () => {
      toSignupButtonCurrent.removeEventListener('click', handleSignupClick);
      toSigninButtonCurrent.removeEventListener('click', handleSigninClick);
    }

  }, [])

  return (
    <div className={authStyles["container-body"]}>
      <div className={authStyles["container"]}  ref={container}>
        {/* R E G I S T E R */}
        <div className={`${authStyles['form-container']} ${authStyles['sign-up']}`}>
          <form action="POST">
            <Link to='/'><img className={authStyles['logo']} src={logoImg}/></Link>
            <h1>Create Your Account</h1>
            <span>Start with registration to continue.</span>
              <input type="text" name="full-name" placeholder='Enter Full Name' required />
              <input type="text" name="user-name" placeholder='Enter Username' required/>
              <input type="email" name="email" placeholder='Enter Email Address' required/>
              <input type="password" name="password" placeholder='Enter Password' required/>
              <input type="password" name="password_confirmation" placeholder='Confirm Password' required/>
            <button>SIGN UP</button>
          </form>
        </div>
        {/* LO G G I N G  I N */}
        <div className={`${authStyles['form-container']} ${authStyles['sign-in']}`}>
          <form action="POST">
            <Link to='/'><img className={authStyles['logo']} src={logoImg}/></Link>
            <h1>Sign in to CleanHub</h1>
            <span>Log in your account to continue.</span>
            <input type="email" name="email" placeholder='Enter Email' required/>
            <input type="password" name="password" placeholder='Enter Password' required/>
            <a href="#">Forgot Your Password?</a>
            <button>SIGN IN</button>
          </form>
        </div>
        {/* T O G G L E */}
        <div className={authStyles["toggle-container"]}>
          <div className={authStyles["toggle"]}>
            <div className={`${authStyles['toggle-panel']} ${authStyles['toggle-left']}`}>
              <h1>Welcome Friend!</h1>
              <p>Already have an account? Sign in to use site features.</p>
              <button className={`${authStyles['hidden']} ${authStyles['hidden-signin']}`} ref={toSigninButton} id='to-signin'>Sign in Here</button>
            </div>
            <div className={`${authStyles['toggle-panel']} ${authStyles['toggle-right']}`}>
              <h1>Hello Friend!</h1>
              <p>Doesn't have an account yet? Register to use site features.</p>
              <button className={`${authStyles['hidden']} ${authStyles['hidden-signup']}`}  ref={toSignupButton} id='to-signup'>Sign up Here</button>
            </div>
          </div>
        </div>
      </div>
  </div>    
  )
}

export default UserAuth