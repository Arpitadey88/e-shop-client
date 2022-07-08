import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mysterious-tor-42417.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
        console.log(products);
    }, [])
    return (
        <div className='container mt-3 product-bg' id='products'>
            <h2 className="text-center pt-md-5">Our Latest Products </h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4 mx-1 py-md-5 py-2">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}>
                    </Product>)
                }
            </div>
        </div>
    )
};

export default Products;