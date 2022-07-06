import React from 'react';
import Rating from 'react-rating';
import { Link, useNavigate } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';
import '../Products/Products.css';

const Product = ({ product }) => {
    const { _id, title, description, image, category, price, rating } = product;
    console.log(product);

    return (
            <div className="single-product mx-auto mx-sm-1 mt-4 p-1">
                <div className="text-center"><img className="py-2 product-image " src={image} alt="" />
                </div>

                <div className="px-1 pt-2">
                    <h6 style={{ color: '#111b36' }}> {title} </h6>
                    <p className='mb-1' style={{ color: 'slategrey' }}> {category}</p>
                    <Rating className='mb-1'
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly>
                    </Rating>

                </div>
                <div className='row d-flex align-items-center justify-content-center ps-2'>
                    <div className="col-md-3 col-4"><h5 className='fw-bold' style={{ color: 'brown' }}> {price}</h5></div>
                    <div className="col-md-9 col-8">
                        <Link style={{ textDecoration: 'none' }} to={`/details/${_id}`}><button style={{ backgroundColor: '#FF136F', color: 'white' }} className="btn product-btn px-md-5 px-3"> View </button></Link>
                    </div>
                </div>
            </div >
    );
};

export default Product;