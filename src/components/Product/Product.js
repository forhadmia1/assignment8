import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = ({product}) => {
    const {picture,price,name} = product;
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={picture} alt="" />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <p>Price: {price}</p>
            </div>
            <button className='card-btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart } /></button>
        </div>
    );
};

export default Product;