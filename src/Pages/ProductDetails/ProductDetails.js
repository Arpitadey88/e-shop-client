import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useNavigate, useParams } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { _id } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])
    const navigate = useNavigate();
    const Swal = require("sweetalert2");

    const handleAddToDb = (id) => {
        addToDb(id);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Add to cart successful",
        }).then((result) => {
            if (result.isConfirmed) {
                // navigate("/orderDetails");
                window.location.reload();
            }
        });
    };
    // const handleClick = () => {
    //     navigate("/orderDetails");
    //     window.location.reload();
    // };
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
        <div className="container py-5">

            <div className="row mt-5 g-4">
                <div className="col-md-6 text-center imgContainer">
                    <div className="d-flex flex-column align-items-center">
                        <img src={product.image} className="w-50 pb-2 cursor-pointer" alt="" />

                        <img src={product.image} className="w-50 pb-2 cursor-pointer" alt="" />

                        <img src={product.image} className="w-50 cursor-pointer" alt="" />
                    </div>

                    <img src={product.image} className="singleImage pe-3 pe-md-2" alt="" />
                    {/* <img className='w-50 h-75' src={product.image} alt="" /> */}
                </div>
                <div className="col-md-6">
                    <h3>{product.title}</h3>
                    <h4>{product.price}</h4>
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
                        <button onClick={() => handleAddToDb(_id)} style={{ backgroundColor: '#FF136F', color: 'white' }} className="btn product-btn px-4 mt-3"> Add To Cart</button>
                    </div>
                    <div style={{ backgroundColor: 'whiteSmoke', width: '450px' }} className=' mt-3 px-3 py-2'>
                        <ul>
                            <li><small>Product color may slightly vary, depending on your device's screen resolution</small></li>
                            <li><small>10% vat will be included for each product</small></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;