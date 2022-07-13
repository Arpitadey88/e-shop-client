import { useEffect, useState } from 'react';
import Items from '../Pages/Home/Items/Items';

const useData = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-tor-42417.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <Items data = {products}/>
    );
};

export default useData;