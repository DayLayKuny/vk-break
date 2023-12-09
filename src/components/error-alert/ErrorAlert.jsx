import React from "react";
import '../../components/alert/alert.css'
import { TbAlertTriangleFilled } from "react-icons/tb";

const ErrorAlert = () => {
  return (
    <>
      <div style={{ width: "400px" }}>
        <div className="alert error">
          <TbAlertTriangleFilled style={{ color: "red", fontSize: "25px" }}/>
          <span>Некорректная ссылка !</span>
        </div>
      </div>
    </>
  );
};

export default ErrorAlert;
