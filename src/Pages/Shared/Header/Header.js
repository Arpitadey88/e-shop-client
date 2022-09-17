import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import cartIcon from '../../../svg/shopping-cart-solid.svg';
// import { MdShoppingCart } from "react-icons/md";
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const [toggleBar, setToggleBar] = useState(false);
    const { displayCart } = useCart();
    return (
        <div className='header-bg fixed-top mb-5'>
            <nav className="navBar container ">
                <a className='ms-3 ms-md-1 logoName text-decoration-none dancingFont' href="/"><span className='span-e'>D'mod</span><span className='span-shop'>  shop</span></a>

                <ul className={toggleBar ? "navLinksToggle" : "navLinks"}
                    onClick={() => { setToggleBar(false) }}>
                    <Link to="/" className="link"><li className="lists">Home</li></Link>
                    <Link to="/about" className="link"><li className="lists">About</li></Link>
                    <Link to="/allProducts" className="link"><li className="lists">Products</li></Link>
                    <Link to="/orderDetails" className="link"><li className="lists d-flex cart-icon">
                        <img style={{height: '13px'}} className="mt-0" src={cartIcon} alt="" />
                        <span className="cart-text">{displayCart}</span>
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