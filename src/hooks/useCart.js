import { useEffect, useState } from 'react';
import { getStoredCart } from '../Pages/utilities/fakedb';
import useAuth from './useAuth';

const useCart = () => {
    const { user } = useAuth();
    const saveCart = getStoredCart();
    console.log(saveCart);
    const [displayCart, setDisplayCart] = useState();

    useEffect(() => {
        let quantity = null;
        for (const key in saveCart) {
            quantity += parseInt(saveCart[key]);
        }
        setDisplayCart(quantity);
    }, [saveCart, displayCart]);
    return {displayCart, setDisplayCart}
    ;
};

export default useCart;