const express = require("express");
const dotenv = require("dotenv");
const { conn } = require("./db.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { router } = require("./routes/Auth");
const { studentrouter } = require("./routes/Student.js");
const { addBookRouter } = require("./routes/AddBook.js");
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
app.use("/student", studentrouter);
app.use("/book", addBookRouter);
app.listen(process.env.PORT, () => {
  console.log("Server is Running", process.env.PORT);
});
