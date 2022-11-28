import React from "react";
import { Link } from "react-router-dom";

const MyOrdersRow = ({ order, setDeleteOrder }) => {
  const { _id, bookName, bookImage, category, resalePrice } = order;
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-200 max-w-6xl">
        <div className="overflow-x-auto">
          <table className="min-w-full w-96">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className=" bg-purple-300 text-black">
              <tr className="text-center">
                <th className="p-3 font-normal text-xl">Image</th>
                <th className="p-3 font-normal text-xl">
                  Book Name & Category
                </th>
                <th className="p-3 font-normal text-xl">Resale Price</th>
                <th className="p-3 font-normal text-xl">Payment</th>
                <th className="p-3 font-normal text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black">
                <td className="p-3 text-[16px] text-center">
                  <div className="avatar">
                    <div className="rounded w-20 h-20">
                      <img src={bookImage ? bookImage : "No Image"} alt="" />
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[16px] text-center">
                  <p>
                    {bookName} <br /> {category}{" "}
                  </p>
                </td>
                <td className="p-3 text-[16px] text-center">
                  <p>{resalePrice}</p>
                </td>

                <td className="p-3 text-[16px] text-center">
                  {resalePrice && !order.paid && (
                    <Link to={`/dashboard/payment/${_id}`}>
                      {" "}
                      <button
                        type="button"
                        className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600"
                      >
                        Pay Now
                      </button>
                    </Link>
                  )}
                  {resalePrice && order.paid && (
                    <button
                      type="button"
                      className="px-8 py-2.5 leading-5 text-white bg-gradient-to-r from-emerald-700 via-blue-700 to-emerald-700 transition-colors duration-300 transform rounded-md"
                      disabled
                    >
                      Paid
                    </button>
                  )}
                </td>
                <td className="text-[16px] text-center">
                  <label
                    onClick={() => setDeleteOrder(order)}
                    htmlFor="confirmation-modal"
                    type="button"
                    className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersRow;
