import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-purple-900 text-white dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-2/3">
            <Link
              rel="noopener noreferrer"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                </svg>
              </div>
              <span className="self-center text-2xl">Book Palace</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Quick Access
              </h3>
              <ul className="space-y-1 text-teal-400">
                <li>
                  <Link to="/home" rel="noopener noreferrer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blog" rel="noopener noreferrer">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" rel="noopener noreferrer">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="flex items-center p-1 text-xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com/"
                  rel="noopener noreferrer"
                  title="Twitter"
                  className="flex items-center p-1 text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="flex items-center p-1 text-xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-slate-400 dark:text-gray-400">
          Book Palace ?? 2022. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
