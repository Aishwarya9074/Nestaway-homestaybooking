// CarouselSlide.jsx

import React from "react";
import { Carousel as AntCarousel } from "antd"; // Renaming Carousel to AntCarousel

const CarouselSlide = ({ imagePath, altText }) => {
  return (
    <AntCarousel>
      <div>
        <img src={imagePath} alt={altText} width="100%" height="450px" />
      </div>
    </AntCarousel>
  );
};

export default CarouselSlide;
