import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
    const {name,picture}=item;
    return (
        <div className='cart-item'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;