import React from "react";
import { Table } from "react-bootstrap";

const Orders = (props) => {
  let count = 0;
  const orders = props.order;
  console.log(orders);
  return (

    <div>
      <Table responsive striped bordered hover variant="dark">
        {/* table header */}
        <thead>
          <tr className="text-center">
            <th className="fs-6 text-white">Sl</th>
            <th className="fs-6 text-white">Customer</th>
            <th className="fs-6 text-white">Product</th>
            <th className="fs-6 text-white">Item</th>
            <th className="fs-6 text-white">Price</th>
            <th className="fs-6 text-white">Status</th>
            <th className="fs-6 text-white">Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* looping data */}

          {props?.order?.order?.map((od) => (
            <tr key={od._id} className="text-center">
              <td className="fs-6 text-white ">{++count}</td>
              <td className="fs-6 text-white ">{orders.email}</td>

              <td className="fs-6 text-white ">{od.title}</td>
              <td className="fs-6 text-white ">{od.quantity}</td>
              <td className="fs-6 text-white ">{parseFloat(od.quantity) * parseFloat(od.price)}</td>
              <td className="fs-6 text-white ">{orders?.status}</td>
              <td className="fs-6 text-success">Paid</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
