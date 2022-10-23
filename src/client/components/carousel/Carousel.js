import React from "react";
import CarouselVideo from "./carouselComponents/CarouselVideo";
import "../style/carousel.css";
function LandingCarousel({ page, setPage }) {
  return (
    <div className="carousel-container">
      <CarouselVideo page={page} setPage={setPage} />
    </div>
  );
}

export default LandingCarousel;
