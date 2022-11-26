import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { name, category, originalPrice, resalePrice, image } = book;

  const navigate = useNavigate();

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;

    const bookName = form.bookname.value;
    const category = form.category.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const location = form.location.value;
    const phoneNumber = form.phoneNumber.value;

    const booking = {
      bookName,
      category,
      bookImage: image,
      originalPrice,
      resalePrice,
      buyer: {
        buyerName: user?.displayName,
        email: user?.email,
        location,
        phoneNumber,
      },
    };
    // console.log(bookings);

    fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(result);
        if (data.acknowledged) {
          toast.success(`Booking Successfull`);
          form.reset();
          navigate("/dashboard/myorders");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle border-0 bg-rose-600 absolute right-2 top-2"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
