import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import AdminMenu from "./AdminMenu";
import BuyerMenu from "./BuyerMenu";
import SellerMenu from "./SellerMenu";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const [checkUser, setCheckUser] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("bookPalace-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCheckUser(data));
  }, [user?.email]);

  return (
    <div>
      <div className="h-full lg:block hidden min-h-screen p-3 space-y-2 w-60 bg-gray-300 dark:bg-gray-900 dark:text-gray-100">
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
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {checkUser?.role === "admin" && <AdminMenu></AdminMenu>}

            {checkUser?.role === "seller" && <SellerMenu></SellerMenu>}

            {checkUser?.role === "buyer" && <BuyerMenu />}
          </ul>
        </div>
      </div>

      <div className="drawer lg:hidden">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="dashboard-drawer"
            className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors rounded-md"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {checkUser?.role === "admin" && <AdminMenu></AdminMenu>}

            {checkUser?.role === "seller" && <SellerMenu></SellerMenu>}

            {checkUser?.role === "buyer" && <BuyerMenu />}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
