import React, {useEffect} from 'react';
import ReviewItem from "./ReviewItem";
import {findAllReviews} from "../../Services/review-service";
import {useDispatch, useSelector} from "react-redux";

const Reviews = (id) => {
    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => findAllReviews(dispatch), []);
    console.log(reviews);
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
