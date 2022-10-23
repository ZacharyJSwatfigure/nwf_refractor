import React from "react";
import LandingCarousel from "../components/carousel/Carousel";
import Intro from "../components/landingPageComponents/Intro";
import "../components/style/landingPage.css";
import SlideR from "../components/landingPageComponents/SlideR.js";
import SlideL from "../components/landingPageComponents/SlideL.js";

function LandingPage({ page, setPage }) {
  return (
    <div>
      <section className="landingpage-allholder">
        <LandingCarousel page={page} setPage={setPage} />
        <Intro />
        <SlideR />
        <SlideL />
        <SlideR />
      </section>
    </div>
  );
}

export default LandingPage;
