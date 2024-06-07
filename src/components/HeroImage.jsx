import React from 'react';
import './HeroImage.css';

function HeroImage() {
  return (
    <div className="hero-banner">
      <div className="slide">
        <img src="/static/img/heroImage.jfif" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="/static/img/heroImage1.jfif" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="/static/img/heroImage2.jfif" alt="Slide 3" />
      </div>
    </div>
  );
}

export default HeroImage;
