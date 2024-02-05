const express = require("express");
const dotenv = require("dotenv");
require("./db.js");
const app = express();

dotenv.config();
app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
