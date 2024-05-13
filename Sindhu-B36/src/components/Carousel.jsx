// carousel.jsx

import React, { useState } from 'react';
import './Carousel.css';

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
      <button className="arrowprev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            style={{ backgroundImage: `url(${image})`,backgroundSize:"cover",backgroundPosition:"center",width:"80vw",height:"600px",marginTop:"70px",marginLeft:"150px" }}
          ></div>
        ))}
      </div>
      <button className="arrownext" onClick={goToNextSlide} >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;