import React from "react";
import "./order.css";
import { FaVk } from "react-icons/fa6";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { HiMiniEye } from "react-icons/hi2";

const Order = ({ id, url }) => {
  return (
    <div className="order">
      <p>#{id}</p>
      <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FaVk />
        {url}
      </p>
      <span style={{ color: "green" }}>
        <HiMiniShieldCheck />
        Успешно
      </span>
      <button className="view-btn">
        Посмотреть <HiMiniEye />
      </button>
    </div>
  );
};

export default Order;
