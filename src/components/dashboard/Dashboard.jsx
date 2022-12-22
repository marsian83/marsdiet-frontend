import React from "react";
import { useEffect } from "react";
import "./DashBoard.scoped.css";
import { useAuth } from "../../contexts/AuthContext";
import DetailsPrompt from "./DetailsPrompt";
import { useNavigate } from "react-router";


export const Dashboard = () => {
  
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (

    <div>
      <DetailsPrompt />
      
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};
