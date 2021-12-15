import React, {useEffect, useState} from 'react';
import './homeScreen.css';
import {useDispatch, useSelector} from "react-redux";
import {findAllReviews} from "../../Services/review-service";
import RecentReviewItem from "./RecentReviewItem";
import {RecentReviews} from "./RecentReviews";

const HomeContent = (user) => {
    const currentUser = useSelector(state => state.user);
    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();

    useEffect(() => findAllReviews(dispatch), []);

    return(
        <div>
            <div>
                <h1 className="text-center rf-font-100px mt-5">
                    Restaurant Finder
                </h1>
                <h2 className="text-center mb-5">
                    Find Your Favorite Restaurant Right Here!
                </h2>
            </div>
            <div className="card border-0">
                <img
                    src="/Images/restaurant-img-1.jpg"/>
                <div className="card-body">
                    <div className="card-title text-center rf-font-60px mb-4">
                        {
                            currentUser &&
                            <div>Welcome back, {currentUser.username}!</div>
                        }
                    </div>
                    <div className="card-text">
                        <h2>Most Recent Reviews</h2>
                        {/*<ul>*/}
                        {/*    {RecentReviews(reviews).map(review => <RecentReviewItem review={review}/>)}*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;