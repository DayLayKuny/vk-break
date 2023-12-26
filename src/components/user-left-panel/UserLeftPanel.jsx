import React from "react";
import { FaHatCowboy } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaCircleInfo } from "react-icons/fa6";
import { TbSettings } from "react-icons/tb";
import { BiMoney } from "react-icons/bi";

const UserLeftPanel = ({ onOpenSettings, data }) => {

  return (
    <div className="user-left-panel">
      <div className="profile-data">
        <img src={data.profile_img} />
        <b>{data.nickname}</b>
      </div>
      <div style={{ color: "#fff", textAlign: "center" }}>
        <b>
          Баланс - {data.balance} <BiMoney />
        </b>
      </div>
      <div className="panel-btns">
        <button>
          <FaHatCowboy className="icon-panel" />
          <span> Мои заказы </span>
        </button>
        <button>
          <TfiHeadphoneAlt className="icon-panel" />
          <span>Поддержка</span>
        </button>
        <button>
          <FaCircleInfo className="icon-panel" />
          <span>Инструкция</span>
        </button>
        <button onClick={() => onOpenSettings()}>
          <TbSettings className="icon-panel" />
          <span>Настройки</span>
        </button>
      </div>
    </div>
  );
};

export default UserLeftPanel;
