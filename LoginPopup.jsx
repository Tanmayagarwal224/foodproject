import React, { useState } from 'react'
import './LoginPopup.css' 
import { assets } from '../../assets/assets'
    
    const LoginPopup = ({setShowLogin}) => {
    const[currentState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
       <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon }  alt="" />
        </div>

      <div className='login-popup-inputs'>
        {currentState==='login'?<></>:<input type="text" placeholder='your name' required/>}
          
          <input type="email" placeholder='your email' required />  
           <input type="password" placeholder='password' required /> 
      </div>

       <button>{currentState==="sign Up"?"create account":"login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing ,i agree to terms of use & privacy policy</p>
        </div>
        {currentState==="login"?
          <p>create a new account ? <span onClick={()=>setCurrentState("sign up")}>click here</span></p>:
       <p>Already have an account? <span onClick={()=>setCurrentState("login")}>login here</span> </p>
        }
       </form>
    </div>
  )
}

export default LoginPopup