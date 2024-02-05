const express = require("express");
const { adminModel } = require("../Models/Admin");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password, role } = req.body;
  if (role === "admin") {
    const admin = await adminModel.findOne({ username });
    if (!admin) {
      res.json({ message: "Admin not registered" });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.json({ message: "Wrong Password" });
    }
    const token = Jwt.sign(
      { username: admin.username, role: "admin" },
      process.env.ADMIN_KEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "admin" });
  }
});

module.exports = { router };
