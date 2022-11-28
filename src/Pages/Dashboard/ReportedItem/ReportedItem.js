import React, { useEffect, useState } from "react";
import axios from "axios";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import toast from "react-hot-toast";
import Loader from "../../../Components/Loader/Loader";

const ReportedItem = () => {
  const [reportedBook, setReportedBook] = useState([]);
  console.log(reportedBook);

  const [isLoading, setIsLoading] = useState(true);
  const [deleteItem, setDeleteItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const closeModal = () => {
    setDeleteItem(null);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/reported`)
      .then((response) => {
        setReportedBook(response.data);
        setIsLoading(false);
      });
  }, [refresh]);

  const handleDelete = (rbook) => {
    fetch(`${process.env.REACT_APP_API_URL}/books/mybooks/${rbook._id}`, {
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
      <h1 className="text-2xl">Total Reported Item : {reportedBook.length}</h1>

      <div className="overflow-x-auto pt-5">
        <table className="w-full">
          <thead className=" bg-purple-300 text-black">
            <tr className="text-center text-lg">
              <th className="p-3 font-normal">No.</th>
              <th className="p-3 font-normal">Book Name</th>
              <th className="p-3 font-normal">Category</th>
              <th className="p-3 font-normal">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {reportedBook?.map((rbook, idx) => (
              <tr
                key={rbook._id}
                className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black"
              >
                <th>{idx + 1}</th>

                <td className="p-3">{rbook.name}</td>
                <td className="p-3">{rbook.category}</td>

                <td className="p-3">
                  <label
                    onClick={() => setDeleteItem(rbook)}
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

      {deleteItem && (
        <ConfirmationModal
          title={`Are you sure you want to delete this?`}
          message={`If you delete, it cannot get back.`}
          modalData={deleteItem}
          closeModal={closeModal}
          successAction={handleDelete}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ReportedItem;
