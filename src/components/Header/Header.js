import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="headerContainer">
      <div classNaame="logo">
        {/* {<h1 onClick={"/"}>Logo</h1>} */}
        <img onClick = {() => navigate("/")}src =" https://topliste.rs/wp-content/uploads/2020/05/ethereum-3818348_1920.jpg" />
      </div>
      <div className="links">
        <h2 onClick={() => navigate("/crypto")}>Crypto</h2>
        <h2 onClick={() => navigate("/exchanges")}>Exchanges</h2>
        <h2 onClick={() => navigate("/news")}>News</h2>
      </div>
    </div>
  );
}

export default Header;
