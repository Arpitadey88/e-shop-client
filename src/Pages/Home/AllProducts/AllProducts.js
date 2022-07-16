import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-tor-42417.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
        // console.log(products);
    }, []);

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    return (
        <div className='container my-5 product-bg text-center ' id='products'>
            <h2 className="pt-md-5 dancingFont fw-bold">Our Products </h2>

            <div className="search-container w-25 border rounded-1 py-1 ms-auto me-5 my-md-4">
                <input onChange={handleSearch} placeholder="&#xF002; Search" className="form-control w-100 border-0 fa" type="search" aria-label="Search" />
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4 mx-1 py-2">
                {
                    displayProducts.map(product => <Product
                        key={product.id}
                        product={product}>
                    </Product>)
                }
            </div>
        </div>
    )
};

export default AllProducts;