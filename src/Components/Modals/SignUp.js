import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/authAction";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [state, setState] = useState({
    Email: "",
    Password: "",
    FName: "",
    LName: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleClick = () => {
    props.signUp(state);
    console.log("You have signed Up");
  };

  return (
    <div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <h4 className="modal-title text-center mt-2 ">Sign Up Form</h4>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div class="form-group">
                <label for="FName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="FName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="LName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="LName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="InputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="InputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Password must be 6 characters or longer
                </small>
              </div>

              <Link to="/">
                <button onClick={handleClick} className="btn btn-secondary">
                  Sign UP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
