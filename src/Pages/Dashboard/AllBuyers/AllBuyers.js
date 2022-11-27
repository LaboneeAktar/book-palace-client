import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";

const AllBuyers = () => {
  const [allBuyer, setAllBuyer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //get all users
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("bookPalace-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        //get buyers
        const filteredBuyer = data.filter((buyer) => buyer.role === "buyer");
        setAllBuyer(filteredBuyer);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="m-5">
      <h1 className="text-2xl">Total Buyer : {allBuyer.length}</h1>

      <div className="overflow-x-auto pt-5">
        <table className="w-full">
          <thead className=" bg-purple-300 text-black">
            <tr className="text-center text-lg">
              <th className="p-3 font-normal">No.</th>
              <th className="p-3 font-normal">Buyer Id</th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 font-normal">Email</th>
              <th className="p-3 font-normal">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allBuyer?.map((buyer, idx) => (
              <tr
                key={buyer._id}
                className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black"
              >
                <th>{idx + 1}</th>
                <td className="p-3">{buyer._id}</td>
                <td className="p-3">{buyer.name}</td>
                <td className="p-3">{buyer.email}</td>

                <td className="p-3">
                  <label
                    // onClick={() => setDeleteProduct(product)}
                    htmlFor="confirmation-modal"
                    type="button"
                    className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
