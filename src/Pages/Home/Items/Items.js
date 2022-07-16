import React, { useEffect, useState } from "react";
import SweetPagination from "sweetpagination";

const Items = () => {
  const [products, setProducts] = useState([]);
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  useEffect(() => {
    fetch('https://mysterious-tor-42417.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        // setCurrentPageData(products);
      });
  }, [])
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div>
      {currentPageData.map((product) => (
        <div>
          <h3>Item #{product}</h3>
        </div>
      ))}

      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={products}
        dataPerPage={8}
      />
    </div>
  );
};

export default Items;