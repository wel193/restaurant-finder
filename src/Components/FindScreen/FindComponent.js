import React, {useState} from 'react';
import {findRestaurantsByName} from "../../Services/restaurant-service";

const FindComponent = () => {
    const [restaurants, setRestaurants] = useState({});
    const [input, setInput] = useState('');

    const find = () => {
        findRestaurantsByName(input)
            .then(restaurants => setRestaurants(restaurants));
    }

    return (
        <div>
            <h1>Find Restaurants</h1>
            <label
                for="search">
                Enter the restaurant name:
            </label>
            <input
                id="search"
                className="form-control"
                onChange={(event) => setInput(event.target.value)}/>
            <button
                className="btn btn-primary"
                onClick={find}>
                Search
            </button>

            <div>
                <div>
                    <h1>Results</h1>
                    <ul className="list-group">
                        {
                            restaurants.map(restaurant => {
                                return(
                                    <li className="list-group-item">
                                        {restaurant.restaurantName}
                                    </li>
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