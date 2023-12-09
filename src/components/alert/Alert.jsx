import React from "react";
import "./alert.css";
import { TbCheck } from "react-icons/tb";
import { TbAlertTriangleFilled } from "react-icons/tb";

const Alert = () => {
  return (
    <div className="alert-panel">
      <div style={{width: '400px'}}>
        <div className="alert success">
          <TbCheck style={{ color: "green", fontSize: "25px" }} />
          <span>Аккаунт успешно взломан !</span>
        </div>
        <div className="alert hint">
          <TbAlertTriangleFilled style={{ color: "orange", fontSize: "37px" }}/>
          <span>Чтобы увидеть данные войдите в аккаунт и пополните баланс</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
