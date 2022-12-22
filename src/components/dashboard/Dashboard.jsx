import React from "react";
import "./DashBoard.scoped.css";
import { useAuth } from "../../contexts/AuthContext";
import DetailsPrompt from "./DetailsPrompt";


export const Dashboard = () => {
  
  const { logout } = useAuth();

  return (

    <div>
      <DetailsPrompt />
      
      {/* <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
      <div className="user-profile">

      </div> */}
    </div>
  );
};
