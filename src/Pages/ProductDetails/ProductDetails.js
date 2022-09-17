import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../utilities/fakedb';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const displayCart = useCart;
    const { _id } = product;

    useEffect(() => {
        fetch(`https://mysterious-tor-42417.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    const Swal = require("sweetalert2");

    const handleAddToDb = (id) => {
        addToDb(id);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Add to cart successful",
        }).then((result) => {
            if (result.isConfirmed) {
                // window.location.reload();
            }
        });
    };
    const handleClick = () => {
        navigate("/orderDetails");
        window.location.reload();
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)
        }
    }
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1)
        }
    }
    return (
        <div className="py-md-5 pt-4 bg-white container">
            <div className="row mt-5 g-2">
                <div className="col-md-6 imgContainer row mx-0">
                    <div className="col-md-3 d-flex flex-md-column align-items-center m-0 p-0">
                        <img style={{ height: '125px' }} src={product.image} className="w-md-100 m-md-2 cursor-pointer col-img" alt="" />

                        <img style={{ height: '125px' }} src={product.image} className="w-md-100 m-md-2 cursor-pointer col-img" alt="" />

                        <img style={{ height: '125px' }} src={product.image} className="w-md-100 cursor-pointer col-img" alt="" />
                    </div>

                    <div className='col-md-9 d-flex justify-content-end align-items-center'>
                        <img src={product.image} className="singleImage" alt="" />
                    </div>
                    {/* <img className='w-50 h-75' src={product.image} alt="" /> */}
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center m-0">
                    <div className='px-3'>
                        <h3>{product.title}</h3>
                        <h4 className='text-danger'>{product.price}</h4>
                        <h6>{product.category}</h6>
                        <h6>{product.description}</h6>
                        <h6>Available : <span className='text-success'>In stock</span></h6>
                        <Rating
                            initialRating={product.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>
                        </Rating>

                        <div className="input-group w-25 py-2">
                            <button type='button' onClick={handleDecrement} className='input-group-text'> <i class="fa fa-minus"></i> </button>
                            <div className='form-control text-center '>{quantity}</div>
                            <button type='button' onClick={handleIncrement} className='input-group-text'> <i class="fa fa-plus"></i></button>
                        </div>

                        <div>
                            <button onClick={() => handleAddToDb(_id)} style={{ backgroundColor: '#f0a202', color: 'white' }} className="btn product-btn px-4 py-1 my-1"> Add To Cart</button>
                        </div>
                        <div className='info-product mt-4 px-3 py-2'>
                            <ul>
                                <li><small>Product color may slightly vary, depending on your device's screen resolution</small></li>
                                <li><small>10% vat will be included for each product</small></li>
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <Link className='text-danger' to={`/allProducts`}><h6>Shopping More?</h6></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;