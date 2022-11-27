import React from "react";
import { Link } from "react-router-dom";
import addProduct from "../../assets/images/addproduct.png";
import myProduct from "../../assets/images/myproduct.png";

const SellerMenu = () => {
  return (
    <div>
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <Link
          to="/dashboard/addproduct"
          rel="noopener noreferrer"
          className={({ isActive }) =>
            isActive
              ? "text-rose-800 flex items-center p-2 space-x-3 rounded-md text-lg"
              : "flex items-center p-2 space-x-3 rounded-md text-lg hover:text-rose-800"
          }
        >
          <img src={addProduct} className="h-7 w-7" alt="" />
          <span>Add Product</span>
        </Link>
      </li>
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <Link
          to="/dashboard/myproduct"
          rel="noopener noreferrer"
          className={({ isActive }) =>
            isActive
              ? "text-rose-800 flex items-center p-2 space-x-3 rounded-md text-lg"
              : "flex items-center p-2 space-x-3 rounded-md text-lg hover:text-rose-800"
          }
        >
          <img src={myProduct} className="h-7 w-7" alt="" />
          <span>My Product</span>
        </Link>
      </li>
    </div>
  );
};

export default SellerMenu;
