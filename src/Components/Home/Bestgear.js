import React from "react";
import bestgear from "../../assets/shared/desktop/image-best-gear.jpg";

function Bestgear() {
  return (
    <div className="best-gear">
      <div className="best-gear-content">
        <h2>
          Bringing you the
          <br />
          <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier
          <br />
          store for high end headphones, earphones, speakers, and audio
          <br />
          accessories. We have a large showroom and luxury
          <br /> demonstration rooms available for you to browse and <br />
          experience a wide range of our products. Stop by our store to <br />
          meet some of the fantastic people who make Audiophile the <br />
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={bestgear} alt="" />
    </div>
  );
}

export default Bestgear;
