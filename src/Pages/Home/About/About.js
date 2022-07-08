import React from 'react';
import image1 from '../../../images/shop.png';
import image2 from '../../../images/cart.png';
import image3 from '../../../images/free-ship.png';
import Category from '../Category/Category';


const About = () => {
    return (
        <>
            <div className="pt-md-5  container-fluid">
                <div className="card-group mx-md-5">
                    <div style={{ height: '130px' }} className="card mb-3 border border-5 border-secondary w-100">
                        <div className="row my-3 px-2 ">
                            <div className="col-md-4 w-25">
                                <img style={{ height: '80px' }} src={image1} className="img-fluid" alt="..." />
                            </div>
                            <div className="col-md-8 w-75">
                                <h4 className="text-secondary"><b>COOL</b></h4>
                                <h5 style={{ color: 'orange' }}><b>CATEGORIES</b></h5>
                                <h6 className="text-secondary">FOR MEN &amp; WOMEN</h6>

                            </div>
                        </div>
                    </div>

                    <div style={{ height: '130px' }} className="card mb-3  rounded-2  border border-5 border-warning mx-md-3 w-100">
                        <div className="row my-3">
                            <div className="col-md-4 w-25">
                                <img style={{ height: '80px' }} src={image2} className="img-fluid mx-2" alt="..." />
                            </div>
                            <div className="col-md-8 w-75">

                                <h4 className="text-secondary"><b>SAVE UPTO</b></h4>
                                <h5 style={{ color: 'orange' }}><b>40% OFF</b></h5>
                                <h6 className="text-secondary">UNTILL STOCKS LAST</h6>

                            </div>
                        </div>
                    </div>

                    <div style={{ height: '130px' }} className="card mb-3 border border-5 border-secondary w-100">
                        <div className="row my-3 ">
                            <div className="col-md-4 w-25">
                                <img style={{ height: '80px' }} src={image3} className="img-fluid mx-2" alt="..." />
                            </div>
                            <div className="col-md-8 w-75">
                                <h4 className="text-secondary"><b>FREE SHIPPING</b></h4>
                                <h5 style={{ color: 'orange' }}> <b>OVER $299</b></h5>
                                <h6 className="text-secondary">ON ALL ORDERS</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Category></Category>
        </>
    );
};

export default About;