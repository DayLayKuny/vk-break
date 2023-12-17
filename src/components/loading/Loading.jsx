import React, { useState } from "react";
import "./loading.css";
import Alert from "../alert/Alert";
import Console from "./nothing/console";

const Loading = () => {
  const [load, setLoad] = useState(false);

  setInterval(() => {
    setLoad(false);
  }, "5000");

  return (
    <>
      (
        <div className="loading">
          <Console />
          {/* <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
          
        </div>
        <Alert />
      )
    </>
  );
};

export default Loading;
