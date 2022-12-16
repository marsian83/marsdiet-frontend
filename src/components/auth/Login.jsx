import React from "react";
import "./Login.scoped.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import authWaves from "../../assets/auth-waves.svg";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Login = (props) => {
  //useState hooks
  const [error, setError] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  //useRef hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  //Other hooks
  const { login, googleSignin } = useAuth();
  const navigate = useNavigate();

  //function to clear any errors and set error type to null
  const clearError = () => {
    setError({ type: null, message: "" });
  };

  //handling function for submission of the login form
  const handleSubmit = async (event) => {
    //Prevent the form from making the default post request
    event.preventDefault();

    //Clear any pre existing errors
    clearError();
    await new Promise((r) => setTimeout(r, 1)); //Sleep  for 1ms to ensure error is set again and classes reset

    //ERROR: Empty Fields
    if (!(emailRef.current.value && passwordRef.current.value)) {
      return setError({
        type: "login",
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

    //ERROR: Short password (Invalid as well)
    if (passwordRef.current.value.length < 6) {
      return setError({
        type: "credentials",
        message: "Wrong email/password",
      });
    }

    //signing up
    try {
      setLoading(true); //to de-activate buttons
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      //catch any other errors and set to login type
      setError({
        type: "login",
        message: err.message.replace("Firebase: ", ""),
      });
      //ERROR: user does not exist
      if (err.message.includes("user-not-found")) {
        setError({
          type: "credentials",
          message: "Invalid credentials",
        });
      }
      if (err.message.includes("wrong-password")) {
        setError({
          type: "credentials",
          message: "Invalid credentials",
        });
      }
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
        type: "login",
        message: err.message.replace("Firebase: ", ""),
      });
      //if user closes the signin popup
      if (err.message.includes("popup-closed-by-user")) {
        setError({
          type: "login",
          message: "Signin popup was abruptly closed, please try again",
        });
      }
    }

    setLoading(false); //to re-activate buttons
  };

  //useEffect hooks
  useEffect(() => {
    //Alert for any errors with login type
    error.type === "login" && alert(error.message);
  }, [error]);

  return (
    <div
      className={`container ${props.current === "login" ? "open" : "closed"}`}
    >
      <img id="element" src={authWaves} alt="waves" />
      <div id="content">
        <h1>Login to MarsDiet</h1>
        <form onSubmit={handleSubmit} className="inputs-holder">
          <div
            className={`input-bar ${
              error.type === "email" || error.type === "credentials"
                ? "error-input focus"
                : ""
            }`}
          >
            <label htmlFor="email">
              {error.type === "email" || error.type === "credentials"
                ? error.message
                : "Email"}
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
              error.type === "password" || error.type === "credentials"
                ? "error-input focus"
                : ""
            }`}
          >
            <label htmlFor="password">
              {error.type === "password" || error.type === "credentials"
                ? error.message
                : "Password"}
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
          <p
            className="signup-hint"
            onClick={() => {
              props.setCurrent("signup");
            }}
          >
            Don't have an account? click here to signup
          </p>
          <p className="forgot-password">Forgot password?</p>
          <button id="btn" type="submit" disabled={loading}>
            Login
          </button>
        </form>
        <div className="or-sign-in">
          <span>Or</span>
        </div>
        <button
          id="sign-in-with-google"
          onClick={handleGoogleSignin}
          disabled={loading}
        >
          <div className="play-on-hover" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
