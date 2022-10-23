import React from "react";
import "../style/rightImgCard.css";
import NightCity from "../img/NightCity.jpg";

function SlideR() {
  return (
    <section className="rIntro-section">
      <div className="rIntro-section__container">
        <div className="rIntro-section__text-div">
          <p className="rIntro-section__text">
            Ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
          </p>
        </div>
        <img className="rIntro-section__img" src={NightCity} />
      </div>
    </section>
  );
}

export default SlideR;
