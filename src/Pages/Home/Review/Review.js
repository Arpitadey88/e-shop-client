import React from 'react';
import Rating from 'react-rating';
import comma from '../../../images/comma.png';
import './Review.css';

const Review = (props) => {
    const { star, name, description, img } = props.review;
    return (
        <div className="p-3 review-cart mx-md-3 mx-0" style={{ width: '290px', height: '270px', backgroundColor: 'ghostWhite' }}>
        <div >
            <span><img style={{ height: '30px' }} src={comma} alt="" /></span>
            <span className="ms-3" style={{ color: 'slategrey' }}>{description}</span>
        </div>

        <div className="row mt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-5 col-5"> <img style={{ height: '80px', width: '80px' }} src={img} alt="" /></div>
            <div className="col-md-7 col-7 mt-3">
                <h5 style={{ color: '#1E3163' }}>{name}</h5>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                </Rating>
            </div>
        </div>
    </div>
    );
};

export default Review;