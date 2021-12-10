import React from "react";
import LoginComponent from './LoginComponent';
import Navigation from '../../Navigation';

const LoginScreen = () => {
  return(
      <div className="container mt-2">
        <Navigation active="login"/>
        <LoginComponent/>
      </div>

  )
};

export default LoginScreen;
