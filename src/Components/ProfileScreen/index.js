import React from "react";
import ProfileComponent from './ProfileComponent';
import Navigation from '../Navigation';

const ProfileScreen = () => {
    return(
        <div className="container mt-2">
            <Navigation active="profile"/>
            <ProfileComponent/>
        </div>

    )
};

export default ProfileScreen;
