const mongoose = require("mongoose");
const addBookSchema = mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  bookauthor: {
    type: String,
    required: true,
  },
  bookImageUrl: {
    type: String,
    required: true,
  },
});

const addBookModel = mongoose.model("AddBook", addBookSchema);

module.exports = { addBookModel };
