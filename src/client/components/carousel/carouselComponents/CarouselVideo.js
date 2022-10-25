import React from "react";
import background from "../../img/fullBackground.mp4";
import "../../style/carousel.css";
// import CarouselSlides from "./CarouselSlides";

function CarouselVideo() {
  return (
    <div>
      <video
        className="carousel-video"
        src={background}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      {/* <CarouselSlides page={page} setPage={setPage} /> */}
    </div>
  );
}

export default CarouselVideo;
