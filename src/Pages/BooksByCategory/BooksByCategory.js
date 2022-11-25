import React from "react";
import { useLoaderData } from "react-router-dom";
import BookInfo from "./BookInfo";

const BooksByCategory = () => {
  const categoryBooks = useLoaderData();
  console.log(categoryBooks);
  return (
    <div>
      <div>
        {categoryBooks.map((book) => (
          <BookInfo key={book._id} book={book}></BookInfo>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;
