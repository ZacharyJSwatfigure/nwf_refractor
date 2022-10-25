import React from "react";
import CarouselVideo from "./carouselComponents/CarouselVideo";
import CarouselV2 from "./carouselComponents/CarouselV2";
import "../style/carousel.css";
function LandingCarousel({ page, setPage }) {
  return (
    <div className="carousel-container">
      <CarouselVideo />
      <CarouselV2 page={page} setPage={setPage} />
    </div>
  );
}

export default LandingCarousel;
