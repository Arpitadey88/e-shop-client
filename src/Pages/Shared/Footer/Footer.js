import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <div style={{backgroundColor: '#CFD2CF'}}>
            <div className="container pt-2 pb-0">
                <hr />
                <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col border-0">
                        <h4 className="fw-bold">Company</h4>
                        <h6>About</h6>
                        <h6>General</h6>
                    </div>
                    <div className="col border-0">
                        <h4 className="fw-bold">Explore</h4>
                        <h6>FAQ</h6>
                        <h6>Spin To Win</h6>
                        <h6>Leader Board</h6>
                    </div>
                    <div className="col border-0">
                        <h4 className="fw-bold">Help</h4>
                        <h6>Support Center</h6>
                        <h6>Payment Sequrity</h6>
                        <h6>Privacy Policy</h6>
                    </div>
                    <div className="col border-0">
                        <h4 className=" fw-bold">Terms and Conditions</h4>
                        <form className="row g-3 pt-1">
                            <div className="col-auto">
                                <input type="email" className="form-control text-secondary fw-bold border-0 w-75"
                                    id="inputPassword2" placeholder="Enter Email" aria-label="Search" />
                            </div>
                        </form>
                    </div>
                </div>
                <hr />

                <div className="text-center">
                    <div className="social-links d-flex align-items-center justify-content-center">
                        <a href className="linkedin"><i className="fab fa-linkedin"></i></a>
                        <a href className="twitter"><i className="fab fa-twitter"></i></a>
                        <a href className="facebook"><i className="fab fa-facebook"></i></a>
                        <a href className="instagram"><i className="fab fa-instagram"></i></a>

                    </div>
                    <p><small><span className="text-secondary fw-bold">Copyright © All Rights Reserved by</span> <span
                        className=" fw-bold">e-shop</span></small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;