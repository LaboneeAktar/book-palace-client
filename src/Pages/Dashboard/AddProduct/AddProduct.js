import { useQuery } from "@tanstack/react-query";
import React from "react";

const AddProduct = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
      const data = await res.json();
      return data;
    },
  });

  const handleSubmitProduct = (event) => {
    event.preventDefault();

    //get date and time
    const date = new Date();
    const current_date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const current_time = date.getHours() + ":" + date.getMinutes();
    const dateAndTime = current_date + " " + current_time;

    const form = event.target;

    const bookName = form.bookname.value;
    const image = form.image.files[0];
    const category = form.category.value;
    const location = form.location.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const purchaseYear = form.purchaseYear.value;
    const usageTime = form.usageTime.value;
    const condition = form.condition.value;
    const phoneNumber = form.phoneNumber.value;
    const message = form.message.value;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log("ffrom imgg", imgData);
      });

    console.log(
      bookName,
      image,
      category,
      location,
      originalPrice,
      resalePrice,
      purchaseYear,
      usageTime,
      condition,

      phoneNumber,
      message
    );
  };

  return (
    <div className="my-5 mx-5">
      <h1 className="text-2xl">Add Your Book</h1>

      <section className="max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800 lg:mt-8">
        <form onSubmit={handleSubmitProduct}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-black text-lg dark:text-gray-200"
                htmlFor="image"
              >
                Book Image
              </label>
              <input
                id="image"
                type="file"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="block text-black text-lg">Category</label>
              <select
                name="category"
                className="w-full px-4 py-2 mt-2 rounded-md border bg-white border-gray-200 text-black  focus:border-violet-400 font-normal text-[16px]"
              >
                {categories.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
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
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-black text-lg dark:text-gray-200"
                htmlFor="purchaseYear"
              >
                Purchase Year
              </label>
              <input
                id="purchaseYear"
                name="purchaseYear"
                placeholder="Purchase Year"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-black text-lg dark:text-gray-200"
                htmlFor="usageTime"
              >
                Use of Time
              </label>
              <input
                id="usageTime"
                name="usageTime"
                placeholder="Use of Time"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="block text-black text-lg">Condition</label>
              <select
                name="condition"
                className="w-full px-4 py-2 mt-2 rounded-md border bg-white border-gray-200 text-black  focus:border-violet-400 font-normal text-[16px]"
              >
                <option value="excellent">Excellent </option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
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
            <div>
              <label
                className="text-black text-lg dark:text-gray-200 "
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="message"
                placeholder="message"
                type="text"
                className="block w-full h-20 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
