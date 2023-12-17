import React, { useState } from "react";
import "./user-settings.css";
import { LuImagePlus } from "react-icons/lu";

const UserSettings = ({ userName, onClose }) => {
  const [profileImage, setProfileImage] = useState(
    "https://www.011global.com/Account/Slices/user-anonymous.png"
  );
  const [name, setName] = useState(userName);

  return (
    <div className="settings-panel">
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        onClick={() => onClose()}
      ></div>
      <div className="user-settings">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <input
            type="file"
            id="profile-img"
            onChange={(evn) => {
              setProfileImage(URL.createObjectURL(evn.target.files[0]));
            }}
          />
          <label
            className="icon-box"
            htmlFor="profile-img"
            style={{ height: "40px", width: "40px", background: "#fff" }}
          >
            <LuImagePlus className="settings-icon" />
          </label>
          <img src={profileImage} height={"150px"} className="prf-img" />
        </div>
        <input
          type="text"
          value={name}
          onChange={(evn) => setName(evn.target.value)}
        />
        {console.log(profileImage)}
        <button>Сохранить</button>
      </div>
    </div>
  );
};

export default UserSettings;
