import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//jklfds
import React from 'react';
import './ReviewOrders.css'
const ReviewOrders = ({product, handleRemoveItem}) => {
    const {id, img, name, quantity, price, shipping} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>price/piece: ${price}</small></p>
                    <p><small>Shipping Charge: ${shipping}</small></p>
                </div>
                <div className='delete-item'>
                    <button onClick={()=> handleRemoveItem(id)} className='button-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrders;