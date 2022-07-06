import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { Container} from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className='mt-5 pt-4 rounded-3'>
            <Container>
                <div className=" row rounded-3">
                    <div style={{
                        backgroundColor: 'whiteSmoke'
                    }} className="col-md-3 col-sm-2">
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={"/dashboard"}><h5 className='ms-md-2 pt-4 pb-3'>Dashboard</h5></Link>
                        <hr />
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/myOrders`}><h5 className='ms-md-2 py-3'>My Orders</h5></Link>
                        <hr />
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/manageOrders`}><h5 className='ms-md-2 py-3'>Manage Orders</h5></Link>
                        <hr />
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/manageProducts`}><h5 className='ms-md-2 py-3'>Manage Products</h5></Link>
                        <hr />
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/addProduct`}><h5 className='ms-md-2 py-3'>Add New Product</h5></Link>
                        <hr />
                    </div>

                    <div style={{
                        backgroundColor: 'whiteSmoke', borderLeft: '2px solid #D3DEDC'
                    }} className="col-md-9 col-sm-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Dashboard;