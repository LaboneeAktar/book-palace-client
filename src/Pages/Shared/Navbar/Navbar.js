import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftSideMenuItems = (
    <>
      {/* {user?.uid && (
        <div className="w-10 rounded-full ml-3" title={user?.displayName}>
          {user?.photoURL ? (
            <img className="rounded-full h-10" alt="..." src={user?.photoURL} />
          ) : (
            <FaUser className="text-white" />
          )}
        </div>
      )} */}
      <li>
        <NavLink
          to="/home"
          title="Home"
          className={({ isActive }) =>
            isActive
              ? "text-xl text-rose-800"
              : "text-xl tracking-wide lg:text-gray-100 transition-colors duration-200 hover:text-rose-800"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blog"
          aria-label="Blog"
          title="Blog"
          className={({ isActive }) =>
            isActive
              ? "text-rose-800 text-xl"
              : "text-xl tracking-wide lg:text-gray-100  transition-colors duration-200 hover:text-rose-800"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  const rightSideMenuItems = (
    <div>
      {/*  {user?.uid || user?.email ? (
        <div className="lg:flex lg:items-center lg:justify-beteween lg:space-y-0 space-y-4">
          <li>
            <Link
              to="/myreview"
              aria-label="My Review"
              title="My Review"
              className="text-lg tracking-wide lg:text-gray-100  transition-colors duration-200 hover:text-teal-400 mr-5"
            >
              My Review
            </Link>
          </li>
          <li>
            <Link
              to="/addservice"
              aria-label="Add Service"
              title="Add Service"
              className="text-lg tracking-wide lg:text-gray-100  transition-colors duration-200 hover:text-teal-400 mr-5"
            >
              Add Service
            </Link>
          </li>

          <li>
            <button
              onClick={logOut}
              type="button"
              className="px-4 py-2 text-lg font-normal border rounded text-white hover:bg-teal-500 hover:border-teal-500 hover:text-black dark:border-gray-100  dark:text-gray-100"
            >
              Logout
            </button>
          </li>
        </div>
      ) : */}

      <li>
        <Link to="/login">
          <button
            type="button"
            className="px-6 py-2 text-lg font-normal border rounded text-white hover:bg-green-900 hover:border-emerald-500  dark:border-gray-100  dark:text-gray-100"
          >
            Login
          </button>
        </Link>
      </li>
      {/* } */}
    </div>
  );

  return (
    <div>
      <div className="bg-gradient-to-r from-emerald-700 to-green-500 text-white">
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-4">
          <div className="relative flex lg:grid items-center grid-cols-2 lg:grid-cols-3">
            <Link to="/" className="inline-flex items-center lg:mx-auto">
              <img className="rounded-full w-28" src={logo} alt="" />
              <h1 className="ml-2 mr-10 lg:text-4xl text-2xl tracking-wide bg-gradient-to-r from-gray-100 via-rose-400 to-lime-400 inline-block text-transparent bg-clip-text">
                Book Palace
              </h1>
            </Link>
            <ul className=" items-center hidden space-x-8 lg:flex lg:ml-40">
              {leftSideMenuItems}
            </ul>

            <ul className="items-center hidden ml-auto space-x-8 lg:flex">
              {rightSideMenuItems}
            </ul>
            <div className="ml-auto lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-gradient-to-r from-green-500 to-emerald-700  text-white hover:text-black border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          className="inline-flex items-center lg:mx-auto"
                        >
                          <img
                            className="rounded-full h-16 w-16"
                            src={logo}
                            alt=""
                          />
                          <h1 className="ml-2 text-2xl tracking-wide text-white">
                            Book Palace
                          </h1>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-200"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 text-center">
                        {leftSideMenuItems}
                        {rightSideMenuItems}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
