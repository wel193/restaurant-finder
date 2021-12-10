import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createReview} from "../../Services/review-service";

const AddReview = ({id}) => {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(3);
    const dispatch = useDispatch();

    // TODO: add user, restaurant
    const createHandler = () => {
        const newReview = {
            user: {
                avatarIcon: "/Images/cat-avatar.jpg",
                userName: 'JohnDoe'
            },
            content,
            rating,
            date: new Date()
        }
        createReview(newReview, dispatch);
    }



    return (
        <div className="bg-transparent">
            <div className="form-group">
                <div for="review" className="form-label rf-font-20px">
                    Review:
                </div>
                <textarea
                    className="form-control"
                    id="review"
                    placeholder="Add your review here."
                    onChange={(event) => {setContent(event.target.value)}}>
                </textarea>
            </div>
            <div className="mt-2 form-group">
                <div for="rating" className="form-label rf-font-20px">
                    Rating:
                </div>
                <select
                    className="form-select"
                    onChange={(event) => {setRating(event.target.value)}}>
                    <option>1</option>
                    <option>2</option>
                    <option selected>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <button
                className="btn btn-primary mt-3"
                onClick={createHandler}>
                Add
            </button>
        </div>
    )
}

export default AddReview;
