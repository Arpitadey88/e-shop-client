import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const Swal = require("sweetalert2");

    const onSubmit = data => {
        console.log(data);
        axios.post('https://mysterious-tor-42417.herokuapp.com/addProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product added succesfully",
                    })
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <h1 className="text-center" style={{ color: '#1E3163' }}>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("image")}  placeholder="Enter Image Url" />
                <input {...register("title")} required placeholder="Title" />
                <input {...register("category")} required placeholder="Category" />
                <textarea {...register("description")} required placeholder="Description" />
                <input {...register("price")} type="number" required placeholder="Price" />
                <input {...register("rating")} required placeholder="Rating" />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
            {/* <div className="text-center">
                <Link to="/dashboard"><Button
                    style={{ backgroundColor: '#1E3163' }} className="mx-5 px-5 py-2 border-0">Go Dashboard</Button></Link>
            </div> */}
        </div>
    );
};

export default AddProduct;