import React from "react";
import "./header.css";
import {useNavigate}from "react-router-dom";
function Header() {
    const navigate=useNavigate();
  return (
    <div className="headerContainer">
      <div classNaame="logo">
        {/* <h1>Logo</h1> */}
        <img src=" https://topliste.rs/wp-content/uploads/2020/05/ethereum-3818348_1920.jpg" />
      </div>
        <div className="links">
          <h2>All products</h2>
          <h2>About</h2>
          <h2>Contact us</h2>
        </div>
    </div>
  );
}

export default Header;
