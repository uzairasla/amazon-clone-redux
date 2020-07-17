import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SignUp from "./SignUp";

function Header() {
  return (
    <nav className="header d-flex align-items-center">
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
        <i className="fa fa-search fa-lg p-2 " aria-hidden="true"></i>
      </div>
      {/*add Signup link*/}
      {/* <Link
        className="ml-5"
        data-toggle="modal"
        data-target="#myModal"
        to="/signup"
      > 
        Sign Up
              </Link> */}
      <button
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        Sign Up
      </button>
      {/* Sign Up Form Modal */}
      <SignUp />
    </nav>
  );
}

export default Header;
