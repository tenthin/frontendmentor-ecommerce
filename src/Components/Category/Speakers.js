import React from "react";
import "./Category.scss";
import Header from "../Header/Header";
import zx9speaker from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7speaker from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import Category from "./Category";
import Bestgear from "../Home/Bestgear";
import Footer from "../Footer/Footer";

function Speakers() {
  return (
    <div className="items">
      <Header />
      <h2 className="title-items">Speakers</h2>
      <div className="item">
        <div className="first-newproduct-item">
          <img src={zx9speaker} alt="" />
          <div className="first-newproduct-item-content">
            <span>new product</span>
            <h2>
              ZX9
              <br />
              SPEAKER
            </h2>
            <p>
              Upgrade your sound system with the all new ZX9 active <br />{" "}
              speaker. It’s a bookshelf speaker system that offers truly
              <br /> wireless connectivity -- creating new possibilities for
              more
              <br /> pleasing and practical audio setups.
            </p>
            <button>see product</button>
          </div>
        </div>

        <div className="left-img-item">
          <img src={zx7speaker} alt="" />
          <div className="left-img-item-content">
            <h2>
              ZX7
              <br />
              SPEAKER
            </h2>
            <p>
              Stream high quality sound wirelessly with minimal loss. The ZX7{" "}
              <br />
              bookshelf speaker uses high-end audiophile components that <br />
              represents the top of the line powered speakers for home <br /> or
              studio use.
            </p>
            <button>see product</button>
          </div>
        </div>
      </div>
      <Category />
      <Bestgear />
      <Footer />
    </div>
  );
}

export default Speakers;
