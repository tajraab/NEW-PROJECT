import React from "react";
 import "./Cart.css";

function Cart({coin}) {
    return (
        <div className="card">
          <img src={coin.iconUrl}></img>
          {/* <p style={{width:'200px' , height:'100px'}}> {coin.iconUrl}</p> */}
              <div className="title">{coin.name}</div>
              <p className="price">{typeof coin.price === 'number' ? coin.price.toFixed(5) : parseFloat(coin.price).toFixed(5)}$$</p>
              <p className="rank">{coin.rank}</p>
              <p className="rank">{coin.rank}</p>
    
            
            </div>
             )
            }
             export default Cart;