import React from "react";
import "./Category.scss";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

function Category() {
  const categories = [
    {
      id: 1,
      img: headphones,
      name: "headphones",
      height: 160,
      // width: 122.95,
    },
    {
      id: 2,
      img: speakers,
      name: "speakers",
      height: 146,
      // width: 121.49,
    },
    {
      id: 3,
      img: earphones,
      name: "earphones",
      height: 126,
      // width: 125,
    },
  ];

  return (
    <div className="tt-contentwrapper">
      <div className="thumbnail">
        {categories.map((category) => (
          <div key={category.id} className="home-thumbnail">
            <img
              src={category.img}
              alt={category.name}
              width={category.width}
              height={category.height}
            />
            <div className="thumbnail-card">
              <h6>{category.name}</h6>
              <p>shop</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
