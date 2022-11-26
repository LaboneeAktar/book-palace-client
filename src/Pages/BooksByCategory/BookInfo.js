import React from "react";
import BookingModal from "./BookingModal";

const BookInfo = ({ book }) => {
  console.log(book);

  const {
    name,
    image,
    category,
    originalPrice,
    resalePrice,
    condition,
    message,
    purchaseYear,
    usageTime,
    dateTime,
    seller,
  } = book;

  return (
    <div>
      <div className="flex flex-col bg-white max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 h-full">
        <div className="flex space-x-4 justify-between">
          <span className="flex space-x-4">
            <img
              alt=""
              src={seller.sellerImg}
              className="object-cover w-12 h-12 rounded-full mt-1 shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <h2 className="text-[20px] font-semibold">{seller.sellerName}</h2>
              <span className="text-sm dark:text-gray-400">{seller.email}</span>
            </div>
          </span>
          <div className="flex flex-col space-y-1">
            <span className="text-sm dark:text-gray-400">
              <strong> Phone:</strong> {seller.phoneNumber}
            </span>
            <span className="text-sm dark:text-gray-400">
              <strong> Location:</strong> {seller.location}
            </span>
            <span className="text-xs dark:text-gray-400">{dateTime}</span>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="w-full mb-4 h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-[22px] text-center font-semibold">{name}</h2>
          <h2 className="mb-1 text-lg text-center font-semibold">
            Category: {category}
          </h2>
          <div className="flex justify-between pt-4">
            <p className="text-[15px] dark:text-gray-400">
              <strong>Condition:</strong> {condition}
            </p>
            <p className="text-[15px] dark:text-gray-400">
              <strong>Purchase Year:</strong> {purchaseYear}
            </p>
            <p className="text-[15px] dark:text-gray-400">
              <strong>Use of Time: </strong> {usageTime} M
            </p>
          </div>
          <p className="text-lg pt-4 text-justify dark:text-gray-400">
            <strong>Description:</strong> {message}
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <h2 className="text-[15px] ">
              <strong>Original Price:</strong> {originalPrice} Tk
            </h2>
            <h2 className="text-[15px] ">
              <strong>Resale Price: </strong>
              {resalePrice} Tk
            </h2>
          </div>
          <div className="flex space-x-2 dark:text-gray-400">
            <label
              htmlFor="booking-modal"
              className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors rounded-md "
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
      <BookingModal book={book}></BookingModal>
    </div>
  );
};

export default BookInfo;
