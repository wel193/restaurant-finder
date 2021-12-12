import React, {useState} from "react"
import {userLogin, getUser} from '../../Services/userService';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const LoginComponent = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = () => {
    userLogin(dispatch, {
      username: loginUsername,
      password: loginPassword
    }).then((res)=>{console.log("success", res); navigate('/')})
        .catch(()=>setErrorMsg("Login information is not valid"))
  }

  return(
      <>
        <div className="d-flex card input-group">
          <h3>{errorMsg}</h3>
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