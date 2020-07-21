import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/authAction";
import { Link } from "react-router-dom";

const SignedInLinks = (props) => {
  return (
    <div className="ml-auto mr-5">
      <button className="btn btn-danger mr-5" onClick={() => props.SignOut()}>
        Sign Out
      </button>
      <Link to="/cart">
        <i className="fa fa-shopping-cart fa-lg mr-5" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

const mapDispatchToPros = (dispatch) => {
  return {
    SignOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToPros)(SignedInLinks);
