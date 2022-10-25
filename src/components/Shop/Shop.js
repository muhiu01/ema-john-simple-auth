import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const products = useLoaderData();
    const [tasks, setCart] = useState([]);

    useEffect(()=>{
        const storedCart = getStoredCart()
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    const handleAddToCart = (exerciseTask) =>{
        let newCart = [];
        const exists = tasks.find(task => task.id === exerciseTask.id )
        if(!exists){
            exerciseTask.quantity = 1;
            newCart = [...tasks, exerciseTask];
        }
        else{
            const rest = tasks.filter(product => product.id !== exerciseTask.id)
            exerciseTask.quantity = exerciseTask.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(exerciseTask.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart handleClearCart={handleClearCart} cart={tasks}>
                    <Link to={'/orders'}> <button>Review Order</button></Link>
                </Cart>
                
            </div>
        </div>
    );
};


export default Shop;