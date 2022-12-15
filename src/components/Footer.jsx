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
        <li className="menu__item">
          <a className="menu__link" onClick={() => {}}>
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" onClick={() => {}}>
            About us
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" onClick={() => {}}>
            Contact us
          </a>
        </li>
      </ul>
      <p style={{ opacity: 0.75 }}>Made with 🤍 by Riya & Spandan</p>
    </footer>
  );
};
