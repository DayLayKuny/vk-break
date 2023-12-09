import React from "react";
import "./google-auth.css";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  return (
    <div>
      <button className="google-auth-btn">
        <FcGoogle className="google-icon"/>
        <span>Google</span>
      </button>
    </div>
  );
};

export default GoogleAuth;
