import React from "react";
import { Footer } from "../Footer";
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
      <Footer />
    </>
  );
};

export default LandingPage;
