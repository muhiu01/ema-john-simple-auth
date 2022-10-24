import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewOrders from '../ReviewOrders/ReviewOrders';

const Orders = () => {
    const { initialCart} = useLoaderData()
    const [cart, setCart] = useState(initialCart)

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    const handleRemoveItem = (id) =>{
       const remaining = cart.filter(product => product.id !== id);
       setCart(remaining);
       removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='Orders-container'>
                {
                    cart.map(product=> <ReviewOrders
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewOrders>)
                }
            </div>
            <div className='cart-container'>
                <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;