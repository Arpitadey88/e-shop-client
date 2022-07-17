import React, { createContext } from 'react';
import useCart from '../../hooks/useCart';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    let allContexts = useFirebase();
    const {displayCart, setDisplayCart} = useCart();
    // allContexts = {...useFirebase, displayCart, setDisplayCart}
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;