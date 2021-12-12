import React from "react";
import RegisterComponent from './RegisterComponent';
import Navigation from '../Navigation';

const RegisterScreen = () => {
  return(
      <div className="container mt-2">
        <Navigation/>
        <RegisterComponent/>
      </div>

  )
};

export default RegisterScreen;
