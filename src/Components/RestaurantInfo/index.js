import React, {useEffect, useState} from 'react';
import {findRestaurantById} from "../../Services/restaurant-service";

const RestaurantInfo = ({restaurant}) => {

    return(
        <div>
            <div className="mt-3 mb-3">
                <h1 className="rf-font-60px">{restaurant.restaurantName}</h1>
            </div>

            <div className="d-flex justify-content-center">
                <img src="/Images/restaurant-img-1.jpg" width= "100%"/>
            </div>

            <div className="card border-primary mt-3">
                <div className="card-header">
                    Address
                </div>
                <div className="card-body">
                    {restaurant.address}
                </div>
            </div>
        </div>
    );
}

export default RestaurantInfo;