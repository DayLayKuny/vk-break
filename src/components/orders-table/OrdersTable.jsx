import React, { useState } from "react";
import "./orders-table.css";
import Order from "../order/Order";

const OrdersTable = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      url: "https://vk.com/d.manukyan0",
    },
    {
      id: 2,
      url: "https://vk.com/d.manukyan0",
    },
    {
      id: 3,
      url: "https://vk.com/d.manukyan0",
    },
  ]);

  return (
    <div className="orders-table">
      {orders ? (
        <div className="all-orders">
          {orders.map((el) => {
            return <Order key={el.id} id={el.id} url={el.url} />;
          })}
        </div>
      ) : (
        <div>
          <h5>На данный момент заказанные вами аккаунты отсутствуют!</h5>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
