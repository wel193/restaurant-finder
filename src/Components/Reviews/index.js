import React, {useEffect, useState} from 'react';
import ReviewItem from "./ReviewItem";
import {findReviewsByRestaurantId} from "../../Services/review-service";
import {useDispatch, useSelector} from "react-redux";

const Reviews = ({restaurant}) => {
    // const reviews = useSelector(state => state.reviews);
    const [reviews, setReviews] = useState([]);
    const dispatch = useDispatch();

    useEffect(() =>
        findReviewsByRestaurantId(restaurant._id)
            .then(resultReviews => console.log(resultReviews)), []);


    return (
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
    )


}

export default Reviews;
