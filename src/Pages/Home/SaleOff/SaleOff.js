import React from 'react';
import './SaleOff.css';
import shoppingImg from '../../../images/shopping.png';

const SaleOff = () => {
    return (
        <div className="support-cta text-center">
            <div className="text-white support-content container">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <div className="sale-style">
                            <h2 className='mt-md-0 mt-4'>THE BEST SALE OFF</h2>
                            <h1>50%</h1>
                            <h3>On Shop</h3>
                            <button to="/products" className="btn sale-btn rounded-pill my-1 px-5 py-md-2 py-1 fw-bold border-0">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className='shopping-img' src={shoppingImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleOff;