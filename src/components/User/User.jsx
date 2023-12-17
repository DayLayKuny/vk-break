import React, { useState } from "react";
import "./User.css";
import { GrUserSettings } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa6";
import { BsIncognito } from "react-icons/bs";
import { TiInfo } from "react-icons/ti";
import { FiUserCheck } from "react-icons/fi";
import ScrollIndicator from "./scrollIndicator/ScrollIndicator";
import UserLeftPanel from "../user-left-panel/UserLeftPanel";
import OrdersTable from "../orders-table/OrdersTable";
import UserSettings from "../user-settings/UserSettings";

function User() {

  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      {showSettings && <UserSettings userName={'Username'} onClose={() => setShowSettings(false)}/>}
      <div className="user-page">
        <div className="user-page-data">
          <UserLeftPanel onOpenSettings={() => setShowSettings(true)}/>
          <OrdersTable />
        </div>
      </div>
    </>
  );
}

export default User;
