import React from "react";
import "./order.css";
import { FaVk } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";

const Order = ({ id, url }) => {
  return (
    <div className="order">
      <p>#{id}</p>
      <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FaVk />
        {url}
      </p>
      <p style={{ color: "orange" }}>
        <FaRegClock />
      </p>
    </div>
  );
};

export default Order;
