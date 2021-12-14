import React from 'react';
import Navigation from "../Navigation";
import FindComponent from "./FindComponent";
import {Link} from "react-router-dom";
import {fetchDetails} from "../../Services/travel-service";

const FindScreen = () => {
    return (
        <div>
            <div>
                <Navigation active='find'/>
            </div>
            <div className="mb-3">
                <FindComponent/>
            </div>
        </div>
    )
}

export default FindScreen;