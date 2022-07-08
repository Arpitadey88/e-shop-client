import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Table } from "react-bootstrap";
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';

const OrderDetails = () => {
    // const {qut, setQut} = useCart();
    const Swal = require("sweetalert2");
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch(`https://mysterious-tor-42417.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storedCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find((product) => product._id === key);
                if (addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCarts(storedCart);
        }
    }, [products]);

    for (const product of carts) {
        const total = parseInt(product.price) * parseInt(product.quantity);
        product.total = total;
    }

    let totalCost = 0;
    let tax = 0;
    for (const product of carts) {
        totalCost = totalCost + product.total;
        tax = parseFloat((totalCost * 0.1).toFixed(2));
    }
    const grandTotal = totalCost + tax;

    const handleRemove = (id) => {
        Swal.fire({
            title: "You want to cancel this product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    removeFromDb(id);
                }
            })
            .finally(() => {
                window.location.reload();
            });
    }
    return (
        <div className="container py-5">
            <div className='row mt-md-5'>
                <div className='col-md-8 col-12'>
                    <Table responsive bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th className='px-3'>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {carts.length ? (
                            <tbody>
                                {carts?.map((pd) => (
                                    <tr key={pd._id}>
                                        <td>
                                            <img width="100" height="100" src={pd.image} alt="" />
                                        </td>
                                        <td>
                                            <p className="text-dark">{pd.title}</p>
                                        </td>
                                        <td>
                                            <p className="text-dark"> {pd.price}</p>
                                        </td>

                                        <td>
                                            <p>{pd.quantity}</p>
                                        </td>
                                        <td>
                                            <p className="text-dark">$ {pd.total}</p>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => handleRemove(pd._id)}
                                                variant="primary"
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) :
                            <tr>
                                <td colSpan="4" className="text-center fw-bold">
                                    <h1 className=''>Ooops your cart is empty !!</h1>
                                    <h3>You didn't add any product yet!!</h3>
                                    <h5 className="google-font my-1">please see our latest offer products 🙂!</h5>
                                </td>
                            </tr>                   
                        }
                    </Table>
                </div>
                <div className='col-md-4 col-12'>
                    <h4 className="text-black ms-4">Cart Totals</h4>
                    <Row style={{backgroundColor: '#EEEEEE'}} className="text-dark d-flex justify-content-center">
                        <Col xs={5} md={5} className="py-3 border border-secondary">
                            Subtotal
                        </Col>
                        <Col xs={5} md={5} className="py-3 border border-secondary">
                            $ {totalCost}
                        </Col>
                        <Col xs={5} md={5} className="py-3 border border-secondary">
                            Tax
                        </Col>
                        <Col xs={5} md={5} className="py-3 border border-secondary">
                            $ {tax}
                        </Col>
                        {/* <Col xs={12} md={5} className="py-3 border text-white">
                            Shipping
                        </Col>
                        <Col xs={12} md={5} className="py-3 border text-white">
                            $ {shipping}
                        </Col> */}
                        <Col xs={5} md={5} className="py-3 border border-secondary">
                            GrandTotal
                        </Col>
                        <Col xs={5} md={5} className="py-3 border border-secondary">
                            $ {grandTotal}
                        </Col>
                    </Row>
                    {carts.length ? (
                        <Button
                            variant="primary"
                            className="ms-4 text-white mt-3 "
                            onClick={() => navigate("/booking")}
                        >
                            Proceed to checkout
                        </Button>
                    ) :
                        <tr>
                            <td colSpan="4" className="text-center fw-bold">
                                <p>No orders Yet</p>
                            </td>
                        </tr>
                    }
                </div>
            </div>

        </div>
    );
};

export default OrderDetails;