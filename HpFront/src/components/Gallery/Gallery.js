import React, { useState } from "react";
import "./Gallery.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length; // [0, 1, 2, 3, 4]

  const nextSlide = () => {
    // length - 1 ça veux dire dernier index de la liste
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // vérifie que la liste d'images existe ou est remplie d'au moins 1 image
  if (!Array.isArray(slides) || slides.length <= 0) {
    // array, list, tableau => [1,2,'blabla', ...]
    // !Array.isArray({"object": true}) => true
    // !Array.isArray(1) => true
    // !Array.isArray([1,2,3]) => false
    // !Array.isArray([]) => false
    return null;
  }

  return (
    <div className="gallery">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
