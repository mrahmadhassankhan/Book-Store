const express = require("express");
const dotenv = require("dotenv");
const { conn } = require("./db.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { router } = require("./routes/Auth");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
dotenv.config();

app.use("/auth", router);
app.listen(process.env.PORT, () => {
  console.log("Server is Running", process.env.PORT);
});
