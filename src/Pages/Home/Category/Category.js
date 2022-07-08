import React from 'react';
import jewellery from "../../../images/jewellery.png";
import clothing from "../../../images/clothing.png";
import electronics from "../../../images/electronics.png";
import './Categories.css';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate = useNavigate();
   
    return (
        <div className="mb-lg-5 my-2 product-card-section">
            <div className="container">
                <div className="row product-card-header py-3">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <h5 data-aos="fade-right" data-aos-duration="1000">
                            Our <span>Products</span>
                        </h5>
                        <h3 data-aos="fade-right">What Product We Offer</h3>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Veritatis nobis accusantium sapiente impedit modi dolore aliquam
                            eius
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <button onClick={() => navigate("/products")} type="button" className="btn product-btn">All Products</button>
                    </div>
                </div>

                <div className="row g-4 my-4" data-aos="fade-up" data-aos-duration="2000">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="py-3 product-card product-card-content text-center">
                            <img src={clothing} className="card-img-top mx-3" alt="..." />
                            <div className="card-body">
                                <h4 className="mb-2">Clothing</h4>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolor tenetur distinctio eius voluptate, veniam ullam.
                                </p>
                                <a href="/">Read More <i className="fas fa-arrow-right px-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="py-3  product-card text-center">
                            <img src={jewellery} className="card-img-top mx-3" alt="..." />
                            <div className="card-body">
                                <h4 className="mb-2 text-white">Jewellery</h4>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolor tenetur distinctio eius voluptate, veniam ullam.
                                </p>
                                <a className='text-white' href="/">Read More <i className="fas fa-arrow-right px-2 text-white"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="product-card py-3 product-card-content text-center">
                            <img src={electronics} className="card-img-top mx-3" alt="..." />
                            <div className="card-body">
                                <h4 className="mb-2">Electronics</h4>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolor tenetur distinctio eius voluptate, veniam ullam.
                                </p>
                                <a href="/">Read More <i className="fas fa-arrow-right px-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;