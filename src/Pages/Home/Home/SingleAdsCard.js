import React from "react";
import { Link } from "react-router-dom";

const SingleAdsCard = ({ advertise }) => {
  // console.log(advertise);
  const { name, category, resalePrice, image, message } = advertise;
  return (
    <div>
      <Link to={`/categories/${category}`} aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={image}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-3 text-2xl text-gray-100">{name}</p>
            <p className="mb-2 text-lg text-gray-100">
              {" "}
              Category:
              {category}
            </p>
            <p className="mb-3 text-lg text-gray-100">Price : {resalePrice}</p>
            <p className="text-sm tracking-wide text-gray-300 mb-6">
              {message?.slice(0, 150)}...
            </p>
            <span className="mt-3">
              <label
                htmlFor="booking-modal"
                className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors rounded-md "
              >
                Booked Now
              </label>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleAdsCard;
