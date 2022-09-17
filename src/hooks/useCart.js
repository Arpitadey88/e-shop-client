import { useEffect, useState } from 'react';
import { getStoredCart } from '../Pages/utilities/fakedb';

const useCart = () => {
    const saveCart = getStoredCart();
    const [displayCart, setDisplayCart] = useState();

    useEffect(() => {
        let quantity = null;
        for (const key in saveCart) {
            quantity += parseInt(saveCart[key]);
        }
        setDisplayCart(quantity);
    }, [saveCart, displayCart]);
    return {saveCart, displayCart, setDisplayCart}
    ;
};

export default useCart;