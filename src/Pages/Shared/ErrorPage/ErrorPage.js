import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../../assets/images/p404.gif";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-black">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="h-52" src={errorImage} alt="" />
        <div className="max-w-md text-center">
          <h3 className="text-rose-800 text-4xl font-semibold">
            Something Went Wrong !!
          </h3>
          <p className="text-2xl text-rose-700 font-semibold md:text-2xl mb-2 p-3">
            {error.statusText || error.message}
          </p>
          <p className="text-2xl font-semibold md:text-2xl mb-8 p-3">
            Sorry, We couldn't Find this Page Right Now.
          </p>
          <Link
            to="/home"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-black hover:bg-cyan-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
