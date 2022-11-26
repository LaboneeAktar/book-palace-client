import React from "react";
import { useLoaderData } from "react-router-dom";
import BookInfo from "./BookInfo";

const BooksByCategory = () => {
  const categoryBooks = useLoaderData();
  // console.log(categoryBooks);
  return (
    <div className="bg-gray-200 mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:ml-24 py-10">
        {categoryBooks.map((book) => (
          <BookInfo key={book._id} book={book}></BookInfo>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;
