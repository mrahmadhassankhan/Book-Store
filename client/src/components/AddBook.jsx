import React, { useState } from "react";
import "./css/AddBook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const [bookname, setBookName] = useState("");
  const [bookauthor, setBookAuthor] = useState("");
  const [bookimageurl, setBookImageUrl] = useState("");
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/book/addbook", {
        bookname,
        bookauthor,
        bookimageurl,
      })
      .then((res) => {
        if (res.data.added === true) {
          useNavigate("/books");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="addBook-page">
      <div className="addBook-container">
        <h2>Add Book</h2>
        <br></br>

        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            placeholder="Enter Book Name"
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookauthor">Book Author:</label>
          <input
            type="text"
            placeholder="Enter Book Author "
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookimageurl">Book Image Url:</label>
          <input
            type="text"
            placeholder="Enter Book Image Url"
            onChange={(e) => setBookImageUrl(e.target.value)}
          />
        </div>

        <button className="btn-addbook" onClick={handleSubmit}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
