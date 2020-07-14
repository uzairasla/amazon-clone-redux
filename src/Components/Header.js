import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header d-flex align-items-center ">
      {/* code for logo*/}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
          className="navbar-logo"
        />
      </Link>
      <div className="searchbar d-flex align-items-center">
        <input type="text" placeholder="Search..." className="w-100 p-2" />
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
      </div>
      {/* about to add a login and Signup link*/}
      <Link className="ml-5" to="/signup">
        Sign Up
      </Link>
    </nav>
  );
}

export default Header;
