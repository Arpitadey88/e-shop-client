import React, { useState } from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/eshop.png';
import { getStoredCart } from '../../utilities/fakedb';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const [toggleBar, setToggleBar] = useState(false);
    const saveCart = getStoredCart();
    console.log(saveCart);
    const [qut, setQut] = useState();

    useEffect(() => {
        let quantity = null;
        for (const key in saveCart) {
            quantity += parseInt(saveCart[key]);
        }
        setQut(quantity);
    }, [saveCart, qut]);
    return (
        <div className='header-bg fixed-top mb-5'>
            <nav className="navBar container ">
                <a className='ms-3 ms-md-1 logoName text-decoration-none' href="/"><span className='span-e'>e</span><span className='span-shop'>Shop</span></a>

                <ul className={toggleBar ? "navLinksToggle" : "navLinks"}
                    onClick={() => { setToggleBar(false) }}>
                    <Link to="/" className="link"><li className="lists">Home</li></Link>
                    <Link to="/about" className="link"><li className="lists">About</li></Link>
                    <Link to="/products" className="link"><li className="lists">Products</li></Link>
                    <Link to="/orderDetails" className="link"><li className="lists"><i className="bi bi-cart2 fs-5 fw-bold cart"></i> {" "}
                        <span className="cart text-decoration-none">{qut}</span>
                    </li></Link>
                    {
                        user?.email ?
                            <div className="user">
                                <div className="col">
                                    <li className="lists">{user?.displayName}</li></div>
                                <div className="col">
                                    <Link className='link' to="/dashboard"><li className="lists">Dashboard</li></Link>
                                </div>
                                <div className="col">
                                    <li className="lists"><button className='btn login-btn mb-4' onClick={logOut}> Logout</button></li>
                                </div>

                            </div>
                            :
                            <Link to="/login" className="lists"><li>Login</li></Link>
                    }

                </ul>
                <button className='toggler-icon'
                    onClick={() => setToggleBar(!toggleBar)}>
                    {toggleBar ? (<i className="fa fa-times"></i>)
                        :
                        (<i className="fa fa-bars"></i>)}
                </button>
            </nav>
        </div>
    );
};

export default Header;