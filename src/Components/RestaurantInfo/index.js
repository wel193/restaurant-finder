import React from 'react';

const RestaurantInfo = (id) => {
    return(
        <div>
            <div className="mt-3 mb-3">
                <h1 className="rf-font-60px">Restaurant Name</h1>
            </div>

            <div className="d-flex justify-content-center">
                <img src="/Images/restaurant-img-1.jpg" width= "100%"/>
            </div>

            <div className="card border-primary mt-3">
                <div className="card-header">
                    Address
                </div>
                <div className="card-body">
                    Address
                </div>
            </div>

        </div>
    );
}

export default RestaurantInfo;