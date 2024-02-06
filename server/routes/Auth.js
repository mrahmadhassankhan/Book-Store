const express = require("express");
const { adminModel } = require("../Models/Admin");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { studentModel } = require("../Models/Student");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password, role } = req.body;

  try {
    if (role === "admin") {
      const admin = await adminModel.findOne({ username });

      if (!admin) {
        return res.status(404).json({ message: "Admin not registered" });
      }

      const validPassword = await bcrypt.compare(password, admin.password);

      if (!validPassword) {
        return res.status(401).json({ message: "Wrong Password" });
      }

      const token = Jwt.sign(
        { username: admin.username, role: "admin" },
        process.env.ADMIN_KEY,
        { expiresIn: "1h" } // Example: Set token expiration time
      );

      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "admin" });
    }

    if (role === "student") {
      const student = await studentModel.findOne({ username });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const studentToken = Jwt.sign(
        { username: student.username, role: "student" },
        process.env.STUDENT_KEY,
        { expiresIn: "1h" } // Example: Set token expiration time
      );

      res.cookie("token", studentToken, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "student" });
    }

    res.status(400).json({ message: "Invalid role" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.json({ message: "Invalid Admin" });
  } else {
    Jwt.verify(token, process.env.ADMIN_KEY, (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid Token" });
      } else {
        req.username = decoded.username;
        req.role = decoded.role;
        next();
      }
    });
  }
};

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Logout: true });
});

module.exports = { router, verifyAdmin };
