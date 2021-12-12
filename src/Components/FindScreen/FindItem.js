import React from 'react';
import Rating from "../Reviews/Rating";
import {Link} from 'react-router-dom';

const FindItem = ({restaurant}) => {
    return (
        <li className="list-group-item mb-2">
            <div className="row">
                {/*restaurant info takes up 7 columns OR all columns if screen size < md*/}
                <div className="col-12 col-md-7">
                    <div className="d-flex flex-column">
                        {/*when screen size < md, render image on top*/}
                        <div className="d-block d-md-none text-center mb-3">
                            <img
                                src={restaurant.images[0] || `/Images/restaurant-img-1.jpg`}
                                alt="avatar"
                                width="400px"/>
                        </div>
                        {/*restaurant info*/}
                        <div>
                            <div>
                                <h2>{restaurant.restaurantName}</h2>
                            </div>
                            <div className="d-flex flex-column">
                                <h4>Information</h4>
                                <span>Address: {restaurant.address}</span>
                                <span>Phone: {restaurant.phone}</span>
                                <span>Hours: {restaurant.hours}</span>
                                <span>Website: {restaurant.website}</span>
                            </div>
                            <div className="mt-2">
                                <h4>About</h4>
                                <span>{restaurant.description}</span>
                            </div>
                            <div className="mt-2">
                                <Link to={`/details/${restaurant._id}`}>
                                    <button className="btn btn-primary">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*if screen >= md, restaurant image renders here, using 5 columns*/}
                <div className="col-md-5 d-none d-md-block">
                    <div className="d-flex justify-content-end">
                        <img
                            src={restaurant.images[0] || `/Images/restaurant-img-1.jpg`}
                            alt="avatar"
                            width="400px"/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FindItem;