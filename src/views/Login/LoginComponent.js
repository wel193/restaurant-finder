import React from "react";

const LoginComponent = () => {
  return(
      <>
        <div className="d-flex card input-group">
          <div className="card-body">
            <h5 className="card-title">
              Login
            </h5>
              <div className="mb-3">
                <label className="form-label"
                       htmlFor="username">Username</label>
                <input className="form-control" type="text" id="username"
                       name="username" autoFocus required/>
              </div>
              <div className="mb-3">
                  <label className="form-label"
                         htmlFor="password">Password</label>
                  <input className="form-control" type="password" id="password"
                         name="password" required/>
              </div>
              <button className="btn btn-success btn-block">Login</button>
          </div>
        </div>
      </>
  )
};

export default LoginComponent;