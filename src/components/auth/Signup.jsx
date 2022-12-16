import React from "react";
import "./Signup.scoped.css";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import authWaves from "../../assets/auth-waves.svg";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Signup = (props) => {
  //useState hooks
  const [error, setError] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  //useRef hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  //Other hooks
  const { signup, googleSignin } = useAuth();
  const navigate = useNavigate();

  //function to clear any errors and set error type to null
  const clearError = () => {
    setError({ type: null, message: "" });
  };

  //handling function for submission of the signup form
  const handleSubmit = async (event) => {
    //Prevent the form from making the default post request
    event.preventDefault();

    //Clear any pre existing errors
    clearError();
    await new Promise((r) => setTimeout(r, 1)); //Sleep  for 1ms to ensure error is set again and classes reset

    //ERROR: Empty Fields
    if (
      !(
        emailRef.current.value &&
        passwordRef.current.value &&
        confirmPasswordRef.current.value
      )
    ) {
      return setError({
        type: "signup",
        message: "Please fill out all the fields",
      });
    }

    //ERROR: Invalid email
    if (!validateEmail(emailRef.current.value)) {
      return setError({
        type: "email",
        message: "Invalid email",
      });
    }

    //ERROR: Short password
    if (passwordRef.current.value.length < 6) {
      return setError({
        type: "password",
        message: "Password must have atleast 6 character",
      });
    }

    //ERROR: Not matching passwords
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError({
        type: "confirmPassword",
        message: "Passwords do not match",
      });
    }

    //signing up
    try {
      setLoading(true); //to de-activate buttons
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      //catch any errors and set to signup type
      setError({
        type: "signup",
        message: err.message.replace("Firebase:", ""),
      });
    }

    setLoading(false); //to re-activate buttons
  };

  const handleGoogleSignin = async () => {
    //Clear any pre existing errors
    clearError();
    await new Promise((r) => setTimeout(r, 1)); //Sleep  for 1ms to ensure error is set again and classes reset

    //signin with google
    try {
      setLoading(true); //to de-acivate buttons
      await googleSignin();
      navigate("/");
    } catch (err) {
      //catch any errors and set to signup type
      setError({
        type: "signup",
        message: err.message.replace("Firebase:", ""),
      });
    }

    setLoading(false); //to re-activate buttons
  };

  return (
    <div className={props.current === "signup" ? "open" : "closed"}>
      <img id="element" src={authWaves} alt="waves" />
      <div id="content">
        <h1>Signup for MarsDiet</h1>
        <form className="inputs-holder" onSubmit={handleSubmit}>
          <div
            className={`input-bar ${
              error.type === "email" ? "error-input focus" : ""
            }`}
          >
            <label htmlFor="email">
              {error.type === "email" ? error.message : "Email"}
            </label>
            <input
              type="email"
              id="email"
              className="input"
              name="username"
              ref={emailRef}
              onChange={clearError}
              required
            />
          </div>
          <div
            className={`input-bar ${
              error.type === "password" ? "error-input focus" : ""
            }`}
          >
            <label htmlFor="password">
              {error.type === "password" ? error.message : "Password"}
            </label>
            <input
              type="password"
              id="password"
              className="input"
              name="password"
              ref={passwordRef}
              onChange={clearError}
              required
            />
          </div>
          <div
            className={`input-bar ${
              error.type === "confirmPassword" ? "error-input focus" : ""
            }`}
          >
            <label htmlFor="confirm-password">
              {error.type === "confirmPassword"
                ? error.message
                : "Confirm Password"}
            </label>
            <input
              type="password"
              id="confirm-password"
              className="input"
              name="confirm-password"
              onChange={clearError}
              ref={confirmPasswordRef}
              required
            />
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
        <button id="sign-in-with-google" disabled={loading}>
          <div className="play-on-hover" onClick={handleGoogleSignin} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
