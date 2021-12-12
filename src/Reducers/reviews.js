
const reviews = (state=[], action) => {
    switch (action.type) {
        case 'find-all-reviews':
            return action.reviews;
        case 'create-review':
            return (
                [
                    action.review,
                    ...state
                ]
            );
        default:
            return state;
    };
};

export default reviews;
