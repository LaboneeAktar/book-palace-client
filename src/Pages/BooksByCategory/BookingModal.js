import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { name, category, originalPrice, resalePrice } = book;

  const handleBooking = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-center">
            Booking for <strong>{name}</strong>
          </h3>
          <form onSubmit={handleBooking}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="bookname"
                >
                  Book Name
                </label>
                <input
                  id="bookname"
                  name="bookname"
                  type="text"
                  placeholder="Book Name"
                  defaultValue={name}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="category"
                >
                  Book Category
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  placeholder="Book Category"
                  defaultValue={category}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="originalPrice"
                >
                  Original Price
                </label>
                <input
                  id="originalPrice"
                  name="originalPrice"
                  placeholder="Original Price"
                  defaultValue={originalPrice}
                  disabled
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="resalePrice"
                >
                  Resale Price
                </label>
                <input
                  id="resalePrice"
                  name="resalePrice"
                  placeholder="Resale Price"
                  type="text"
                  defaultValue={resalePrice}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  placeholder="Location"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  className="text-black text-lg dark:text-gray-200"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
