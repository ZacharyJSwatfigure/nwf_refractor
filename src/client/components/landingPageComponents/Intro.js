import React from "react";
import NightCity from "../img/NightCity.jpg";
import "../style/landingPage.css";

function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-section__container">
        <img className="intro-section__img" src={NightCity} />
        <div className="intro-section__text-div">
          <p className="intro-section__text">
            Ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
