import React, { createContext } from 'react';
// import useCart from '../../hooks/useCart';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    let allContexts = useFirebase();
    // const {qut, setQut} = useCart();
    // allContexts = {...useFirebase, qut, setQut}
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;