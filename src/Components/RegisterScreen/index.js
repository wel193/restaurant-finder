import React from "react";
import RegisterComponent from './RegisterComponent';
import Navigation from '../Navigation';

const RegisterScreen = () => {
  return(
      <div className="container mt-2">
        <Navigation active="register"/>
        <RegisterComponent/>
      </div>

  )
};

export default RegisterScreen;
