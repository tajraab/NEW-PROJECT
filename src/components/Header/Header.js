import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="headerContainer">
      <div classNaame="logo">
        {/* <h1>Logo</h1> */}
        <img src=" https://topliste.rs/wp-content/uploads/2020/05/ethereum-3818348_1920.jpg" />
      </div>
        <div className="links">
          <h3>All products</h3>
          <h3>About</h3>
          <h3>Contact us</h3>
        </div>
    </div>
  );
}

export default Header;
