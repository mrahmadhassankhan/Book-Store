const { addBookModel } = require("../Models/AddBook");
const express = require("express");
const { verifyAdmin } = require("./Auth");
const mongoose = require("mongoose");
const addBookRouter = express.Router();

addBookRouter.post("/addbook", verifyAdmin, async (req, res) => {
  try {
    const { bookname, bookauthor, bookimageurl } = req.body;
    const addBook = await addBookModel.findOne({ bookname });
    if (!addBook) {
      const newbook = new addBookModel({
        bookname: bookname,
        bookauthor: bookauthor,
        bookImageUrl: bookimageurl,
      });
      newbook.save();
      res.send({ added: true });
    } else {
      res.status(400).json({ message: "Book Already Exists" });
    }
  } catch (err) {
    console.error(err);
  }
});

addBookRouter.get("/books", async (req, res) => {
  try {
    const books = await addBookModel.find();
    return res.json(books);
  } catch (error) {
    res.json(error);
  }
});

module.exports = { addBookRouter };
