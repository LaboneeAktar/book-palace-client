import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import addProduct from "../assets/images/addproduct.png";
import reported from "../assets/images/reported.png";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <section className="flex">
        <div className="h-full p-3 space-y-2 w-60 bg-gray-300 dark:bg-gray-900 dark:text-gray-100">
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

              {/* Seller Dahboard */}

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

              {/* Buyer Dashboard */}

              <li>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md text-[16px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current dark:text-gray-400"
                  >
                    <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                    <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                    <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                  </svg>
                  <span>My Orders</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
