import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import addProduct from "../../assets/images/addproduct.png";

const SellerMenu = () => {
  return (
    <div>
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <Link
          to="/dashboard/addproduct"
          rel="noopener noreferrer"
          className="flex items-center p-2 space-x-3 rounded-md text-[16px]"
        >
          <img src={addProduct} className="h-7 w-7" alt="" />
          <span>Add Product</span>
        </Link>
      </li>
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <Link
          rel="noopener noreferrer"
          href="#"
          className="flex items-center p-2 space-x-3 rounded-md text-[16px]"
        >
          <FaUser></FaUser>
          <span>My Product</span>
        </Link>
      </li>
    </div>
  );
};

export default SellerMenu;
