import  { useEffect, useState }  from 'react';

const useSearch = () => {
    
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-tor-42417.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {setProducts(data);
                setDisplayProducts(data);
            });
        // console.log(products);
    }, []);

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    return  [displayProducts, setDisplayProducts, handleSearch];
};

export default useSearch;