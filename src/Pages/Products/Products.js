import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
        console.log(products);
    }, [])
    return (
        <div className='container mt-3 '>
            <div className="product-bg" id='products' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
            <h3 className="text-center pt-md-4">products</h3>
                <div className="row card-box py-md-3 py-3 mx-auto">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}>
                        </Product>)
                    }
                </div>
            </div>

        </div>
    )
};

export default Products;