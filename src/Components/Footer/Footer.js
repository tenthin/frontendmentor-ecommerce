import React from "react";
import "./Footer.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-menu">
        <img src={logo} alt="" />
        <ul>
          <li>home</li>
          <li>headphones</li>
          <li>speakers</li>
          <li>earphones</li>
        </ul>
      </div>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team <br />
        of music lovers and sound specialists who are devoted to helping you get
        the <br />
        most out of personal audio. Come and visit our demo facility - we’re
        open 7<br /> days a week.
      </p>
      <div className="social-media">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>
      <p>Copyright 2021. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
