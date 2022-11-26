import React from "react";

const MyOrdersRow = ({ order }) => {
  const { bookName, bookImage, category, resalePrice } = order;
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
                  <button
                    type="button"
                    className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600"
                  >
                    Pay Now
                  </button>
                </td>
                <td className="text-[16px] text-center">
                  <button
                    //   onClick={() => handleDelete(_id)}
                    type="button"
                    className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600"
                  >
                    Delete
                  </button>
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
