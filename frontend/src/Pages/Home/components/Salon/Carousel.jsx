import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "./Carousel.css";

const Carousel = () => {
  //Data para el carousel
  const carouselSlidesData = [
    {
      id: 1,
      url: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      url: "https://picsum.photos/200/301",
    },
    {
      id: 3,
      url: "https://picsum.photos/200/303",
    },
  ];

  const [currentSlide, setcurrentSlide] = useState(0);

  // Cambiamos el background del carousel

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  //Funciones para los botones del carousel

  const nextSlide = () => {
    if (currentSlide === carouselSlidesData.length - 1) {
      setcurrentSlide(0);
      clearInterval();
    } else {
      setcurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setcurrentSlide(carouselSlidesData.length - 1);
    } else {
      setcurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="arrows-container">
        <button className="slide-arrow" id="arrow-left" onClick={nextSlide}>
          <FaArrowLeft />
        </button>
        <button className="slide-arrow" id="arrow-right" onClick={prevSlide}>
          <FaArrowRight />
        </button>
      </div>
      <div className="carousel">
        {carouselSlidesData.map((slides, id) => (
          <div key={slides.id} className="slide">
            {currentSlide === id && (
              <img src={slides.url} alt="slide" className="carousel-img" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
