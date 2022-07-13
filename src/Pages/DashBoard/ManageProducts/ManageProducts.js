import React, { useState, useEffect } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";

const ManageProducts = () => {
  const Swal = require("sweetalert2");
  const [products, setProducts] = useState([]);
  let count = 0;
  useEffect(() => {
    fetch("https://mysterious-tor-42417.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete Product",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mysterious-tor-42417.herokuapp.com/deleteSingleProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product deleted successful",
              });
            }
          });
      }
    });
  };
  return (
    <Container fluid>
      <h2 style={{ color: '#1E3163' }} className="fs-3 fw-bold text-center">
        <i style={{ color: '#1E3163' }} class="fas fa-shopping-bag "></i> Product Information : {products.length}
      </h2>
      <hr className="mx-auto w-50 bg-dark"/>
      {products.length ? (
        <Table style={{ backgroundColor: '#06283D' }} responsive striped hover>
          {/* table header */}
          <thead>
            <tr className="text-center">
              <th className="fs-6 text-white">Sl</th>
              <th className="fs-6 text-white">Product</th>
              <th className="fs-6 text-white">Name</th>
              <th className="fs-6 text-white">Price</th>
              <th className="fs-6 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* looping data */}

            {products.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="fs-5 text-white ">{++count}</td>
                <td><img style={{ height: '50px', width: '70px' }} src={product.image} alt="" /></td>
                <td className="fs-6 text-white ">{product.title}</td>
                <td className="fs-6 text-white ">{product.price}</td>
                <td className="fs-6 text-white ">
                  <Button
                    variant="primary"
                    onClick={() => handleDelete(product._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )}
    </Container>
  );
};

export default ManageProducts;
