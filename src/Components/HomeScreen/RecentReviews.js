
export const RecentReviews = (reviews) => {
    const sortedReviews = reviews.sort((a,b) => {
        return new Date(b.date)- new Date(a.date);
    });

    return sortedReviews.slice(0, 4);
};

