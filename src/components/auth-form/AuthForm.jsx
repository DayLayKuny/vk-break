import React, { useState } from "react";
import "./auth-form.css";
import SignInForm from "../signin-form/SignInForm";
import SignUpForm from "../signup-form/SignUpForm";

const AuthForm = ({ onClose, openAuth }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="auth">
      <div className="form-panel">
        <div
          className="auth-form-panel"
        >
          {showSignIn ? (
            <SignUpForm onSwitch={() => setShowSignIn(!showSignIn)} />
          ) : (
            <SignInForm onSwitch={() => setShowSignIn(!showSignIn)} />
          )}
        </div>
      </div>
      <div
        onClick={() => onClose()}
        style={{ height: "100vh", width: "100%", position: "absolute" }}
      ></div>
    </div>
  );
};

export default AuthForm;
