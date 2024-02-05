const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true, // Add an index for better performance
  },
  password: {
    type: String,
    required: true,
  },
});

const adminModel = mongoose.model("Admin", adminSchema);

module.exports = { adminModel };
