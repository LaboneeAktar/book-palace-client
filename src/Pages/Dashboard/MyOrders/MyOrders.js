import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyOrdersRow from "./MyOrdersRow";

const MyOrders = () => {
  const { user, logOut } = useContext(AuthContext);

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/bookings/mybookings/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("bookPalace-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setMyOrders(data));
  }, [user?.email, logOut]);

  return (
    <div className="my-5 mx-5">
      <h1 className="text-2xl">Total Oders : {myOrders.length}</h1>

      {myOrders.map((order) => (
        <MyOrdersRow key={order._id} order={order}></MyOrdersRow>
      ))}
    </div>
  );
};

export default MyOrders;
