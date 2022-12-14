import React from 'react'
import './Login.scoped.css'

const Login = () => {


//Login card js
const input = document.querySelectorAll('.input');
function inputFocus() {
    this.parentNode.classList.add('focus');
}
function inputBlur() {
    if(this.value === '' || this.value === null){
        this.parentNode.classList.remove('focus');
    }
}
input.forEach((e) => {
    e.addEventListener('focus', inputFocus);
    e.addEventListener('blur', inputBlur);
})


  return (
    <div>
    <div id="content">
        <h1>MarsDiet Login
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
        <button type="submit" id="btn">Login</button>
    </div>
    </div>
  )
}

export default Login
