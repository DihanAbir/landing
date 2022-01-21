import React from "react";
import Carousel from "react-elastic-carousel";

import space from "../assets/Space1.jpg";
import greet from "../assets/GreetCard1.jpg";
import Party from "../assets/Party.jpg";

const images = [
  {
    url: space,
    title: "Immortalishing moments2...",
  },
  {
    url: Party,
    title: "Immortalishing moments2...",
  },
  {
    url: greet,
    title: "Immortalishing moments3...",
  },
  {
    url: Party,
    title: "Immortalishing moments4...",
  },
];

function Banner() {
  var settings = {
    itemsToShow: 1,
    showArrows: false,
  };
  return (
    <Carousel {...settings}>
      {images.map((image, index) => (
        <Item detils={image} />
        // <p>{image.title}</p>
      ))}
    </Carousel>
  );
}

export default Banner;

function Item({ detils }) {
  console.log(detils.title);
  return (
    <div className="banner">
      <img src={detils.url} alt={detils.url} />
      <p>{detils.title}</p>
    </div>
  );
}
