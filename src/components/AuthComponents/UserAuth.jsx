import authStyles from './UserAuth.module.css'
import logoImg from '../../assets/images/logoImg.jpg'
import axiosClient from '../../axios-client.js'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useStateContext } from '../../context/ContextProvider'

const UserAuth = () => {

  const { saveUser, saveToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);

  // Refs to access elements for CSS modifications
  const container = useRef(null);
  const toSigninButton = useRef(null);
  const toSignupButton = useRef(null);

  useEffect(() => {

    const containerCurrent = container.current;
    const toSigninButtonCurrent = toSigninButton.current;
    const toSignupButtonCurrent = toSignupButton.current;

    const handleSignupClick = () => {
      containerCurrent.classList.add(authStyles.active);
      setErrors(null);
      setMessage(null);
    };
  
      const handleSigninClick = () => {
      containerCurrent.classList.remove(authStyles.active);
      setErrors(null);
    };

    toSignupButtonCurrent.addEventListener('click', handleSignupClick);
    toSigninButtonCurrent.addEventListener('click', handleSigninClick);

    // Cleanup event listeners when the component unmounts
    return () => {
      toSignupButtonCurrent.removeEventListener('click', handleSignupClick);
      toSigninButtonCurrent.removeEventListener('click', handleSigninClick);
    }

  }, [])

  // F O R   A U T H E N T I C A T I O N
  const fullNameRef = useRef();
  const userNameRef = useRef();
  const emailSignupRef = useRef();
  const passwordSignupRef = useRef();
  const passwordConfirmationRef = useRef();
  const emailSigninRef = useRef();
  const passwordSigninRef = useRef();
  const rememberSigninRef = useRef();

  const onUserSignup = (event) => {
    event.preventDefault()
    setErrors(null)
    const payload = {
      full_name: fullNameRef.current.value,
      user_name: userNameRef.current.value,
      email: emailSignupRef.current.value,
      password: passwordSignupRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/auth/register', payload)
      .then(({data}) => {
        setMessage(data.message);
        toSigninButton.current.click();
        fullNameRef.current.value = ''
        userNameRef.current.value = ''
        emailSignupRef.current.value = ''
        passwordSignupRef.current.value = ''
        passwordConfirmationRef.current.value = ''
      }).catch( error => {
        const response = error.response
        if (response && response.data && response.data.errors) {
          setErrors(response.data.errors)
        } else {
          setErrors({ general: ['An error occurred during registration'] })
        }
      })
  }

  const onUserSignin = (event) => {
    event.preventDefault()
    setErrors(null)
    setMessage(null)
    const payload = {
      email: emailSigninRef.current.value,
      password: passwordSigninRef.current.value,
      remember: rememberSigninRef.current.checked,
    }
    axiosClient.post('/auth/login', payload)
      .then(({data}) => {
        saveUser(data.user)
        saveToken(data.token)
      }).catch( error => {
        const response = error.response
        if (response && response.status == 401) {
          setErrors({ status: 401, message: [response.data.message]})
        } else {
          setErrors({ general: ['An error occurred during login'] })
        }
      })
  }

  const renderFieldError = (fieldName) => {
    if (errors && errors[fieldName]) {
      return (
        <div className={authStyles['error-message']}>
          {Array.isArray(errors[fieldName]) ? errors[fieldName][0] : errors[fieldName]}
        </div>
      );
    }
    return null;
  };
  
  const renderGeneralError = () => {
    if (errors && errors.general) {
      return (
        <div className={authStyles['error-message-general']}>
          {errors.general[0]}
        </div>
      );
    } else if (errors && errors.status == 401) {
      return (
        <div className={authStyles['error-message-general']}>
          {errors.message}
        </div>
      );
    }
    return null;
  };
  
  const renderSuccessMessage = () => {
    if (message) {
      return (
        <div className={authStyles['success-message']}>
          {message}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={authStyles["container-body"]}>
      <div className={authStyles["container"]}  ref={container}>
        {/* R E G I S T E R */}
        <div className={`${authStyles['form-container']} ${authStyles['sign-up']}`}>
          <form action="POST" onSubmit={onUserSignup}>
            <Link to='/'><img className={authStyles['logo']} src={logoImg} alt="Logo"/></Link>
            <h1>Create Your Account</h1>
            <span>Start with registration to continue.</span>
            {renderGeneralError()}
            <div className={authStyles['input-group']}>
              <input ref={fullNameRef} type="text" placeholder='Enter Full Name' required />
              {renderFieldError('full_name')}
            </div>
            <div className={authStyles['input-group']}>
              <input ref={userNameRef} type="text" placeholder='Enter Username' required/>
              {renderFieldError('user_name')}
            </div>
            <div className={authStyles['input-group']}>
              <input ref={emailSignupRef} type="email" placeholder='Enter Email Address' required/>
              {renderFieldError('email')}
            </div>
            <div className={authStyles['input-group']}>
              <input ref={passwordSignupRef} type="password" placeholder='Enter Password' required/>
              {renderFieldError('password')}
            </div>
            <div className={authStyles['input-group']}>
              <input ref={passwordConfirmationRef} type="password" placeholder='Confirm Password' required/>
              {renderFieldError('password_confirmation')}
            </div>
            <button type="submit">SIGN UP</button>
          </form>
        </div>
        {/* LO G G I N G  I N */}
        <div className={`${authStyles['form-container']} ${authStyles['sign-in']}`}>
          <form action="POST" onSubmit={onUserSignin}>
            <Link to='/'><img className={authStyles['logo']} src={logoImg} alt="Logo"/></Link>
            <h1>Sign in to CleanHub</h1>
            <span>Log in your account to continue.</span>
            {renderGeneralError()}
            {renderSuccessMessage()}
            <div className={authStyles['input-group']}>
              <input ref={emailSigninRef} type="email" placeholder='Enter Email' required/>
            </div>
            <div className={authStyles['input-group']}>
              <input ref={passwordSigninRef} type="password" placeholder='Enter Password' required/>
            </div>
            <div className={authStyles['form-misc']}>
              <div className={authStyles['remember-me']}>
                <input ref={rememberSigninRef} type="checkbox" />
                <label htmlFor="remember-signin">Remember me</label>
              </div>
              <a href="#">Forgot Your Password?</a>
            </div>
            <button type="submit">SIGN IN</button>
          </form>
        </div>
        {/* T O G G L E */}
        <div className={authStyles["toggle-container"]}>
          <div className={authStyles["toggle"]}>
            <div className={`${authStyles['toggle-panel']} ${authStyles['toggle-left']}`}>
              <h1>Welcome Friend!</h1>
              <p>Already have an account? Sign in to use site features.</p>
              <button className={`${authStyles['hidden']} ${authStyles['hidden-signin']}`} ref={toSigninButton} id='to-signin' type="button">Sign in Here</button>
            </div>
            <div className={`${authStyles['toggle-panel']} ${authStyles['toggle-right']}`}>
              <h1>Hello Friend!</h1>
              <p>Doesn't have an account yet? Register to use site features.</p>
              <button className={`${authStyles['hidden']} ${authStyles['hidden-signup']}`} ref={toSignupButton} id='to-signup' type="button">Sign up Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default UserAuth