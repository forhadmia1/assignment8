import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([])
    const [saveItem,setSaveItem] = useState([])
    const [display,setDisplay] = useState({display:'none'})
// fetch data from file
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
// add to cart functionality
    const addToCart=(product)=>{
        const exist= saveItem.find(item=>item.id===product.id);
        if(!exist){
            if(saveItem.length<4){
                setSaveItem([...saveItem,product])
            }else{
                alert('You have already added 4 item!')
            }
        }else{
            alert('Already exist the item!')
        }
        
    }
// handle choose again btn
    const resetCart=()=>{
        setSaveItem([])
        setDisplay({display:'none'})
    }
//handle delete item btn from cart
    const deleteItem=(id)=>{
        const remaining= saveItem.filter(item=> item.id!== id);
        setSaveItem(remaining)
    }

//handle choose one btn
    const [selectedItem,setSelectedItem]= useState({});
    const chooseOne=()=>{
        if(saveItem.length>0){
            const randomNum= Math.floor(Math.random()*saveItem.length);
            setSelectedItem(saveItem[randomNum]);
            setDisplay({display:'block'})
        }
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
                    <h2>Selected Cars</h2>
                    <div>
                        {
                            saveItem.map(item=><Cart key={item.id} item={item} deleteItem={deleteItem}></Cart>)
                        }
                    </div>
                    <button onClick={chooseOne} className='cart-btn'>Choose 1 for me</button>
                    <br />
                    <button onClick={resetCart} className='cart-btn'>Choose again</button>
                </div>
                <div className='chooseOne-container'>
                    <h2>Choose for you</h2>
                    <div className="selected-container" style={display}>
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