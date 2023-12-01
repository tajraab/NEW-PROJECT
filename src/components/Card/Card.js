import React from "react";
import "./Card.css";

function Card({ coin }) {
  return (
    <div className="card">
      <img src={coin.iconUrl}></img>
      {/* <p style={{width:'200px' , height:'100px'}}> {coin.iconUrl}</p> */}
      <div className="title">{coin.name}</div>
      <p className="price">$</p>
      <p className="rank">{coin.rank}</p>
    </div>
  );
}
export default Card;
