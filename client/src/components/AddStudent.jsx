import React, { useState } from "react";
import "./css/AddStudent.css";
import axios from "axios";
const AddStudent = () => {
  const [rollno, setRollno] = useState("");
  const [username, setUsername] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/student/register", {
        username,
        password,
        rollno,
        grade,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="addstudent-page">
      <div className="addstudent-container">
        <h2>Add Student</h2>
        <br></br>

        <div className="form-group">
          <label htmlFor="rollno">Roll No:</label>
          <input
            type="text"
            placeholder="Enter RollNo"
            onChange={(e) => setRollno(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            placeholder="Enter Grade"
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-register" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
