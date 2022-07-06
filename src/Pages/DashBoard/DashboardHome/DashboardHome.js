import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className='mt-5 text-center'>
            <h1 style={{color: '#1E3163'}}> Welcome to Your Dashboard {" "} <br />
                <span className="text-info">{user.displayName}</span></h1>
        </div>
    );
};

export default DashboardHome;