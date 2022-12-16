import React from "react";
import "./LandingPageTop.scoped.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const LandingPageTop = () => {

  //useState Hooks
  const [authTransition, setAuthTransition] = useState(false);
  //other Hooks
  const navigate = useNavigate();

  // Function to go to Authorisation page
  const goToAuth = () => {
    setAuthTransition(true);
    setTimeout(() => {
      navigate("/auth");
    }, 300);
  };

  return (
    <div className="container">
      <div
        className={`transition-cover ${
          authTransition ? "show-transition-cover" : ""
        }`}
      />
      <div className="container-left">
        <div className="container-left-heading">
          Healthy <br /> <span>food</span> for <br />a healthy life
        </div>
        <div className="container-left-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          eius, impedit aliquid amet atque assumenda minus dignissimos omnis sit
          voluptatibus vero! Modi qui dolore quisquam! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Accusamus nisi, numquam ullam
          cumque perferendis facere quasi nostrum molestias repellat totam non
          soluta! Adipisci, alias esse!
        </div>
        <div className="container-left-buttons">
          <button onClick={goToAuth}>Login</button>
          <button onClick={goToAuth}>SignUp</button>
        </div>
      </div>
      <div className="container-right">
        <div className="container-right-circle" />
        <img
          src={require("../../assets/landingpage-mascot.png")}
          alt="mascot"
        />

        <div className="animated-area">
          {
            // eslint-disable-next-line
            <TypeAnimation
              sequence={[
                "Tell us what you ate",
                5000,
                "I ate 3 slices of white-bread",
                1500,
                "2 Glasses of milk",
                2000,
                "I had a chicken leg",
                1000,
                "or just upload a picture!",
                3000,
                `Leave the rest to us`,
                1500,
                `We'll track your calories`,
                1500,
                "and Nutrients!",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2.2em", opacity: "80%" }}
            />
          }
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="animated-text-area-search"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageTop;
