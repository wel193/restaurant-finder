import React, {useState} from 'react';
import {userRegister} from '../../Services/userService';
import {useNavigate} from 'react-router-dom';

const RegisterComponent = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerRole, setRegisterRole] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate();
  const registerHandler = () => {
    userRegister({
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
      role: registerRole,
      avatarIcon: "/Images/cat-avatar.jpg"
    }).then(()=>{navigate('/login')})
        .catch(()=>setErrorMsg("Error: A user with the given username or email is already registered"))
  }
  return(
      <>
        <div className="d-flex card input-group">
          {errorMsg &&
          <h5 className="alert alert-danger">{errorMsg}</h5>}
          <div className="card-body">
            <h5 className="card-title">
              Register
            </h5>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="username">Username</label>
              <input className="form-control" type="text" id="username"
                     name="username" onChange={e => setRegisterUsername(e.target.value)} autoFocus required/>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-control" type="email" id="email"
                     name="email" onChange={e => setRegisterEmail(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="password">Password</label>
              <input className="form-control" type="password" id="password"
                     name="password" onChange={e => setRegisterPassword(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="role">Role:</label>
              <select className="form-select" onChange={e => setRegisterRole(e.target.value)}>
                <option defaultValue={"USER"}>Please select a role</option>
                <option value="USER">User</option>
                <option value="HOST">Host</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <button className="btn btn-success btn-block" onClick={registerHandler}>Register</button>
          </div>
        </div>
      </>
  )
};

export default RegisterComponent;