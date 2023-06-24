import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss";
import "./Heropage.scss";
import Category from "../Category/Category";
import pattern from "../../assets/home/desktop/pattern-circles.svg";
import speaker from "../../assets/home/desktop/image-speaker-zx9.png";
import speakerz7 from "../../assets/home/desktop/image-speaker-zx7.jpg";
import yx1earphone from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Bestgear from "./Bestgear";

function Home() {
  return (
    <div className="tt-main-wrapper">
      <Header />
      <div className="hero">
        <div className="hero-content">
          <h7>NEW PRODUCT</h7>
          <h1>
            XX99 Mark II <br />
            Headphones
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional
            <br />
            build quality made for the passionate music
            <br /> enthusiast.
          </p>
          <button>See Product</button>
        </div>
      </div>
      <Category />
      <div className="pattern-circle">
        <img className="circle" src={pattern} alt="" />
        <img className="thumbnail-speaker" src={speaker} alt="" />
        <div className="z9-speaker">
          <h1>
            ZX9 <br />
            SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are
            <br /> phenomenally built to deliver truly remarkable
            <br /> sound.
          </p>
          <button>see product</button>
        </div>
      </div>
      <div className="z7-speaker">
        <img className="z7-speaker-thumbnail" src={speakerz7} alt="" />
        <div className="z7-content">
          <h4>ZX7 SPEAKER</h4>
          <button>see product</button>
        </div>
      </div>
      <div className="yx1-earphone">
        <img src={yx1earphone} alt="" />
        <div className="yx1-earphone-content">
          <div className="yx1-earphone-inside">
            <h4>YX1 EARPHONES</h4>
            <button>see product</button>
          </div>
        </div>
      </div>
      <Bestgear />
      <Footer />
    </div>
  );
}

export default Home;
