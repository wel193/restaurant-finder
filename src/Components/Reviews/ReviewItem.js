import React from 'react';
import Rating from "./Rating";

const ReviewItem = ({review}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-2 d-none d-md-block">
                    <img
                        alt="avatar"
                        src={review.avatar}
                        className="rounded-circle d-none d-md-block"
                        width="100px"/>
                </div>
                <div className="col-12 col-md-10">
                    <div className="d-flex flex-column">
                        <img
                            alt="avatar"
                            src="/Images/cat-avatar.jpg"
                            className="rounded-circle d-block d-md-none"
                            width="100px"/>
                        <div className="d-flex align-items-center">
                            <div className="col-10">
                                {review.userName}
                            </div>
                            <div className="col-2 d-flex justify-content-end">
                                <Rating rating={review.rating}/>
                            </div>
                        </div>
                        <div>
                            {review.date}
                        </div>
                        <div>
                            {review.content}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ReviewItem;