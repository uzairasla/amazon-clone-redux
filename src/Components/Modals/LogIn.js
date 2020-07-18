import React, { useState } from "react";

const LogIn = () => {
  const [state, setState] = useState({
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleClick = () => {};
  return (
    <div id="myLoginModal" className="modal fade" role="dialog">
      <div className="modal-dialog ">
        <div className="modal-content">
          <h4 className="modal-title text-center mt-1">Log In Form</h4>
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
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
            </div>
            <button onClick={handleClick} className="btn btn-secondary">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
