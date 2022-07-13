import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Container} from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
    const [toggleBar, setToggleBar] = useState(false);
    return (
        <div className='mt-5 pt-4 rounded-3'>
            <Container>
                <div className=" row rounded-3">
                    <div style={{
                        backgroundColor: 'whiteSmoke'
                    }} className="col-md-2 col-sm-12">
                        <ul className="nav dash-nav">
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={"/dashboard"}><h5 className='py-md-3'>Dashboard</h5></Link>
                        
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/myOrders`}><h5 className='py-md-3'>My Orders</h5></Link>
                        
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/manageOrders`}><h5 className='py-md-3'>Manage Orders</h5></Link>
                        
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/manageProducts`}><h5 className='py-md-3'>Manage Products</h5></Link>
                        
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/addProduct`}><h5 className='py-md-3'>Add New Product</h5></Link>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: 'whiteSmoke', borderLeft: '3x solid #D3DEDC'
                    }} className="col-md-10 col-sm-12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Dashboard;