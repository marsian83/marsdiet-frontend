import React from "react";
import "./Signup.scoped.css";

const Signup = (props) => {
  return (
    <div className={props.current === "signup" ? "open" : "closed"}>
      <div id="content">
        <h1>MarsDiet Sign In</h1>
        <p>Hey, Enter your details to get sign in to your account.</p>
        <div>
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
            className="login-trouble"
            onClick={() => {
              props.setCurrent("login");
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

export default Signup;