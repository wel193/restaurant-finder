import React from "react";

const RegisterComponent = () => {
  return(
      <>
        <div className="d-flex card input-group">
          <div className="card-body">
            <h5 className="card-title">
              Register
            </h5>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="username">Username</label>
              <input className="form-control" type="text" id="username"
                     name="username" autoFocus required/>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-control" type="email" id="email"
                     name="email" required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="password">Password</label>
              <input className="form-control" type="password" id="password"
                     name="password" required/>
            </div>
            <button className="btn btn-success btn-block">Register</button>
          </div>
        </div>
      </>
  )
};

export default RegisterComponent;