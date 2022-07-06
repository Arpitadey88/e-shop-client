import React from 'react';
import Products from '../../Products/Products';
import About from '../About/About';
import Banner from '../Banner/Banner';
import SaleOff from '../SaleOff/SaleOff';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Products/>
            <SaleOff/>
        </div>
    );
};

export default Home;