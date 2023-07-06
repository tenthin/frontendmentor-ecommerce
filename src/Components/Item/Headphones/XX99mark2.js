// import React from "react";
// import "../Item.scss";
// import mark2 from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
// import Header from "../../Header/Header";
// import Counter from "../../Counter";
// import { datas } from "../../../Data";

// function XX99mark2() {
//   return (
//     <>
//       <Header />
//       <div className="product">
//         <p>Go Back</p>
//         <div className="product-content">
//           <img src={mark2} alt="" />
//           <div className="product-info">
//             <span>new product</span>
//             <h2>
//               xx99 mark ii <br /> headphones
//             </h2>
//             <p>
//               The new XX99 Mark II headphones is the pinnacle of pristine <br />
//               audio. It redefines your premium headphone experience by <br />
//               reproducing the balanced depth and precision of studio-quality
//               <br /> sound.
//             </p>
//             <div>
//               <b>$ 2,999</b>
//             </div>
//             <div className="product-quantity">
//               <Counter />
//               <button>add to cart</button>
//             </div>
//           </div>
//         </div>
//         <div className="features">
//           <div className="features-left">
//             <h3>features</h3>
//             <p>
//               Featuring a genuine leather head strap and premium earcups, these
//               headphones deliver superior comfort for those who like to enjoy
//               endless listening. It includes intuitive controls designed for any
//               situation. Whether you’re taking a business call or just in your
//               own personal space, the auto on/off and pause features ensure that
//               you’ll never miss a beat.
//             </p>
//             <p>
//               The advanced Active Noise Cancellation with built-in equalizer
//               allow you to experience your audio world on your terms. It lets
//               you enjoy your audio in peace, but quickly interact with your
//               surroundings when you need to. Combined with Bluetooth 5. 0
//               compliant connectivity and 17 hour battery life, the XX99 Mark II
//               headphones gives you superior sound, cutting-edge technology, and
//               a modern design aesthetic.
//             </p>
//           </div>
//           <div className="features-right">
//             <h3>in the box</h3>
//             <span>1x</span>
//             <p>Headphone Unit</p>
//             <span>2x</span>
//             <p>Replacement Earcups</p>
//             <span>1x</span>
//             <p>User Manual</p>
//             <span>1x</span>
//             <p>3.5mm 5m Audio Cable</p>
//             <span>1x</span>
//             <p>Travel Bag</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default XX99mark2;

import React from "react";
import "../Item.scss";
import Header from "../../Header/Header";
import Counter from "../../Counter";
import { datas } from "../../../Data";
import mark2 from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

function XX99mark2() {
  const productData = datas.find(
    (data) => data.slug === "xx99-mark-two-headphones"
  );

  return (
    <>
      <Header />
      <div className="product">
        <p>Go Back</p>
        <div className="product-content">
          {/* <img src={productData.image.desktop} alt={productData.name} /> */}
          <img src={mark2} alt={productData.name} />
          <div className="product-info">
            {productData.new && <span>new product</span>}
            <h2>{productData.name}</h2>
            <p>{productData.description}</p>
            <div className="product-price">
              <b>$ {productData.price}</b>
            </div>
            <div className="product-quantity">
              <Counter />
              <button>add to cart</button>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="features-left">
            <h3>features</h3>
            <p>{productData.features}</p>
          </div>
          <div className="features-right">
            <h3>in the box</h3>
            {productData.includes.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item.quantity}x</span>
                <p>{item.item}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default XX99mark2;
