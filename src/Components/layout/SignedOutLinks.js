import React from "react";
import SignUp from "../Modals/SignUp";
import LogIn from "../Modals/LogIn";

const SignedOutLinks = () => {
  return (
    <div>
      <div className="ml-auto mr-5">
        <button
          className="btn btn-danger mr-5"
          data-toggle="modal"
          data-target="#myLoginModal"
        >
          Sign In
        </button>
        <button
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#myModal"
        >
          Sign UP
        </button>
      </div>
      <SignUp />
      {/* Log In Modal */}
      <LogIn />
    </div>
  );
};

export default SignedOutLinks;
