import React from "react";

const Category = ({ category }) => {
  const { title, img, description } = category;
  return (
    <div>
      <div className="w-full h-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-56 h-56 mx-auto p-8"
          src={img}
          alt="Category"
        />

        <div className="px-6 py-4">
          <h2 className="text-xl text-gray-800 dark:text-white">{title}</h2>

          <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
