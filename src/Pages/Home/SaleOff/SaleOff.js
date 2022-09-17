import React, { useEffect, useState } from 'react';

import './SaleOff.css';
import shoppingImg from '../../../images/shopping.png';
import Product from '../../Product/Product';
import { useNavigate } from 'react-router-dom';
import Items from '../Items/Items';

const SaleOff = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://mysterious-tor-42417.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(4, 12)));
    }, [])

    if (products.length < 1) {
        return <div className='container text-center my-md-5 py-md-5'>
            <h5 className='text-center'>loading...</h5>
        </div>
    }

    return (
        <>
            <div className="sale-area text-center">
                <div className="text-white sale-content container">
                    <div className="row">
                        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                            <div className="sale-style dancingFont fw-bold">
                                <h2 className='mt-md-0 mt-3'>THE BEST SALE OFF</h2>
                                <h1>50%</h1>
                                <h3>On Shop</h3>
                                <button to="/products" className="btn sale-btn rounded-pill my-md-1 px-5 py-md-2  fw-bold border-0">Shop Now</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <img className='shopping-img' src={shoppingImg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-white py-3">
                <div className='container' id='products'>
                    <h2 className="pt-md-5 pb-md-3 dancingFont fw-bold" data-aos="fade-right">Our Latest Products </h2>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4 mx-1 pt-2">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}>
                            </Product>)
                        }
                    </div>
                    <div className='text-center'>
                        <button onClick={() => navigate("/allProducts")} type="button" className="btn product-btn mt-md-2 mt-0 mb-md-5 mb-3" data-aos="zoom-in">View All Products</button>
                    </div>
                </div>
            </div>
            {/* <Items></Items> */}
        </>
    );
};

export default SaleOff;