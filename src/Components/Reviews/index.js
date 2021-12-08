import React from 'react';
import reviews from './dummyReviews.json';
import ReviewItem from "./ReviewItem";

const Reviews = (id) => {
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
