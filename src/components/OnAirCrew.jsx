import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/onaircrew.scss";
import crewMembers from "../data/crew.json";

const OnAirCrew = ({ language = "EN" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? crewMembers.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === crewMembers.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="onaircrew">
      <h2 className="title">
        {language === "EN" ? "On-Air Crew" : "ஒன்-ஏர் க்ரூ"}
      </h2>

      <div className="carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {crewMembers.map((crew, index) => (
            <div
              key={crew.id}
              className={`crew-card ${index === currentIndex ? "active" : ""}`}
            >
              <div className="crew-image animate-shape">
                <img src={crew.image} alt={crew.name} />
              </div>
              <h3 className="crew-name">
                {language === "EN" ? crew.name : crew.nameTN || crew.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button className="nav left" onClick={prevSlide}>
          <ChevronLeft />
        </button>
        <button className="nav right" onClick={nextSlide}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default OnAirCrew;
