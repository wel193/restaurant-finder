const REVIEW_API = 'http://localhost:4000/api/reviews';

export const findAllReviews = (dispatch) =>
    fetch(REVIEW_API)
        .then(response => response.json())
        .then(reviews => dispatch({
            type: 'find-all-reviews',
            reviews
        }));


// TODO: add findReviewsByRestaurantId

export const createReview = (review, dispatch) =>
    fetch(REVIEW_API, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(review => dispatch({
            type: 'create-review',
            review
        }));






