import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const Swal = require("sweetalert2");

    const onSubmit = data => {
        console.log(data);
        axios.post('https://e-shop-server-w0fd.onrender.com/reviews', data)
            .then(res => {
                console.log(res);
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
        <div id="#review" className="add-review m-5" >
            <h3 className="text-center mt-2" style={{ color: '#111b36' }}>Please Give Your Feedback</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("name", { required: true })} placeholder="Your Name" />
                <textarea {...register("description")} placeholder="Give Feedback" />
                <input type="number" {...register("star", { min: 1, max: 5 })} placeholder="rating" />
                {/* <input {...register("description")} /> */}
                <input type="submit" />
            </form>
        </div >
    );
};

export default AddReview;