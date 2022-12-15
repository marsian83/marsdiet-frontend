import React from "react";
import "./Auth.scoped.css";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";

const Auth = () => {
  const [current, setCurrent] = useState("login");

  return (
    <>
      <div className="transition-cover" />
      <div className="auth-container">
        <Login setCurrent={setCurrent} current={current} />
        <Signup setCurrent={setCurrent} current={current} />
      </div>
    </>
  );
};

export default Auth;
