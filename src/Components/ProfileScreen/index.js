import React from "react";
import ProfileComponent from './ProfileComponent';
import Navigation from '../Navigation';

const LoginScreen = () => {
    return(
        <div className="container mt-2">
            <Navigation active="loggedIn"/>
            <ProfileComponent/>
        </div>

    )
};

export default LoginScreen;
