import React from "react";
import BrowseByCategoryCard from "../BrowseByCategoryCard";
import './index.scss'

function BrowseByCategoryCards() {
  return (
    <div className="browseByCategoryCards">
      <BrowseByCategoryCard
        categoryText={"Phones"}
        img={"fa-solid fa-mobile-screen-button"}
      />
      <BrowseByCategoryCard
        categoryText={"Computers"}
        img={"fa-solid fa-desktop"}
      />
      <BrowseByCategoryCard
        categoryText={"SmartWatch"}
        img={"fa-solid fa-clock"}
      />
      <BrowseByCategoryCard
        categoryText={"Camera"}
        img={"fa-solid fa-camera"}
      />
      <BrowseByCategoryCard
        categoryText={"HeadPhones"}
        img={"fa-solid fa-headphones"}
      />
      <BrowseByCategoryCard
        categoryText={"Gaming"}
        img={"fa-solid fa-gamepad"}
      />
    </div>
  );
}

export default BrowseByCategoryCards;
