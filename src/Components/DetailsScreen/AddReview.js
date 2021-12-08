import React, {useState} from 'react';

const AddReview = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');

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
                    onChange={(event) => {setReview(event.target.value)}}>
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
        </div>
    )
}

export default AddReview;
