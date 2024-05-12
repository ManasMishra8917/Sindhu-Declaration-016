// carousel.jsx

import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <button className="arrow prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <button className="arrow next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
