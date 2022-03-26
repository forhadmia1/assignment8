import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({item,deleteItem}) => {
    const {name,picture,id}=item;
    return (
        <div className='cart-item'>
            <div className="cart-info">
                <img src={picture} alt="" />
                <h3>{name}</h3>
            </div>
            <button onClick={()=>deleteItem(id)} className='delete-btn'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default Cart;