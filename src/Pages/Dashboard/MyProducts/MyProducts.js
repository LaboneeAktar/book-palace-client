import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyProductsRow from "./MyProductsRow";

const MyProducts = () => {
  const { user, logOut } = useContext(AuthContext);

  const [myProducts, setMyProducts] = useState([]);
  //   const [refresh, setRefresh] = useState(false);

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
  }, [user?.email, logOut]);

  return (
    <div className="my-5 mx-5">
      <h1 className="text-2xl">Total Added Books : {myProducts.length}</h1>

      {myProducts.map((product) => (
        <MyProductsRow key={product._id} product={product}></MyProductsRow>
      ))}
    </div>
  );
};

export default MyProducts;
