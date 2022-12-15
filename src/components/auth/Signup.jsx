import React from "react";
import "./Signup.scoped.css";

const Signup = (props) => {
  return (
    <div className={props.current === "signup" ? "open" : "closed"}>
      <div id="content">
        <h1>MarsDiet Sign Up</h1>
        <p>Welcome! Fill all details correctly so that we can better understand you.</p>
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
        <button id="btn">Sign Up</button>
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

export default Signup;
