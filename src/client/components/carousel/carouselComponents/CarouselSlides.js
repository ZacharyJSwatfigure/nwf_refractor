import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/carousel-single.css";

export default function CarouselSlides({ page, setPage }) {
  return (
    <div className="allHolder-slides">
      <div className="container">
        <div className="card">
          <h3 className="title">Services</h3>
          <div className="card-content__container">
            <p className="card-content">
              ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
            </p>
            <button
              className="btn-link"
              onClick={() => {
                setPage(0);
              }}
            >
              More About What We Offer...
            </button>
          </div>
        </div>
        <div className="card">
          <h3 className="title">Our Mission</h3>
          <div className="card-content__container">
            <p className="card-content">
              ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
            </p>
            <button
              className="btn-link"
              onClick={() => {
                setPage(1);
              }}
            >
              Learn More...
            </button>
          </div>
        </div>
        <div className="card">
          <h3 className="title">Careers</h3>
          <div className="card-content__container">
            <p className="card-content">
              ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
            </p>
            <button
              className="btn-link"
              onClick={() => {
                setPage(2);
              }}
            >
              How Can You Help...
            </button>
          </div>
        </div>
        <div className="card">
          <h3 className="title">Contact Us</h3>
          <div className="card-content__container">
            <p className="card-content">
              ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
            </p>
            <button
              className="btn-link"
              onClick={() => {
                setPage(3);
              }}
            >
              Get in Touch...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
