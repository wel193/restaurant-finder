import React from 'react';
import Navigation from "../Navigation";
import FindComponent from "./FindComponent";
import {Link} from "react-router-dom";

const FindScreen = () => {
    return (
        <div>
            <div>
                <Navigation active='find'/>
            </div>
            <div className="mb-3">
                <FindComponent/>
            </div>
            <Link to="/details/61b3030cc7e07b15e8b418e1">
                Details
            </Link>
        </div>
    )
}

export default FindScreen;