import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Books from "./components/Books";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import Logout from "./components/Logout";
import axios from "axios";
import AddBook from "./components/AddBook";
const App = () => {
  const [role, setRoleStatus] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRoleStatus(res.data.role);
        } else {
          setRoleStatus("");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login setRoleStatus={setRoleStatus} />}
        ></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route
          path="/logout"
          element={<Logout setRoleStatus={setRoleStatus} />}
        ></Route>
        <Route path="/addbook" element={<AddBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
