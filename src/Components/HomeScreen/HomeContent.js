import React from 'react';
import './homeScreen.css';
import {useSelector} from "react-redux";

const HomeContent = (user) => {
    const currentUser = useSelector(state => state.user);

    return(
        <div>
            <div>
                <h1 className="text-center rf-font-100px mt-5">
                    Restaurant Finder
                </h1>
                <h2 className="text-center mb-5">
                    Find Your Favorite Restaurant Right Here!
                </h2>
            </div>
            <div className="card border-0">
                <img
                    src="/Images/restaurant-img-1.jpg"/>
                <div className="card-body">
                    <div className="card-title rf-font-60px">
                        {
                            currentUser &&
                            <div>Welcome back, {currentUser.username}!</div>
                        }
                    </div>
                    <div className="card-text">
                        // Insert our content
                        (Note: we have to consider displaying for two scenarios here -
                        one for anonymous users, and one for logged-in users)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;