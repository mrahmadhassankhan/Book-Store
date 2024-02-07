import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = ({ role }) => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="/" className="navbar-link">
          Book Store
        </Link>
      </div>
      <div className="right-navbar">
        <Link to="/books" className="navbar-link">
          Books
        </Link>
        {role === "admin" && (
          <>
            <Link to="/addbook" className="navbar-link">
              Add Book
            </Link>
            <Link to="/addStudent" className="navbar-link">
              Add Student
            </Link>
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
          </>
        )}

        {role === "" ? (
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        ) : (
          <Link to="/logout" className="navbar-link">
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
