import React from "react";
import "./Navbar.scoped.css";
import { useEffect, useState } from "react";
import "../assets/logo.png";

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

const Navbar = () => {

  // useState Hooks
  const [currentPath, setCurrentPath] = useState("/");
  const [fix, setFix] = useState(false);

  //For fixing Navbar at top after scroll of 1vh
  window.addEventListener("scroll", () => {
    setFix(window.scrollY > vh(1));
  });

  // useEffect Hooks
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  
  return (
    <nav className={fix ? "navbar fixed" : "navbar"}>
      <div className="navbar-brand">
        <img src={require("../assets/logo.png")} alt="logo" />
        <div className="navbar-brand-name">MarsDiet</div>
      </div>

      <div className="navbar-items">
        <div
          className={
            currentPath === "/" ? "navbar-item-selected" : "navbar-item"
          }
        >
          Home
        </div>
        <div className="navbar-item">About</div>
        <div className="navbar-item">Help</div>
        <div className="navbar-item" id="navbar-item-login">
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
