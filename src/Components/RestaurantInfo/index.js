import React, {useEffect, useState} from 'react';
import {findRestaurantById} from "../../Services/restaurant-service";

const RestaurantInfo = ({restaurant}) => {
    const photoURL = "/Images/restaurant-img-1.jpg";
    return(
        <div>
            <div className="mt-3 mb-3">
                <h1 className="rf-font-60px">{restaurant.name}</h1>
            </div>

            <div className="d-flex justify-content-center">
                <img src={photoURL} width="100%"/>
            </div>

            <div className="card border-0 mt-3">
                <h1>Information</h1>
                <div className="card-header rf-font-20px">
                    Address
                </div>
                <div className="card-body">
                    {restaurant["location_string"]}
                </div>
                <div className="card-header rf-font-20px">
                    Description
                </div>
                <div className="card-body">
                    {restaurant.description}
                </div>
            </div>
        </div>
    );
}

export default RestaurantInfo;