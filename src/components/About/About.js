import React from "react";
 import "./About.css";

function About({coin}) {
    return (
        <div className="kartica">
          <img src={coin.iconUrl}></img>
          {/* <p style={{width:'200px' , height:'100px'}}> {coin.iconUrl}</p> */}
              <div className="naslov">{coin.name}</div>
              <p className="cena">{typeof coin.price === 'number' ? coin.price.toFixed(5) : parseFloat(coin.price).toFixed(5)}$</p>
              <p className="rang">{coin.rank}</p>
    
            
            </div>
             )
            }
             export default About;