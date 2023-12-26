import React, { useState } from "react";
import "./user-settings.css";
import { LuImagePlus } from "react-icons/lu";
import axios from "axios";

const UserSettings = ({ id, userName, profile_img, onClose }) => {
  const [profileImage, setProfileImage] = useState(profile_img);
  const [name, setName] = useState(userName);

  const log_out = () => {
    const token = localStorage.getItem("user_token");
    axios
      .post(`http://socarm/api.php?action=log_out&token=${token}`)
      .then((res) => {
        res.data.success && window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const update_data = () => {
    axios
      .post(
        `http://socarm/api.php?action=update_data&user_id=${id}&nickname=${name}&profile_img=${profileImage}`
      )
      .then((res) => {
        res.data.success && window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <button type="submit" className="save-btn" onClick={() => update_data()}>
          Сохранить
        </button>
        <button
          className="log-out"
          onClick={(evn) => {
            evn.preventDefault();
            log_out();
          }}
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
