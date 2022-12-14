import React, { useEffect } from "react";
import "./Auth.scoped.css";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const Auth = () => {
  const [current, setCurrent] = useState("login");

  const pageTransition = (page) => {
    setCurrent("hidden");
    setTimeout(() => {
      navigate(page);
    }, 300);
  };

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  });

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
    <>
      <div className={`transition-cover fade-out`} />
      <button
        className={`back-button ${current}`}
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
