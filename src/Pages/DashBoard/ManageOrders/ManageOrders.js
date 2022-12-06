import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import './ManageOrders.css';

const ManageOrders = () => {
  let count = 0;
  const Swal = require("sweetalert2");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://e-shop-server-w0fd.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "you will Cancel never back to many",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel order ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://e-shop-server-w0fd.onrender.com/deleteOrders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your order cancel successful",
              });
            }
          });
      }
    });
  };

  const handleStatusUpdate = (id) => {
    const status = {
      id: id,
      status: "approved",
    };
    fetch("https://e-shop-server-w0fd.onrender.com/orderStatusUpdate", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order approved successful",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      });
  };

  return (
    <Container fluid>
      <div className="d-flex justify-content-center  py-1">
        <h2>Manage All Orders</h2>
      </div>
      {orders.length ? (
        ""
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )}
      {orders.length ? (
        <Table responsive striped bordered hover variant="dark">
          {/* table header */}
          <thead>
            <tr className="text-center">
              <th className="fs-6 text-white">Sl</th>
              <th className="fs-6 text-white">UserName</th>
              <th className="fs-6 text-white">Order_ID</th>
              <th className="fs-6 text-white">Amount</th>
              <th className="fs-6 text-white">Payment</th>
              <th className="fs-6 text-white">Status</th>
              <th className="fs-6 text-white">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* looping data */}

            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="fs-6 text-white ">{++count}</td>
                <td className="fs-6 text-white ">{order.email}</td>
                <td className="fs-6 text-white ">{order._id.slice(20, 30)}</td>
                <td className="fs-6 text-white ">${parseFloat(order.order[0].price) * parseFloat(order.order[0].quantity)}</td>
                <td className="fs-6 text-white">
                  {order.payment ? "Unpaid" : "Paid"}
                </td>
                <td className="fs-6">
                  {order.status === "approved" ? (
                    "Approved"
                  ) : (
                    <button className="rmv-btn"
                      onClick={() => handleStatusUpdate(order._id)}
                    >
                      Approved
                    </button>
                  )}
                </td>
                <td className=" text-white ">
                  <button className="rmv-btn"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        ""
      )}
    </Container>
  );
};

export default ManageOrders;
