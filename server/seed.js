// This is for generating Admin User
// Run this file independently
const bcrypt = require("bcrypt");
const { adminModel } = require("./Models/Admin.js");

const db = require("./db");

async function AdminAccount() {
  try {
    const adminCount = await adminModel.countDocuments({});

    if (adminCount === 0) {
      const plainTextPassword = "Enter the Password for the Admin";

      // Hash the plain text password
      const hashPassword = await bcrypt.hash(plainTextPassword, 10);

      const newAdmin = new adminModel({
        username: "admin",
        password: hashPassword,
      });

      await newAdmin.save();
      console.log("Admin Account Created Successfully");
    } else {
      console.log("Admin Account Already Exists");
    }
  } catch (error) {
    console.error(error);
  }
}

AdminAccount();
