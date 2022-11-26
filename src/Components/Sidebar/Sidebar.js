import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import AdminMenu from "./AdminMenu";
import BuyerMenu from "./BuyerMenu";
import SellerMenu from "./SellerMenu";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-full min-h-screen p-3 space-y-2 w-60 bg-gray-300 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center p-2 space-x-4">
        <img
          src={user?.photoURL ? user.photoURL : "User"}
          alt=""
          className="w-12 h-12 rounded-full dark:bg-gray-500"
        />
        <div>
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <span className="flex items-center space-x-1">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-400"
            >
              {user?.email}
            </Link>
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-700">
        {/* Admin Dashboard */}
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <AdminMenu></AdminMenu>

          {/* Seller Dahboard */}
          <SellerMenu></SellerMenu>
          {/* Buyer Dashboard */}
          <BuyerMenu />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
