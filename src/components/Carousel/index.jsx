import React, { useState } from 'react';
import Slide1 from '../Carousel/img/2.png';
import Slide2 from '../Carousel/img/3.png';

const slides = [Slide1, Slide2];

export const Carousel = () => {
  const [index, setSlide] = useState(0);

  return (
    <div id="carousel" className="carousel slide">
      <div className="carousel-inner">
        <div className={`carousel-item ${index === 0 ? 'active' : null}`}>
          <img src={Slide1} className="d-block w-100" alt="slide1" />
        </div>
        <div className={`carousel-item ${index === 1 ? 'active' : null}`}>
          <img src={Slide2} className="d-block w-100" alt="slide2" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
        onClick={() => setSlide(index - 1)}
        disabled={index === 0}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
        onClick={() => setSlide(index + 1)}
        disabled={index === slides.length - 1}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
