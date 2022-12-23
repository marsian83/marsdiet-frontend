import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./DashBoard.scoped.css";
import DetailsPrompt from "./DetailsPrompt";
import UserProfile from "./UserProfile";

export const Dashboard = () => {
  
const [userData, setUserData] = useState({});
  return (
    <>
      <DetailsPrompt setUserData={setUserData}/>
      <div className="dashboard-container">
        <div className="container-left">
          <UserProfile userData={userData} setUserData={setUserData}/>
        </div>
        <div className="container-right">
          <div className="container-calorie">Calorie de be</div>
          <div className="container-water">paani pee be</div>
        </div>
      </div>
    </>
  );
};
