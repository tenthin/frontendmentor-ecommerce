import React from "react";
import "./Category.scss";
import Header from "../Header/Header";
import yx1earphone from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import Category from "./Category";
import Bestgear from "../Home/Bestgear";
import Footer from "../Footer/Footer";
import Button from "../Button";

function Earphones() {
  return (
    <div className="items">
      <Header />
      <h2 className="title-items">Earphones</h2>
      <div className="item">
        <div className="first-newproduct-item">
          <img src={yx1earphone} alt="" />
          <div className="first-newproduct-item-content">
            <span>new product</span>
            <h2>
              YX1 WIRELESS
              <br />
              EARPHONES
            </h2>
            <p>
              Tailor your listening experience with bespoke dynamic drivers{" "}
              <br /> from the new YX1 Wireless Earphones. Enjoy incredible{" "}
              <br />
              high-fidelity sound even in noisy environments with its active
              <br />
              noise cancellation feature.
            </p>
            <Button />
          </div>
        </div>
      </div>
      <Category />
      <Bestgear />
      <Footer />
    </div>
  );
}

export default Earphones;
