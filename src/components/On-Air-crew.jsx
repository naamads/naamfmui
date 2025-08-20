import React, { useRef } from 'react';
import '../styles/OnAirCrew.scss';

const crewMembers = [
  { name: 'RJ Bravo', img: '/onaircrew/image1.jpg' },
  { name: 'RJ Priya', img: '/onaircrew/image2.jpg' },
  { name: 'RJ Krishnie', img: '/onaircrew/image3.jpg' },
  { name: 'RJ Madhu', img: '/onaircrew/image4.jpg' },
  { name: 'RJ Nivedha', img: '/onaircrew/image5.jpg' },
  { name: 'RJ Kirthana', img: '/onaircrew/image6.jpg' },
];

const OnAirCrew = () => {
  const containerRef = useRef(null);
  const scrollStep = 180 + 24; // Diamond width + gap

  const scrollLeft = () => {
    if (!containerRef.current) return;
    let newPos = containerRef.current.scrollLeft + scrollStep;

    if (newPos > containerRef.current.scrollWidth - containerRef.current.clientWidth) {
      newPos = 0;
    }

    containerRef.current.scrollTo({ left: newPos, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;
    let newPos = containerRef.current.scrollLeft - scrollStep;

    if (newPos < 0) {
      newPos = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    }

    containerRef.current.scrollTo({ left: newPos, behavior: 'smooth' });
  };

  return (
    <section className="on-air-crew">
      <h2>On-Air Crew</h2>
      <div className="crew-slider-wrapper">
        <button className="scroll-btn left" onClick={scrollRight} aria-label="Scroll Left">
          &#8249;
        </button>
        <div className="crew-container" ref={containerRef}>
          {crewMembers.map(({ name, img }, i) => (
            <div key={i} className="crew-member">
              <div className="diamond">
                <img src={img} alt={`Photo of ${name}`} />
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollLeft} aria-label="Scroll Right">
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default OnAirCrew;
