import React, { useRef } from "react";
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

const totalPages = Math.ceil(images.length / 1);
let resetTimeout;

function Banner() {
  const carouselRef = useRef(null);
  var settings = {
    itemsToShow: 1,
    showArrows: false,
    enableAutoPlay: true,
    enableMouseSwipe: false,
    infinityLoop: true,
    autoPlaySpeed: 5000,
  };
  return (
    <Carousel
      ref={carouselRef}
      {...settings}
      onNextEnd={({ index }) => {
        clearTimeout(resetTimeout);
        if (index + 1 === totalPages) {
          resetTimeout = setTimeout(() => {
            carouselRef.current.goTo(0);
          }, 1500); // same time
        }
      }}
    >
      {images.map((image, index) => (
        <Item detils={image} />
        // <p>{image.title}</p>
      ))}
    </Carousel>
  );
}

export default Banner;

function Item({ detils }) {
  return (
    <div className="banner">
      <img src={detils.url} alt={detils.url} />
      {/* <p style={{ fontSize: "18px", padding: "0px 10px" }}>{detils.title}</p> */}
    </div>
  );
}
