import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../../Components/Loader/Loader";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import MyOrdersRow from "./MyOrdersRow";

const MyOrders = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const [myOrders, setMyOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const closeModal = () => {
    setDeleteOrder(null);
  };

  //fetch my order data
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/bookings/mybookings/${user?.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("bookPalace-token")}`,
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
  }, [user?.email, refresh, logOut]);

  //delete order
  const handleDelete = (order) => {
    fetch(`${process.env.REACT_APP_API_URL}/bookings/mybookings/${order._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("bookPalace-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Successfully Deleted`);
          setRefresh(!refresh);
        }
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="my-5 mx-5">
      <h1 className="text-2xl">Total Oders : {myOrders.length}</h1>

      {myOrders.map((order) => (
        <MyOrdersRow
          key={order._id}
          order={order}
          setDeleteOrder={setDeleteOrder}
        ></MyOrdersRow>
      ))}

      {deleteOrder && (
        <ConfirmationModal
          title={`Are you sure you want to delete "${deleteOrder.bookName}"?`}
          message={`If you delete, it cannot get back.`}
          modalData={deleteOrder}
          closeModal={closeModal}
          successAction={handleDelete}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyOrders;
