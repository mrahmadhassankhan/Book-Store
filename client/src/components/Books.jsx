import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/book/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book._id} book={book} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Books;
