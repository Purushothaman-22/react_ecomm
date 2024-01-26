import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='signup'>
        <div className='container'>
            <h1>Sign Up</h1>
            <div className="field">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Mail Id'  />
                <input type="password" placeholder='Enter Your Password' />
            </div>
            <button>Continue</button>
            <p className='login'>Already have an Account? <span>LoginIN Here</span></p>
            <div className="agree">
                <input type="checkbox" name='' id=''/>
                <p>By Continuing ,I Agree to the Terms and Conditions of the Company Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Login