import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SignUp from "./Modals/SignUp";
import LogIn from "./Modals/LogIn";

function Header() {
  return (
    <nav className="container-fluid header d-flex align-items-center">
      {/* code for logo*/}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
          className="navbar-logo"
        />
      </Link>
      {/* to add or remove search engine in the header */}
      {/* <div className="searchbar d-flex align-items-center">
        <input type="text" placeholder="Search..." className="w-100 p-2" />
        <i className="fa fa-search fa-lg p-2 " aria-hidden="true"></i>
      </div> */}

      <div className="ml-auto mr-5">
        <button
          className="btn btn-danger mr-5"
          data-toggle="modal"
          data-target="#myModal"
        >
          Sign Up
        </button>
        <button
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#myLoginModal"
        >
          Log In
        </button>
      </div>
      {/* Sign Up Form Modal */}
      <SignUp />
      {/* Log In Modal */}
      <LogIn />
    </nav>
  );
}

export default Header;
