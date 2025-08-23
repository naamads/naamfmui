import React, { useRef, useState } from "react";
import "../styles/OnAirCrew.scss";

const crewMembers = [
  { name: "RJ Madhu", img: "/onaircrew/image4.jpg" },
  { name: "RJ Krishnie", img: "/onaircrew/image3.jpg" },
  { name: "RJ Nivedha", img: "/onaircrew/image5.jpg" },
  { name: "RJ Kirthana", img: "/onaircrew/image6.jpg" },
  { name: "RJ Bravo", img: "/onaircrew/image1.jpg" },
  { name: "RJ Priya", img: "/onaircrew/image2.jpg" },
];

const OnAirCrew = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollStep = 180; // match diamond width

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const newPos = index * scrollStep;
    containerRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = crewMembers.length - 1;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= crewMembers.length) newIndex = 0;
    scrollToIndex(newIndex);
  };

  return (
    <section className="on-air-crew">
      <h2>On-Air Crew</h2>
      <div className="crew-slider-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &#8249;
        </button>

        <div className="crew-container" ref={containerRef}>
          {crewMembers.map(({ name, img }, i) => (
            <div key={i} className="crew-member">
              <div className="diamond-mask">
                <img src={img} alt={name} />
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default OnAirCrew;
