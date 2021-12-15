import React from "react";
import {userLogout} from '../Services/userService';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  userLogout()
      .then(res=>console.log("after log out", res))
      .then(()=>navigate('/'))

return null
};

export default Logout;