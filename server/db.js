const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.URI);
    {
      console.log("Connected to DB");
    }
  } catch (error) {
    console.error(error);
  }
};
const conn = connection();
module.exports = { conn };
