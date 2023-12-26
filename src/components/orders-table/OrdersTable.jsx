import React, { useEffect, useState } from "react";
import "./orders-table.css";
import Order from "../order/Order";
import axios from "axios";

const OrdersTable = ({ id }) => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios
      .post(`http://socarm/api.php?action=get_hacked&user_id=${id}`)
      .then((res) => {
        setOrders(res.data.hacked)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="orders-table">
      {orders ? (
        <div className="all-orders">
          {orders.map((el) => {
            return <Order key={el[0]} id={el[0]} url={el[1]} />;
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
