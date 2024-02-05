import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = () => {
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
        <Link to="/login" className="navbar-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
