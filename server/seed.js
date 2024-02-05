// For Admin Account Creation
const bcrypt = require("bcrypt");
const { adminModel } = require("./Models/Admin.js");

require("./db");

async function AdminAccount() {
  try {
    const adminCount = await adminModel.countDocuments({});

    if (adminCount === 0) {
      const hashPassword = await bcrypt.hash("adminPassword", 10);

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
