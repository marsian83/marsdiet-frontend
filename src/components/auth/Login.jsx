import React from "react";
import { useEffect } from "react";
import "./Login.scoped.css";
import authWaves from "../../assets/auth-waves.svg";
import "../../assets/google_logo.gif";
import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const Login = (props) => {
  const { login, googleSignin } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!passwordRef.current.value || !emailRef.current.value) {
      return setError("please fill out all the fields");
    }
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
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
        <h1>Login to MarsDiet</h1>
        <form onSubmit={handleSubmit} className="inputs-holder">
          <div className="input-bar">
            <label htmlFor="name">email</label>
            <input
              type="text"
              id="email"
              className="input"
              name="email"
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
