import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/hero-slider.scss";
import heroSlides from "/src/data/Heroslide.json"; // ✅ Default JSON import

const HeroSlider = ({ language = "EN" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero-slider">
      <div className="hero-slider__container">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slider__slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title[language]}
              className="hero-slider__image"
            />
            <div className="hero-slider__overlay">
              <div className="hero-slider__content">
                <h4 className="hero-slider__tagline">NaaM FM Vibes</h4>
                <h2 className="hero-slider__title">{slide.title[language]}</h2>
                <p className="hero-slider__subtitle">{slide.subtitle[language]}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          className="hero-slider__nav hero-slider__nav--prev"
          onClick={prevSlide}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          className="hero-slider__nav hero-slider__nav--next"
          onClick={nextSlide}
        >
          <ChevronRight size={28} />
        </button>

        {/* Slide Indicators */}
        <div className="hero-slider__indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider__indicator ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
