import React from 'react';
import Navigation from "../Navigation";
import HomeContent from "./HomeContent";

const HomeScreen = () => {
    return (
        <div>
            <Navigation active="home"/>
            <HomeContent/>
        </div>
    )
}
export default HomeScreen;