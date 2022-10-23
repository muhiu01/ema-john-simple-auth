import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img ? img : 'Image Not Available'} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Rating: {ratings}</small></p>
                <p><small>Seller: {seller}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-cart-button'>
                <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;