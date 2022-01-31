import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import space from "../assets/Banner 1.jpg";
import B1 from "../assets/Banner 2.png";
import Party from "../assets/Banner 3.png";
import Party2 from "../assets/Banner 4.jpg";
import Comb from "../assets/Banner 5.png";

const images = [
  {
    url: B1,
    title: "Immortalishing moments..",
  },
  {
    url: space,
    title: "Immortalishing moments..",
  },
  {
    url: Party2,
    title: "Immortalishing moments..",
  },

  {
    url: Comb,
    title: "Immortalishing moments..",
  },
  {
    url: Party,
    title: "Immortalishing moments..",
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
      <p style={{ fontSize: "18px", padding: "0px 10px", textAlign: "right" }}>
        {detils.title}
      </p>
    </div>
  );
}
