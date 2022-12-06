import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Search.css';

const Search = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('https://e-shop-server-w0fd.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data.slice(0, 0));
            });
        // console.log(products);
    }, []);

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));

        // console.log(matchedProducts.length);
        setDisplayProducts(matchedProducts);
    }
    return (
        <div className='ms-5 mt-5'>
            <form className="d-flex" role="search">
                <input onChange={handleSearch} placeholder="&#xF002; Search" className="form-control w-100 border-0 fa" type="search" aria-label="Search" />
            </form>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4 mx-1 py-2">
                {
                    displayProducts.map(product => <Product
                        key={product.id}
                        product={product}>
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Search;