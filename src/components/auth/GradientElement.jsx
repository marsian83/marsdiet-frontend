import React from "react";
import "./GradientElement.scoped.css";
import authWaves from "../../assets/auth-waves.svg";

export const GradientElement = (props) => {
  return (
    // <div
    //   className="element"
    //   style={{
    //     clipPath:
    //       props.current === "login"
    //         ? "polygon(0% 0%, 0% 0%, 100% 100%, 100% 0%)"
    //         : props.current === "signup"
    //         ? "polygon(0% 0%, 0% 100%, 100% 0%, 100% 0%)"
    //         : "",
    //   }}
    // />
    // <div className="element">

    <img className={`element ${props.current} `} src={authWaves} alt="waves" />
  );
};
