import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/hero-slider.scss";

// Example translation function (dummy)
const translateToTamil = (text) => {
  // Replace with your actual translation logic or dictionary lookup
  const translations = {
    "Welcome to": "வரவேற்கிறோம்",
    "Your Voice, Your Music, Your Station": "உங்கள் குரல், உங்கள் இசை, உங்கள் ரேடியோ ஸ்டேஷன்",
    "Local News": "உள்ளூர்த் செய்திகள்",
    "Stay Updated": "மேலதிக தகவலுக்காக",
    "NaaM Break Time": "நாம் பிரேக் டைம்",
    "Connecting Hearts Through Music": "இசை மூலம் மனங்களை இணைக்கிறது",
  };

  return translations[text] || text; // fallback to original if not found
};

const HeroSlider = ({ language = "EN" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
      title: language === "EN" ? "Welcome to" : translateToTamil("Welcome to"),
      subtitle:
        language === "EN"
          ? "Your Voice, Your Music, Your Station"
          : translateToTamil("Your Voice, Your Music, Your Station"),
    },
    {
      id: 2,
      image: "/images/microphone.jpg",
      title: language === "EN" ? "Local News" : translateToTamil("Local News"),
      subtitle: language === "EN" ? "Stay Updated" : translateToTamil("Stay Updated"),
    },
    {
      id: 3,
      image: "/images/Naam.jpg",
      title: language === "EN" ? "NaaM Break Time" : translateToTamil("NaaM Break Time"),
      subtitle:
        language === "EN"
          ? "Connecting Hearts Through Music"
          : translateToTamil("Connecting Hearts Through Music"),
    },
    {
      id: 4,
      image: "/images/vibes.jpg",
      title: "",
      subtitle: "",
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
            className={`hero-slider__slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} className="hero-slider__image" />
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
        <button className="hero-slider__nav hero-slider__nav--prev" onClick={prevSlide}>
          <ChevronLeft size={28} />
        </button>
        <button className="hero-slider__nav hero-slider__nav--next" onClick={nextSlide}>
          <ChevronRight size={28} />
        </button>

        {/* Indicators */}
        <div className="hero-slider__indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider__indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
