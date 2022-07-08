import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className="dashboard-bg">
            <h1 className='dashboard-caption'> Welcome to Your Dashboard {" "}
                <span className="text-info mx-auto">{user.displayName}</span></h1>
        </div>

    );
};

export default DashboardHome;