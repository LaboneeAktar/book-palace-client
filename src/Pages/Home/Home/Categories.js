import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="lg:py-10 p-5 bg-gray-200">
      <h1 className="text-center text-3xl bg-gradient-to-r from-rose-600 via-blue-700 to-green-600 inline-block text-transparent bg-clip-text">
        Book Category
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 m-8">
        {categories
          .map((category) => (
            <Category key={category._id} category={category}></Category>
          ))
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default Categories;
