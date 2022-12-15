import React from "react";
import "./Auth.scoped.css";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
// import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Auth = () => {
  const [current, setCurrent] = useState("login");
  const [transition, setTransition] = useState("fade-out");
  // const [currentLocation, setCurrentLocation] = useState("/");

  // useEffect(() => {
  //   setCurrent(window.location.split("/")[-1]);
  // }, []);

  const pageTransition = (page) => {
    setTransition("fade-in");
    setTimeout(() => {
      navigate(page);
    }, 300);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={`transition-cover ${transition}`} />
      <button
        className="back-button"
        onClick={() => {
          pageTransition(-1);
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} /> <p>Back</p>
      </button>
      <div className="auth-container">
        <Login setCurrent={setCurrent} current={current} />
        <Signup setCurrent={setCurrent} current={current} />
      </div>
    </>
  );
};

export default Auth;
