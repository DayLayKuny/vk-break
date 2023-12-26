import React from "react";
import "./google-auth.css";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "react-google-login";
import axios from "axios";

const GoogleAuth = () => {
  const clientId =
    "273726765193-khtt9bfjq0r3ojbktp5a9qerh56di00v.apps.googleusercontent.com";

  const onSuccess = (res) => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      const data = res.profileObj;
      axios
        .post(
          `http://socarm/api.php?action=auth_google&email=${data.email}&google_id=${data.googleId}&name=${data.name}&image=${data.imageUrl}&token=${res.accessToken}`
        )
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("user_token", res.data.token);
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  const onFail = (res) => {
    console.warn(res);
  };

  return (
    <div>
      <GoogleLogin
        className="google-auth-btn"
        clientId={clientId}
        buttonText={"Google"}
        onSuccess={onSuccess}
        onFailure={onFail}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleAuth;
