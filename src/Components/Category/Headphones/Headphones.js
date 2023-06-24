import React from "react";
import "./Headphones.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import xx99mark2 from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99mark1 from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59 from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import Category from "../Category";
import Bestgear from "../../Home/Bestgear";

function Headphones() {
  return (
    <div className="headphones">
      <Header />
      <h2 className="title-headphones">headphones</h2>
      <div className="headphones-item">
        <div className="xx99mark2">
          <img src={xx99mark2} alt="" />
          <div className="xx99mark2-content">
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

        <div className="xx99mark1">
          <img src={xx99mark1} alt="" />
          <div className="xx99mark1-content">
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

        <div className="xx59">
          <img src={xx59} alt="" />
          <div className="xx59-content">
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
