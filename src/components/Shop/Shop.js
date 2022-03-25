import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='Product-container'>
                {
                    products.map(product=> <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div>
                <div className="cart-container">
                    <h2>Selected Item</h2>
                    <div>

                    </div>
                    <button className='cart-btn'>Choose 1 for me</button>
                    <br />
                    <button className='cart-btn'>Choose again</button>

                </div>
            </div>
        </div>
    );
};

export default Shop;