import React from "react";
import "./Footer.scoped.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1" />
        <div className="wave" id="wave2" />
        <div className="wave" id="wave3" />
        <div className="wave" id="wave4" />
      </div>

      <ul className="menu">
        <li className="menu-item">
          <p className="menu-link" onClick={() => {}}>
            Home
          </p>
        </li>
        <li className="menu-item">
          <p className="menu-link" onClick={() => {}}>
            About us
          </p>
        </li>
        <li className="menu-item">
          <p className="menu-link" onClick={() => {}}>
            Contact us
          </p>
        </li>
      </ul>
      <p className="foot-note" style={{ opacity: 0.75 }}>Made with 🤍 by Riya & Spandan</p>
    </footer>
  );
};
