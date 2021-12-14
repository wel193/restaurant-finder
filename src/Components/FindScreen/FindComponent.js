import React, {useEffect, useState} from 'react';
import {fetchRestaurants} from "../../Services/googlemap-service";
import './findScreen.css';
import FindItem from "./FindItem";
import Geocode from "react-geocode";

const FindComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [input, setInput] = useState('');
    const [errMsg, setErrMsg] = useState('');

    Geocode.setApiKey("AIzaSyBxAZcol1lZpwRDCPDe9hShzaCJrTOoISI");
    Geocode.setLanguage("en");
    Geocode.enableDebug();

    const clickFetchRestaurantsHandler = () => {
        Geocode.fromAddress(input).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log("address to geo",lat, lng);
                setErrMsg("");
                fetchRestaurants(lat, lng)
                    .then(data => {console.log("fetch", data); return setRestaurants(data)})
            }
        ).catch(()=>{setErrMsg("Provided address is not valid"); setRestaurants([])})

    }

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
                                    className="input-group-text bg-transparent">
                                    <i className="fas fa-search"></i>
                                </div>
                            </span>
                            <input
                                 placeholder="search restaurants"
                                 className="form-control py-2 bg-transparent"
                                 onChange={(event) => setInput(event.target.value)}/>
                        </div>
                        <button className="btn btn-success mt-2 btn-block" onClick={clickFetchRestaurantsHandler}>Search</button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="mt-4">Results</h1>
                    <h3>{errMsg}</h3>
                    <ul className="list-group">
                        {
                            restaurants.map(restaurant => {
                                if (restaurant.name)
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