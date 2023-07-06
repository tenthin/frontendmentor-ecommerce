import React from "react";
import "./Category.scss";
import Header from "../Header/Header";
import xx99mark2 from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99mark1 from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import Category from "./Category";
import Bestgear from "../Home/Bestgear";
import Footer from "../Footer/Footer";

function Headphones() {
  return (
    <div className="items">
      <Header />
      <h2 className="title-items">headphones</h2>
      <div className="item">
        <div className="first-newproduct-item">
          <img src={xx99mark2} alt="" />
          <div className="first-newproduct-item-content">
            <span>new product</span>
            <h2>
              XX99 Mark II
              <br />
              Headphones
            </h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine <br />
              audio. It redefines your premium headphone experience by <br />
              reproducing the balanced depth and precision of studio-quality
              <br /> sound.
            </p>
            <button>see product</button>
          </div>
        </div>

        <div className="left-img-item">
          <img src={xx99mark1} alt="" />
          <div className="left-img-item-content">
            <h2>
              XX99 Mark I<br />
              Headphones
            </h2>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I
              <br /> offers detailed and accurate audio reproduction for <br />
              audiophiles, mixing engineers, and music aficionados alike in
              <br /> studios and on the go.
            </p>
            <button>see product</button>
          </div>
        </div>

        <div className="right-img-item">
          <img src={xx59} alt="" />
          <div className="right-img-item-content">
            <h2>
              XX59
              <br />
              Headphones
            </h2>
            <p>
              Enjoy your audio almost anywhere and customize it to your <br />
              specific tastes with the XX59 headphones. The stylish yet <br />
              durable versatile wireless headset is a brilliant companion at
              <br /> home or on the move.
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

export default Headphones;
