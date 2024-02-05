const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
    unique: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = { studentModel };
