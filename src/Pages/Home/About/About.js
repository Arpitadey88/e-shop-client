import React from 'react';
import image1 from '../../../images/shop.png';
import image2 from '../../../images/cart.png';
import image3 from '../../../images/free-ship.png';
import './About.css';


const About = () => {
    return (
        <div className="py-2 container-fluid">
            <div className="card-group mx-md-5">
                <div style={{ height: '150px' }} className="card mb-3 border border-5 border-secondary">
                    <div className="row my-3 px-2 ">
                        <div className="col-md-4 w-25">
                            <img  style={{ height: '100px' }} src={image1} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-8 w-75">
                            <h3 className="text-secondary"><b>COOL</b></h3>
                            <h4 style={{ color: 'orange' }}><b>CATEGORIES</b></h4>
                            <h5 className="text-secondary">FOR MEN & WOMEN</h5>

                        </div>
                    </div>
                </div>

                <div style={{ height: '150px' }} className="card mb-3  rounded-2  border border-5 border-warning mx-3">
                    <div className="row my-3">
                        <div className="col-md-4 w-25">
                            <img  style={{ height: '100px' }} src={image2} className="img-fluid mx-2" alt="..." />
                        </div>
                        <div className="col-md-8 w-75">

                            <h3 className="text-secondary"><b>SAVE UPTO</b></h3>
                            <h4 style={{ color: 'orange' }}><b>40% OFF</b></h4>
                            <h5 className="text-secondary">UNTILL STOCKS LAST</h5>

                        </div>
                    </div>
                </div>

                <div style={{ height: '150px' }} className="card mb-3 border border-5 border-secondary">
                    <div className="row my-3 ">
                        <div className="col-md-4 w-25">
                            <img  style={{ height: '100px' }} src={image3} className="img-fluid mx-2" alt="..." />
                        </div>
                        <div className="col-md-8 w-75">
                            <h3 className="text-secondary"><b>FREE SHIPPING</b></h3>
                            <h4 style={{ color: 'orange' }}> <b>OVER $199</b></h4>
                            <h5 className="text-secondary">ON ALL ORDERS</h5>                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default About;