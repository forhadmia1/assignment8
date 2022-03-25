import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([])
    const [saveItem,setSaveItem] = useState([])
// fetch data from file
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
// add to cart functionality
    const addToCart=(product)=>{
        setSaveItem([...saveItem,product])
    }
// handle choose again btn
    const resetCart=()=>{
        setSaveItem([])
    }
//handle choose one btn
    const [selectedItem,setSelectedItem]= useState({});
    const chooseOne=()=>{
        const randomNum= Math.floor(Math.random()*saveItem.length);
        setSelectedItem(saveItem[randomNum]);
        document.querySelector('.selected-container').style.display='block';
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
                    <h2>Selected Headphones</h2>
                    <div>
                        {
                            saveItem.map(item=><Cart key={item.id} item={item}></Cart>)
                        }
                    </div>
                    <button onClick={chooseOne} className='cart-btn'>Choose 1 for me</button>
                    <br />
                    <button onClick={resetCart} className='cart-btn'>Choose again</button>
                </div>
                <div className='chooseOne-container'>
                    <h2>Selected Item</h2>
                    <div className="selected-container">
                        <div className='selected-item'>
                            <img src={selectedItem?.picture} alt="" />
                            <h3>{selectedItem?.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;