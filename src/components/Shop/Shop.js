import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([])
    const [saveItem,setSaveItem] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToCart=(product)=>{
        setSaveItem([...saveItem,product])
    }

    return (
        <div className='shop-container'>
            <div className='Product-container'>
                {
                    products.map(product=> <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div>
                <div className="cart-container">
                    <h2>Selected Item</h2>
                    <div>
                        {
                            saveItem.map(item=><Cart key={item.id} item={item}></Cart>)
                        }
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