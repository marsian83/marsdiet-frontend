import React from "react";
import { useAuth } from "../contexts/AuthContext";
import LandingPage from "./landing-page/LandingPage";
import { Dashboard } from "./dashboard/Dashboard";

export const Home = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Dashboard /> : <LandingPage />;
};
