
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './ImageCarouse.css'; 

const images = [
  { id: 1, url: 'https://th.bing.com/th/id/OIP.NA0uwz-ikxFPg56FD31lVQAAAA?rs=1&pid=ImgDetMain' },
  { id: 2, url: 'https://th.bing.com/th/id/OIP.NA0uwz-ikxFPg56FD31lVQAAAA?rs=1&pid=ImgDetMain' },
  { id: 3, url: 'https://th.bing.com/th/id/OIP.NA0uwz-ikxFPg56FD31lVQAAAA?rs=1&pid=ImgDetMain' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <FaArrowAltCircleLeft className="arrow left" onClick={prevSlide} />
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            className={index === currentIndex ? "slide active" : "slide"}
            key={image.id}
          >
            {index === currentIndex && <img src={image.url} alt={`Slide ${index}`} />}
          </div>
        ))}
      </div>
      <FaArrowAltCircleRight className="arrow right" onClick={nextSlide} />
    </div>
  );
};

export default ImageCarousel;
