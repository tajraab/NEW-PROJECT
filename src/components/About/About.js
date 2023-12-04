import React from "react";
 import "./About.css";

function About({coin}) {
    return (
        <div className="my-card">
          <img src={coin.iconUrl}></img>
          {/* <p style={{width:'200px' , height:'100px'}}> {coin.iconUrl}</p> */}
              <div className="paragraph-name">{coin.name}</div>
              <p className="paragraph-price">{typeof coin.price === 'number' ? coin.price.toFixed(5) : parseFloat(coin.price).toFixed(5)}$</p>
              <p className="paragraph-rank">{coin.rank}</p>
    
            
            </div>
             )
            }
             export default About;