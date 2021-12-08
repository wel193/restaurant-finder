import React from 'react';
import {useParams} from 'react-router-dom';
import Reviews from "../Reviews";
import RestaurantInfo from "../RestaurantInfo";
import './detailsScreen.css';
import Navigation from "../../Navigation";
import AddReview from "./AddReview";

const DetailsScreen = () => {
    // assuming path is /details/:id
    const { id } = useParams();

    return (
        <div>
            <div>
                <Navigation active='find'/>
            </div>
            <div className="mb-3">
                <RestaurantInfo/>
            </div>
            <div className="mb-3">
                <h1>Reviews</h1>
                <Reviews/>
            </div>
            <div className="mb-3">
                <h1>Add a Review</h1>
                <AddReview/>
            </div>
        </div>
    )
}

export default DetailsScreen;