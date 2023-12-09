import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftPanel from "./left-panel/LeftPanel";

const UserPage = () => {

  // useEffect(() => {
  //   if (true) {
  //     window.location = 'localhost:3000'
  //   }
  // }, [])

  return (
    <>
      <LeftPanel />
    </>
  );
};

export default UserPage;
