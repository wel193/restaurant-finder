import React, {useState} from "react"

const LoginComponent = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginHandler = () => {

  }
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
                       name="username" onChange={e => setLoginUsername(e.target.value)} autoFocus required/>
              </div>
              <div className="mb-3">
                  <label className="form-label"
                         htmlFor="password">Password</label>
                  <input className="form-control" type="password" id="password"
                         name="password" onChange={e => setLoginPassword(e.target.value)} required/>
              </div>
              <button className="btn btn-success btn-block" onClick={loginHandler}>Login</button>
          </div>
        </div>
      </>
  )
};

export default LoginComponent;