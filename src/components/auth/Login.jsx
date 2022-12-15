import React from "react";
import { useEffect } from "react";
import "./Login.scoped.css";
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
    <div className={props.current === "login" ? "open" : "closed"}>
      <div id="content">
        <h1>MarsDiet Login</h1>
        <p>Hey, Enter your details to get sign in to your account.</p>
        <div>
          <div className="input-bar">
            <label for="name">username</label>
            <input type="text" id="name" className="input" />
            <box-icon name="user" />
          </div>
          <div className="input-bar">
            <label for="password">password</label>
            <input type="password" id="password" className="input" />
            <box-icon name="lock-alt" />
          </div>
          <p
            className="login-trouble"
            onClick={() => {
              props.setCurrent("signup");
            }}
          >
            Having trouble in Sign In?{" "}
          </p>
        </div>
        <button id="btn">Login</button>
        <div className="or-sign-in">
          <span>Or</span>
        </div>
        <button id="sign-in-with-google">
          <div className="play-on-hover" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
