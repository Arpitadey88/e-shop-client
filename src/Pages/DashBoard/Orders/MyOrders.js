import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Orders from "./Orders";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrders] = useState([]);
  const email = user.email;
  // console.log(email);
  useEffect(() => {
    fetch(`https://mysterious-tor-42417.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [email]);

  return (
    <div>
      <div className="py-2 text-center">
        <h2>My Orders: {myOrder.length}</h2>
      </div>
      {myOrder.map((order) => (
        <Orders key={order._id} order={order}></Orders>
      ))}
    </div>
  );
};

export default MyOrders;
