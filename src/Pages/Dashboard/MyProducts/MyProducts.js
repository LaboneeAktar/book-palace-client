import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import MyProductsRow from "./MyProductsRow";

const MyProducts = () => {
  const { user, logOut } = useContext(AuthContext);

  const [myProducts, setMyProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const closeModal = () => {
    setDeleteProduct(null);
  };

  //load product data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/books/mybooks/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("bookPalace-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setMyProducts(data));
  }, [user?.email, refresh, logOut]);

  //delete product data
  const handleDelete = (product) => {
    fetch(`${process.env.REACT_APP_API_URL}/books/mybooks/${product._id}`, {
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

  return (
    <div className="my-5 mx-5">
      <h1 className="text-2xl">Total Added Books : {myProducts.length}</h1>

      {myProducts.map((product) => (
        <MyProductsRow
          key={product._id}
          product={product}
          setDeleteProduct={setDeleteProduct}
        ></MyProductsRow>
      ))}

      {deleteProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete "${deleteProduct.name}"?`}
          message={`If you delete, it cannot get back.`}
          modalData={deleteProduct}
          closeModal={closeModal}
          successAction={handleDelete}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
