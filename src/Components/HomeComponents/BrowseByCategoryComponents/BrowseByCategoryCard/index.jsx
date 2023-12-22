import React from "react";
import "./index.scss";

function BrowseByCategoryCard({ img, categoryText }) {
  return (
    <div className="browseByCategoryCard">
      <i className={img}></i>
      <p>{categoryText}</p>
    </div>
  );
}

export default BrowseByCategoryCard;
