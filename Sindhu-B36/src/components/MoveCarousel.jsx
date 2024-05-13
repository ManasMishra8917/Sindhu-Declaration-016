import React, { useState, useEffect } from 'react';
import './MoveCarousel.css';

const MoveCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="move-carousel">
        <h1 className='blog'>Blog</h1>
        <p className='blog'>Read our articles and change your room to express yourself freely!</p>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentIndex ? 'slide active' : 'slide'}
        />
      ))}
    </div>
  );
};

export default MoveCarousel;