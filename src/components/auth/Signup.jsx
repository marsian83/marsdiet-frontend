import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import authWaves from "../../assets/auth-waves.svg";
import { useAuth } from "../../contexts/AuthContext";
import "./Signup.scoped.css";

const Signup = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup,googleSignin } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError(err.message.replace("Firebase:", ""));
    }
    setLoading(false);
  };

  const handleGoogleSignin = async () => {
    try {
      setError("");
      setLoading(true);
      await googleSignin();
      navigate("/");
    } catch (err) {
      setError(err.message.replace("Firebase:", ""));
    }
    setLoading(false);
  };

  return (
    <div className={props.current === "signup" ? "open" : "closed"}>
      <img id="element" src={authWaves} alt="waves" />
      <div id="content">
        <h1>Signup for MarsDiet</h1>
        {/* <p>Welcome! Fill all details correctly so that we can better understand you.</p> */}
        <form className="inputs-holder" onSubmit={handleSubmit}>
          <div className="input-bar">
            <label htmlFor="name">email</label>
            <input
              type="email"
              id="email"
              className="input"
              name="username"
              ref={emailRef}
            />
            <box-icon name="user" />
          </div>
          <div className="input-bar">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              className="input"
              name="password"
              ref={passwordRef}
            />
            <box-icon name="lock-alt" />
          </div>
          <div className="input-bar">
            <label htmlFor="password">confirm password</label>
            <input
              type="password"
              id="confirm-password"
              className="input"
              name="confirm-password"
              ref={confirmPasswordRef}
            />
            <box-icon name="lock-alt" />
          </div>
          <p
            className="login-hint"
            onClick={() => {
              props.setCurrent("login");
            }}
          >
            Already have an account? Login
          </p>
          <button id="btn" type="submit" disabled={loading}>
            Sign Up
          </button>
        </form>
        <div className="or-sign-in">
          <span>Or</span>
        </div>
        <button id="sign-in-with-google">
          <div className="play-on-hover" onClick={handleGoogleSignin} disabled={loading}/>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
