import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Dashboard.css';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth();
    return (
        <div className='mt-5 pt-4 rounded-3'>
            <Container>
                <div className="row rounded-3">
                    <div style={{ backgroundColor: 'whiteSmoke' }} className="col-md-3 col-sm-12 p-0 p-md-3">
                        <ul className="nav dash-nav">
                            {admin &&
                                <div>
                                    <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/manageOrders`}><h5 className='py-md-3'>Manage Orders</h5></Link>

                                    <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/manageProducts`}><h5 className='py-md-3'>Manage Products</h5></Link>

                                    <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/addProduct`}><h5 className='py-md-3'>Add New Product</h5></Link>

                                    <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/makeAdmin`}><h5 className='py-md-3'>Make Admin</h5></Link>
                                </div>
                            }
                            :
                            {!admin &&
                                <div>
                                <Link style={{ textDecoration: "none", color: '#1E3163' }} to={"/dashboard"}><h5 className='py-md-3'>Dashboard</h5></Link>

                                <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/myOrders`}><h5 className='py-md-3 me-md-5'>My Orders</h5></Link>

                                <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/addReview`}><h5 className='py-md-3'>Add Feedback</h5></Link>
                            </div>
                            }

                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: 'whiteSmoke', borderLeft: '3x solid #D3DEDC'
                    }} className="col-md-9 col-sm-12 dashboard-outlet">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Dashboard;