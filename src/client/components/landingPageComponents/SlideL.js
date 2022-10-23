import React from "react";
import "../style/leftImgCard.css";
import NightCity from "../img/NightCity.jpg";

function SlideL() {
  return (
    <div>
      <section className="lIntro-section">
        <div className="lIntro-section__container">
          <img className="lIntro-section__img" src={NightCity} />
          <div className="lIntro-section__text-div">
            <p className="lIntro-section__text">
              Ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SlideL;
