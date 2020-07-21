import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Header(props) {
  const links = props.auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

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

      <div className="ml-auto mr-5">{links}</div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Header);
