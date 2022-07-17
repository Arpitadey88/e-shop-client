import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../images/photo.jfif';
import banner2 from '../../../images/banner3.jpg';
import banner3 from '../../../images/banner4.jpg';
import './Banner.css';

const Banner = () => {

    const navigate = useNavigate();
    useEffect(() => {
        document.title = "E-Shop"
    }, []);

    return (
        <div className='pt-md-5' id='banner'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4500">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block hero-img" alt="..." />
                        <div className="carousel-caption row d-flex justify-content-between align-items-center">
                            <div className="col-md-6 col-12">
                                <h1 className="hero-heading">SHOP WISE WITH PRICE &amp; COMPARISON</h1>
                            </div>
                            <div className="col-md-6 col-12">
                                <button onClick={() => navigate("/products")} className="carousel-btn">Find out More</button>
                            </div>
                            <div className="row">

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block hero-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-8 col-12">
                                    <h1 className="hero-heading">MEN &amp; WOMEN EXCLUSIVE COLLECTIONS</h1>
                                </div>
                                <div className="col-md-4 col-12">
                                    <button onClick={() => navigate("/products")} className="carousel-btn ">Find out More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block hero-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-8 col-12">
                                    <h1 className="hero-heading">DISCOVER &amp; <br /> BUY MORE <br /> IN LOW COST</h1>
                                </div>
                                <div className="col-md-4 col-12">
                                    <button onClick={() => navigate("/products")} className="carousel-btn">Find out More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;