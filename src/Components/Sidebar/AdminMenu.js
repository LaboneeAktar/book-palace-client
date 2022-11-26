import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import reported from "../../assets/images/reported.png";

const AdminMenu = () => {
  return (
    <div>
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <Link
          rel="noopener noreferrer"
          href="#"
          className="flex items-center p-2 space-x-3 rounded-md text-[16px]"
        >
          <FaUser></FaUser>
          <span>All Seller</span>
        </Link>
      </li>
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <Link
          rel="noopener noreferrer"
          href="#"
          className="flex items-center p-2 space-x-3 rounded-md text-[16px]"
        >
          <FaUser></FaUser>
          <span>All Buyer</span>
        </Link>
      </li>

      <li>
        <Link
          rel="noopener noreferrer"
          href="#"
          className="flex items-center p-2 space-x-3 rounded-md text-[16px]"
        >
          <img src={reported} className="h-7 w-7" alt="" />
          <span>Reported Item</span>
        </Link>
      </li>
    </div>
  );
};

export default AdminMenu;
