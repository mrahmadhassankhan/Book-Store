const express = require("express");
const mongoose = require("mongoose");
const { studentModel } = require("../Models/Student");
const studentrouter = express.Router();
const bcrypt = require("bcrypt");
const { verifyAdmin } = require("./Auth");
studentrouter.post("/register", verifyAdmin, async (req, res) => {
  const { username, password, rollno, grade } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  const student = await studentModel.findOne({ username });
  try {
    if (!student) {
      const newstudent = new studentModel({
        rollno: rollno,
        username: username,
        password: hashpassword,
        grade: grade,
      });
      await newstudent.save();
      res.status(200).json({
        message: "Student Added Successfully",
      });
    } else if (student) {
      res.status(400).json("Already Exists");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Intenal Server Error");
  }
});

module.exports = { studentrouter };
