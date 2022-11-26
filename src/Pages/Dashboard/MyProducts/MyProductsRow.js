import React from "react";

const MyProductsRow = ({ product }) => {
  const { name, resalePrice } = product;
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
            <thead className="bg-gray-200 text-black">
              <tr className="text-center">
                <th className="p-3 font-normal text-xl">Book Name</th>
                <th className="p-3 font-normal text-xl">Resale Price</th>
                <th className="p-3 font-normal text-xl">Status</th>
                <th className="p-3 font-normal text-xl">Advertisement</th>
                <th className="p-3 font-normal text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 border-black bg-purple-300 shadow shadow-lg text-black">
                <td className="p-3 text-[16px] text-center">
                  <p>{name}</p>
                </td>
                <td className="p-3 text-[16px] text-center">
                  <p>{resalePrice}</p>
                </td>
                <td className="p-3 text-[16px] text-center">
                  <p>Available</p>
                </td>
                <td className="p-3 text-[16px] text-center">
                  <button
                    type="button"
                    className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600"
                  >
                    Advertise
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

export default MyProductsRow;