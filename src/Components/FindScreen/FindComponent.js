import React, {useState} from 'react';
import {findRestaurantsByName} from "../../Services/restaurant-service";
import './findScreen.css';
import FindItem from "./FindItem";

const FindComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [input, setInput] = useState('');

    const find = () => {
        findRestaurantsByName(input)
            .then(restaurants => setRestaurants(restaurants));
    };

    return (
        <div>
            <div className="card text-white border-0">
                <img
                    className="card-img"
                    src="/Images/restaurant-img-1.jpg"
                    alt="Card image"/>

                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="card-text d-flex flex-column align-items-center rf-font-20px">
                        <div className="card-title">
                            {/*When screen < md*/}
                            <h1
                                className="d-none d-md-block text-white rf-font-80px text-center rf-font-bold rf-font-shadow rf-font-stroke-black-2px">
                                Find Restaurants
                            </h1>
                            {/*When screen >= md*/}
                            <h1
                                className="d-block d-md-none text-white rf-font-50px text-center rf-font-bold rf-font-shadow">
                                Find Restaurants
                            </h1>
                        </div>
                        <div
                            className="input-group d-flex align-items-center rf-rounded-border-30px rf-search-box">
                            <span className="input-group-prepend">
                                <div
                                    onClick={find}
                                    className="input-group-text bg-transparent">
                                    <i className="fas fa-search"></i>
                                </div>
                            </span>
                            <input
                                 placeholder="Find Restaurants"
                                 className="form-control py-2 bg-transparent"
                                 onChange={(event) => setInput(event.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="mt-4">Results</h1>
                    <ul className="list-group">
                        {
                            restaurants.map(restaurant => {
                                return(
                                    <FindItem restaurant={restaurant}/>
                                    )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FindComponent;