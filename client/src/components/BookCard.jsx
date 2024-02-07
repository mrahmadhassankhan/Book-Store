import React from "react";

const BookCard = ({ book }) => {
  const { bookname, bookauthor, bookImageUrl } = book;
  return (
    <div className="book-card">
      <img src={bookImageUrl} alt={bookname} className="book-image" />
      <div className="book-details">
        <h3>{bookname}</h3>
        <p>{bookauthor}</p>
      </div>
      <div className="book-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default BookCard;
