import React from 'react';
import Products from '../../Products/Products';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Reviews from '../Reviews/Reviews';
import SaleOff from '../SaleOff/SaleOff';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Products/>
            <SaleOff/>
            <Blog/>
            <Reviews/>
        </div>
    );
};

export default Home;