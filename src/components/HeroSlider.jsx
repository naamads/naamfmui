import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/hero-slider.scss";
import "/public/images/microphone.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
      title: "Welcome to",
      subtitle: "Your Voice, Your Music, Your Station",
    },
    {
      id: 2,
      image: "/images/microphone.jpg",
      title: "Local News",
      subtitle: "Stay Updated",
    },
    {
      id: 3,
      image: "/public/images/Naam.jpg",
      title: "NaaM Break Time",
      subtitle: "Connecting Hearts Through Music",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/3784424/pexels-photo-3784424.jpeg?w=1200",
      title: "Live Shows",
      subtitle: "Connect with Community",
    },
  ];

  // Auto advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero-slider">
      <div className="hero-slider__container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slider__slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-slider__image"
            />
            <div className="hero-slider__overlay">
              <div className="hero-slider__content">
                <h4 className="hero-slider__tagline">NaaM FM Vibes</h4>
                <h2 className="hero-slider__title">{slide.title}</h2>
                <p className="hero-slider__subtitle">{slide.subtitle}</p>
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

        {/* Indicators */}
        <div className="hero-slider__indicators">
          {slides.map((_, index) => (
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
