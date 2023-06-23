import React from "react";
import "./Header.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";

function Header() {
  return (
    // <div className="tt-fullwidth">
    <div className="header">
      <div className="header-menu">
        <img className="logo" src={logo} alt="" />
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
        </div>
        <img className="cart" src={cart} alt="" />
      </div>
      <div className="line"></div>
    </div>
    // </div>
  );
}

export default Header;
