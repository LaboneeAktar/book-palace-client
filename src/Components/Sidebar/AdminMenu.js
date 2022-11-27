import React from "react";
import { NavLink } from "react-router-dom";
import reported from "../../assets/images/reported.png";
import seller from "../../assets/images/seller.png";
import buyer from "../../assets/images/buyer.png";

const AdminMenu = () => {
  return (
    <div className="mt-14 lg:mt-5">
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <NavLink
          to="/dashboard/allseller"
          rel="noopener noreferrer"
          className={({ isActive }) =>
            isActive
              ? "text-rose-800 flex items-center p-2 space-x-3 rounded-md text-lg"
              : "flex items-center p-2 space-x-3 rounded-md text-lg hover:text-rose-800"
          }
        >
          <img src={seller} className="h-7 w-7" alt="" />
          <span>All Seller</span>
        </NavLink>
      </li>
      <li className="dark:bg-gray-800 dark:text-gray-50">
        <NavLink
          to="/dashboard/allbuyer"
          rel="noopener noreferrer"
          className={({ isActive }) =>
            isActive
              ? "text-rose-800 flex items-center p-2 space-x-3 rounded-md text-lg"
              : "flex items-center p-2 space-x-3 rounded-md text-lg hover:text-rose-800"
          }
        >
          <img src={buyer} className="h-7 w-7" alt="" />
          <span>All Buyer</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/reported"
          rel="noopener noreferrer"
          className={({ isActive }) =>
            isActive
              ? "text-rose-800 flex items-center p-2 space-x-3 rounded-md text-lg"
              : "flex items-center p-2 space-x-3 rounded-md text-lg hover:text-rose-800"
          }
        >
          <img src={reported} className="h-7 w-7" alt="" />
          <span>Reported Item</span>
        </NavLink>
      </li>
    </div>
  );
};

export default AdminMenu;
