import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { title, img, description } = category;
  return (
    <div>
      <Link to={`/categories/${title}`} className="">
        <div className="w-full h-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover object-center w-56 h-56 mx-auto p-8"
            src={img}
            alt="Category"
          />

          <div className="px-6 py-4">
            <h2 className="text-xl text-gray-800 dark:text-white">{title}</h2>

            <p className="py-2 text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Category;
