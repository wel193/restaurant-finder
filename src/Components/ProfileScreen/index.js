import React from "react";
import ProfileComponent from './ProfileComponent';
import Navigation from '../Navigation';
const selectUser = (state) => state.user;

const LoginScreen = () => {
    return(
        <div className="container mt-2">
            <Navigation active="loggedIn"/>
            <ProfileComponent/>
        </div>

    )
};

export default LoginScreen;
