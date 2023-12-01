import React from "react";
 import "./News.css";

function News({coin}) {
    return (
        <div className="caart">
          <img src={coin.iconUrl}></img>
          {/* <p style={{width:'200px' , height:'100px'}}> {coin.iconUrl}</p> */}
              <div className="total">{coin.name}</div>
              <p className="min">{typeof coin.price === 'number' ? coin.price.toFixed(5) : parseFloat(coin.price).toFixed(5)}$$</p>
              <p className="raank">{coin.rank}</p>
              <p className="coinn">{coin.rank}</p>
    
            
            </div>
             )
            }
             export default News;