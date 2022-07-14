import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-tor-42417.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data.slice(0, 4));
            });
        // console.log(products);
    }, []);

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        // setDisplayProducts(matchedProducts);
        if (searchText === '') {
            setDisplayProducts(products.slice(0, 4));
        } else {
            setDisplayProducts(matchedProducts);
        }
    }


    return (
        <div className='container my-5 product-bg' id='products'>
            <div className="row d-flex align-items-center justify-content-between  mx-auto py-md-3">
                <div className="col-md-6">
                    <h2 className=" ">Product Categoris </h2>
                </div>
                <div className="col-md-6 search-container w-25 border rounded-1 w-25 rounded-1 me-3 py-1 px-0">
                    <input onChange={handleSearch} placeholder="&#xF002; Search" className="form-control w-100 border-0 fa mx-0" type="search" aria-label="Search" />
                </div>
            </div>
            {displayProducts.length ?
                (
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4 mx-1 py-2">
                        {
                            displayProducts.map(product => <Product
                                key={product.id}
                                product={product}>
                            </Product>)
                        }
                    </div>
                )
                :
                (
                    <div className='text-center'>
                        <h6>No search history</h6>
                    </div>
                )}
        </div>
    )
};

export default Products;