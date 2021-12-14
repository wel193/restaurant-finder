import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import RestaurantInfo from "../RestaurantInfo";
import './detailsScreen.css';
import Navigation from "../Navigation";
import AddReview from "./AddReview";
import {findRestaurantById} from "../../Services/restaurant-service";
import {useDispatch, useSelector} from "react-redux";
import {findReviewsByRestaurantId} from "../../Services/review-service";
import ReviewItem from "../Reviews/ReviewItem";

const DetailsScreen = () => {
    // assuming path is /details/:id
    const { id } = useParams();
    const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState({});
    const reviews = useSelector(state => state.reviews);

    useEffect(() => {
        findRestaurantById(id)
            .then(restaurant => setRestaurant(restaurant))
            .then(res => findReviewsByRestaurantId(id, dispatch));
    }, []);

    // retrieve current user
    const user = useSelector(state => state.user);
    console.log(user);

    return (
        <div>
            <div>
                <Navigation active='find'/>
            </div>
            <div className="mb-5">
                <RestaurantInfo restaurant={restaurant}/>
            </div>
            <div className="mb-5">
                <h1>Reviews</h1>
                <div>
                    <ul className="list-group">
                        {
                            reviews.map(review => {
                                    return (<ReviewItem review={review}/>);
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="mb-5">
                <h1>Add a Review</h1>
                {user &&
                <AddReview restaurant={restaurant} user={user}/>
                }
                {!user &&
                <div className="alert alert-danger">Please login to add a review.</div>}
            </div>
        </div>
    )
}

export default DetailsScreen;