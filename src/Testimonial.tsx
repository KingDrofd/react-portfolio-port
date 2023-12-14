import React from "react";
import placeholder from "./images/placholder.png";
const Testimonial = () => {
  return (
    <div id="testimonial-id" className="testimonials-section">
      <div className="section-title">
        <div className="title-small-1">
          <div
            className="title-small-bar-1"
            style={{
              background: "rgb(33, 149, 243)",
            }}
          ></div>
          <h1>Client's Testimonials</h1>
        </div>
        <div className="title-big-1">
          <div className="title-big-bar-1"></div>
          <h1>Feedback Recieved</h1>
        </div>
      </div>
      <div className="gap" style={{ height: "150px" }}></div>
      <div className="testimonials">
        <div className="testimonial-card testimonial-blue">
          <img src={placeholder} alt="" />
          <div className="testimonial-card-info">
            <div className="testimonial-text">
              Un excellent service, francophone, rapide, à l'écoute et
              disponible. Nous vous recommandons Abdallah pour tous vos projets.
            </div>

            <div className="testimonial-name">
              Etienne, CEO Imprime À Rabais
            </div>
          </div>
        </div>
        <div className="testimonial-card testimonial-red">
          <img src={placeholder} alt="" />
          <div className="testimonial-card-info">
            <div className="testimonial-text">
              Fast and efficient, Abdallah's talent for code and insights are
              unique.
            </div>

            <div className="testimonial-name">
              Alex, CEO Querias Consulting LLC
            </div>
          </div>
        </div>
        <div className="testimonial-card testimonial-yellow">
          <img src={placeholder} alt="" />
          <div className="testimonial-card-info">
            <div className="testimonial-text">
              I had the pleasure of working with Abdellah during his internship
              in game design, and I can confidently say he's a talented and
              dedicated individual
            </div>

            <div className="testimonial-name">Hermann Kao, SnowTrust</div>
          </div>
        </div>
      </div>
      <div className="gap" style={{ height: "150px" }}></div>
    </div>
  );
};

export default Testimonial;
