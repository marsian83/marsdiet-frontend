import React from "react";
import "./GradientElement.scoped.css";
import KUTE from "kute.js";
import { useEffect } from "react";

export const GradientElement = (props) => {
  // var tween = KUTE.fromTo(
  //   "#login-wave1",
  //   { path: "#login-wave1" },
  //   { path: "#login-wave2" },
  //   { repeat: 9999, duration: 5000, yoyo: true }
  // );
  // useEffect(() => {
  //   tween.start();
  // });
  return (
    <div
      className="element"
      style={{
        clipPath:
          props.current === "login"
            ? "polygon(0% 0%, 0% 0%, 100% 100%, 100% 0%)"
            : props.current === "signup"
            ? "polygon(0% 0%, 0% 100%, 100% 0%, 100% 0%)"
            : "",
      }}
    />
    // <svg
    //   id="visual"
    //   viewBox="0 0 900 600"
    //   width="900"
    //   height="600"
    //   xmlns="http://www.w3.org/2000/svg"
    //   version="1.1"
    // >
    //   <g transform="translate(0, 0)">
    //     <path
    //       id="login-wave1"
    //       d="M540.8 0C504.1 38.5 467.3 77.1 455 121.9C442.6 166.7 454.6 217.9 436.5 252C418.3 286.1 369.9 303.1 340.8 340.8C311.7 378.5 301.9 436.9 270.4 468.4C238.9 499.8 185.8 504.4 137.2 511.9C88.5 519.5 44.2 530.2 0 540.8L0 0Z"
    //       fill="#FBAE3C"
    //     />
    //   </g>
    //   <g transform="translate(0, 0)">
    //     <path
    //       id="login-wave2"
    //       d="M540.8 0C547.5 52.7 554.2 105.4 522.4 140C490.6 174.6 420.3 191.1 386.2 223C352.2 254.9 354.3 302.1 333.8 333.8C313.2 365.4 269.9 381.6 233 403.6C196.1 425.5 165.6 453.3 127.9 477.2C90.1 501 45 520.9 0 540.8L0 0Z"
    //       fill="#FBAE3C"
    //     />
    //   </g>
    // </svg>
  );
};
