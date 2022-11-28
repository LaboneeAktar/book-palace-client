import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../../Components/Loader/Loader";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllSeller = () => {
  const [allSeller, setAllSeller] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [deleteSeller, setDeleteSeller] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const closeModal = () => {
    setDeleteSeller(null);
  };

  //get all users
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("bookPalace-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        //get sellers
        const filteredSeller = data.filter(
          (seller) => seller.role === "seller"
        );
        setAllSeller(filteredSeller);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [refresh]);

  //Make seller verified
  const handleMakeVerified = (email) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/verified/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("bookPalace-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make Verified Successful");
          setRefresh(!refresh);
        }
      });
  };

  //delete seller
  const handleDelete = (seller) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("bookPalace-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Successfully Deleted`);
          setRefresh(!refresh);
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="m-5">
      <h1 className="text-2xl">Total Seller : {allSeller.length}</h1>

      <div className="overflow-x-auto pt-5">
        <table className="w-full">
          <thead className=" bg-purple-300 text-black">
            <tr className="text-center text-lg">
              <th className="p-3 font-normal">No.</th>
              <th className="p-3 font-normal">Seller Id</th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 font-normal">Email</th>
              <th className="p-3 font-normal">Verify</th>
              <th className="p-3 font-normal">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allSeller?.map((seller, idx) => (
              <tr
                key={seller._id}
                className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black"
              >
                <th>{idx + 1}</th>
                <td className="p-3">{seller._id}</td>
                <td className="p-3">{seller.name}</td>
                <td className="p-3">{seller.email}</td>
                <td className="p-3">
                  {seller?.verified === true ? (
                    <button
                      type="button"
                      className="px-8 py-2.5 leading-5 text-white bg-gradient-to-r from-emerald-700 via-blue-700 to-emerald-700 transition-colors duration-300 transform rounded-md"
                      disabled
                    >
                      Verified
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeVerified(seller.email)}
                      type="button"
                      className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform  rounded-md"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td className="p-3">
                  <label
                    onClick={() => setDeleteSeller(seller)}
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

      {deleteSeller && (
        <ConfirmationModal
          title={`Are you sure you want to delete "${deleteSeller.name}"?`}
          message={`If you delete, it cannot get back.`}
          modalData={deleteSeller}
          closeModal={closeModal}
          successAction={handleDelete}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSeller;
