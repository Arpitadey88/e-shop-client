import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import img1 from '../../../images/vi.png';
import img2 from '../../../images/pp.png';
import img3 from '../../../images/mc.png';
import './BookingOrder.css';

const BookingOrder = () => {
  const Swal = require("sweetalert2");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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

  let totalCost = 0;
  let tax = 0;
  for (const pd of carts) {
    const total = parseInt(pd.price) * parseInt(pd.quantity);
    pd.total = total;
    totalCost = totalCost + pd.total;
    tax = parseFloat((totalCost * 0.1).toFixed(2));
  }
  const grandTotal = totalCost + tax;
  
  const onSubmit = (data) => {
    data.order = carts;
    data.status = "pending";
    fetch(`http://localhost:5000/addOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Confirmed Successfully",
          }).then((result) => {
            if (result.isConfirmed) {
              reset();
              clearTheCart();
              navigate("/dashboard/myOrders");
              window.location.reload();
            }
          });
        }
      });
  };
  return (
    <div className='container pt-4 mt-5 pb-2'>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12">
          <h2 className="text-center pb-2">Your Order</h2>
          <div className="card my-2 px-md-5 py-2">
            {carts?.map((pd) => (
              <div className="row py-3">
                <div className="col-md-6 col-4">
                  <img style={{ height: '90px', width: '120px' }} src={pd.image} alt="" />
                </div>
                <div className="col-md-6 col-8">
                  <h6>{pd.title}</h6>
                  <h6> Items: {pd.quantity}</h6>
                  <h6> Price: $ {pd.total}</h6>
                  <h6> Price inc Vat: $ {(parseFloat(pd.total)) + (parseFloat(pd.quantity) * parseFloat(pd.price) * 0.1)}</h6>

                </div>
              </div>
            ))}
          </div>
          <h5 className="text-center">Product total Cost : $ {grandTotal}</h5>
        </div>
        <div className="col-md-6 text-center">
          <h2>Fill up your information</h2>
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} />

            <input
              defaultValue={user.email}
              {...register("email", { required: true })}
            />

            <input required placeholder="Address" {...register("address")} />
            <input required placeholder="City" {...register("city")} />
            <input required type="number" placeholder="phone number" {...register("phone")} />
            {errors.exampleRequired && <span>This field is required</span>}
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Continue Order
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <h3 className="pt-3">Confirm Your Payment</h3>
                  <div className="modal-body">
                    <h5 className="py-2">Amount You have to Pay : ${grandTotal}</h5>
                    <div className="first-row ">
                      <div className="owner">
                        <h5>Owner</h5>
                        <div className="input-field">
                          <input type="text" required/>
                        </div>
                      </div>
                      <div className="cvv">
                        <h5>CVV</h5>
                        <div className="input-field">
                          <input type="password" required/>
                        </div>
                      </div>
                    </div>
                    <div className="second-row pt-md-3">
                      <div className="card-number">
                        <h5>Card Number</h5>
                        <div className="input-field">
                          <input type="text" required/>
                        </div>
                      </div>
                    </div>
                    <div className="third-row pt-4">
                      <div className="cards">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />

                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-confirm mx-5"> Confirm</button>
                  <div className="modal-footer d-flex">

                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingOrder;