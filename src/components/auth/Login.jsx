import React from "react";
import { useEffect } from "react";
import "./Login.scoped.css";
import authWaves from "../../assets/auth-waves.svg";
import "../../assets/google_logo.gif";

const Login = (props) => {
  //Login card js
  const inputAnimation = () => {
    const input = document.querySelectorAll(".input");
    function inputFocus() {
      this.parentNode.classList.add("focus");
    }
    function inputBlur() {
      if (this.value === "" || this.value === null) {
        this.parentNode.classList.remove("focus");
      }
    }
    input.forEach((e) => {
      e.addEventListener("focus", inputFocus);
      e.addEventListener("blur", inputBlur);
    });
  };

  useEffect(() => {
    inputAnimation();
  });

  return (
    <div
      className={`container ${props.current === "login" ? "open" : "closed"}`}
    >
      <img id="element" src={authWaves} alt="waves" />
      <div id="content">
        <h1>MarsDiet Login</h1>
        <div className="inputs-holder">
          <div className="input-bar">
            <label htmlFor="name">username</label>
            <input type="text" id="name" className="input" />
            <box-icon name="user" />
          </div>
          <div className="input-bar">
            <label htmlFor="password">password</label>
            <input type="password" id="password" className="input" />
            <box-icon name="lock-alt" />
          </div>
          <p
            className="signup-hint"
            onClick={() => {
              props.setCurrent("signup");
            }}
          >
            Don't have an account? click here to signup
          </p>
          <p
            className="forgot-password"
          >
            Forgot password?
          </p>
        </div>
        <button id="btn">Login</button>
        <div className="or-sign-in">
          <span>Or</span>
        </div>
        <button id="sign-in-with-google">
          <div className="play-on-hover" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
