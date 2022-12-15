import React from 'react'
import './SignIn.scoped.css'

const SignIn = () => {
  return (
    <div>
    <div id="content">
        <h1>MarsDiet Sign In
        </h1>
        <p>Hey, Enter your details to get sign in to your account.</p>
        <div>
            <div className="input-bar">
                <label for="name">username</label>
                <input type="text" id="name" className="input" />
                <box-icon name='user'></box-icon>
            </div>
            <div className="input-bar">
                <label for="password">password</label>
                <input type="password" id="password" className="input" />
                <box-icon name='lock-alt' ></box-icon>
            </div>
            <p className='login-trouble'>Having trouble in Sign In? </p>
        </div>
        <button id="btn">Login</button>
        <div className='or-sign-in'><span>Or</span></div>
        <button id="sign-in-with-google">
            <div className='play-on-hover'></div>

            Sign in with Google</button>
    </div>   
    </div>
  )
}

export default SignIn
