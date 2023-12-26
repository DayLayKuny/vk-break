import React, { useState } from "react";
import "./User.css";
import UserLeftPanel from "../user-left-panel/UserLeftPanel";
import OrdersTable from "../orders-table/OrdersTable";
import UserSettings from "../user-settings/UserSettings";

function User({data}) {

  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      {showSettings && <UserSettings profile_img={data.profile_img} id={data.id} userName={data.nickname} onClose={() => setShowSettings(false)}/>}
      <div className="user-page">
        <div className="user-page-data">
          <UserLeftPanel onOpenSettings={() => setShowSettings(true)} data={data}/>
          <OrdersTable id={data.id}/>
        </div>
      </div>
    </>
  );
}

export default User;
