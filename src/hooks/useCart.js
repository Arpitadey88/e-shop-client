import { useEffect, useState } from 'react';
import { getStoredCart } from '../Pages/utilities/fakedb';

const useCart = () => {
    const saveCart = getStoredCart();
    // console.log(saveCart);
    const [qut, setQut] = useState();

    useEffect(() => {
        let quantity = null;
        for (const key in saveCart) {
            quantity += parseInt(saveCart[key]);
        }
        setQut(quantity);
    }, [saveCart, qut]);
    return {qut, setQut}
    ;
};

export default useCart;