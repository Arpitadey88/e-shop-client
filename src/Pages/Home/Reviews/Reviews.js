import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
// import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-tor-42417.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <div style={{ backgroundColor: 'whiteSmoke' }} className="container review-bg my-4">
            <h3 className='dancingFont fw-bold' data-aos="fade-right">Customer Feedback</h3>
            <div className="row row-cols-1 row-cols-md-4 g-3 d-flex justify-content-center py-3">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}>
                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
