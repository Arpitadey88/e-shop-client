import React, { useEffect } from 'react';
import banner1 from '../../../images/banner1.png';
import banner2 from '../../../images/banner2.png';
import banner3 from '../../../images/banner3.png';
import { Navigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    // const handleViewAllProducts = () => {
    //     Navigate('/explore');
    //  }

    useEffect(() => {
        document.title = "E-Shop"
    }, []);

    return (
        <div className='panda-bg-color ' id='banner'>
            <div className=" pt-4 container">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-corner">
                        <div className="carousel-item active">
                            <div className="row d-flex align-items-center bg-gradient py-md-3">
                                <div className="col-lg-7">
                                    <h1>Cool Dude Headphone
                                    </h1>
                                    <p>This is the best headphone in the world for people who just want to waste time in
                                        front of funky world.</p>
                                    <h1>$420</h1>
                                    <button className="mt-3 btn btn-color text-white"><h5>Buy Now</h5></button>
                                </div>
                                <div className="col-lg-5">
                                    <img src={banner1} className="d-block w-100 carousel-img mt-md-5" alt="..." />
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex align-items-center bg-gradient py-3">
                                <div className="col-lg-7">
                                    <h1>Mega LCD TV For Sports
                                    </h1>
                                    <p>This is the best tv in the world for people who just want to waste time in front of
                                        tv.
                                    </p>
                                    <h1>$1200</h1>
                                    <button className="mt-3 btn btn-color text-white"><h5>Buy Now</h5></button>
                                </div>
                                <div className="col-lg-5 pt-3">
                                    <img src={banner2} className="d-block w-100 carousel-img mt-md-3" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex align-items-center bg-gradient py-3">
                                <div className="col-lg-7">
                                    <h1>X-Box for your living room
                                    </h1>
                                    <p>This is the best x-box in the world for people who just want to waste time in front
                                        of fake sports.

                                    </p>
                                    <h1>$600</h1>
                                    <button className="border mt-3 btn btn-color text-white"><h5>Buy Now</h5></button>
                                </div>
                                <div className="col-lg-5">
                                    <img src={banner3} className="d-block w-100 carousel-img " alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Banner;