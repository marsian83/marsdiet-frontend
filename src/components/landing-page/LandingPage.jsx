import React from "react";
import Navbar from "../Navbar";
import "./LandingPage.scoped.css";
import { LandingPageBody } from "./LandingPageBody";
import LandingPageTop from "./LandingPageTop";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <LandingPageTop />
      <LandingPageBody />
    </>
  );
};

export default LandingPage;
