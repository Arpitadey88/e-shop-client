import { useEffect, useState } from 'react';

const Item = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(4)));
  }, [])

  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4 mx-1 py-2">
      <Item data ={products}/>
    </div>
  )
};

export default Item;