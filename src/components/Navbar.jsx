import React from "react";
import "../styles/Navbar.css";
import "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={require("../assets/logo.png")} alt="logo" />
        <div className="navbar-brand-name">MarsDiet</div>
      </div>

      <div className="navbar-items">
        <div className="navbar-item">Home</div>
        <div className="navbar-item">About</div>
        <div className="navbar-item">Help</div>
        <div className="navbar-item" id="navbar-item-login">
            <button>
                Login
            </button></div>
      </div>
    </nav>
  );
};

export default Navbar;
