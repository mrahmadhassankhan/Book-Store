import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Books from "./components/Books";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
const App = () => {
  const [role, setRoleStatus] = useState("");
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
      </Routes>
    </BrowserRouter>
  );
};
export default App;
