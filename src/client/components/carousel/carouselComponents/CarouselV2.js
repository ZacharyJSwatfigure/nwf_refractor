import React, { useState, useEffect } from "react";
import {
  CarouselSlideOne,
  CarouselSlideTwo,
  CarouselSlideThree,
  CarouselSlideFour,
} from "./slides";
import "../../style/carouselv2.css";

function CarouselV2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCounter, setSlideCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slideCounter]);

  const handleSlideChange = () => {
    console.log("slide fired");
    if (slideCounter === 4) {
      setSlideCounter(0);
    } else if (slideCounter <= 3) {
      setSlideCounter((slideCounter) => slideCounter + 1);
    } else if (slideCounter > 4) {
      console.error("slide counter greater than 4");
    }
    if (slideCounter === 0) {
      setCurrentSlide(<CarouselSlideOne />);
    } else if (slideCounter === 1) {
      setCurrentSlide(<CarouselSlideTwo />);
    } else if (slideCounter === 2) {
      setCurrentSlide(<CarouselSlideThree />);
    } else if (slideCounter === 3) {
      setCurrentSlide(<CarouselSlideFour />);
    }
    console.log(slideCounter);
  };
  return (
    <section className="allHolderSlides">
      <div className="carousel-layout">
        <div>
          <button className="btn-left">left</button>
        </div>
        <div>
          <h1>NEW WAY FORWARD</h1>
          <p>Bring your campaign into the 21st century</p>
          <div className="carousel-container">{currentSlide}</div>
        </div>
        <div>
          <button className="btn-right">right</button>
        </div>
      </div>
    </section>
  );
}

export default CarouselV2;
