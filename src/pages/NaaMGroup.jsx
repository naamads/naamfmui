import React, { useState, useEffect } from 'react';
import { Button } from '/src/components/ui/button.jsx';
import { Card } from '/src/components/ui/card.jsx';
import { Play, Pause, RotateCcw } from 'lucide-react';

import slidesData from '/src/data/NaaMGroupSlide.json';
import '/src/styles/NaaMGroup.scss';

const NaaMGroup = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [isReversed, setIsReversed] = useState(false);
  const [focusedSlide, setFocusedSlide] = useState(null);

  const handleSlideClick = (slideIndex, event) => {
    event.stopPropagation();
    setIsRotating(false);
    setFocusedSlide(slideIndex);

    setTimeout(() => {
      setFocusedSlide(null);
      setIsRotating(true);
    }, 3000);
  };

  const handleActionClick = (link, event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Navigate to: ${link}`);
    window.location.href = link; // ⬅️ direct navigation
  };

  const toggleRotation = () => setIsRotating(!isRotating);
  const toggleDirection = () => setIsReversed(!isReversed);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        toggleRotation();
      } else if (e.key.toLowerCase() === 'r') {
        toggleDirection();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isRotating]);

  return (
    <div className="naamgroup-container">
      <div className="slider-3d">
        <div
          className={`slider-3d-inner ${isRotating ? 'rotate-infinite' : ''}`}
          style={{
            animationDirection: isReversed ? 'reverse' : 'normal',
            animationPlayState: isRotating && !focusedSlide ? 'running' : 'paused',
            transform:
              focusedSlide !== null ? `rotateY(${-72 * focusedSlide}deg)` : undefined,
          }}
        >
          {slidesData.map((slide, index) => (
            <Card
              key={slide.id}
              className="slide-3d"
              style={{ transform: `rotateY(${72 * index}deg) translateZ(350px)` }}
              onClick={(e) => handleSlideClick(index, e)}
            >
              <div className="slide-img">
                <img src={slide.image} alt={slide.title} className="img-content" />
              </div>

              <div className="slide-content">
                <div className="text-center">
                  <span className="category-tag">{slide.category}</span>
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                </div>

                <div className="action-btns">
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={(e) => handleActionClick(slide.button1.link, e)}
                  >
                    {slide.button1.text}
                  </Button>
                  <Button
                    variant="outline-gradient"
                    size="sm"
                    onClick={(e) => handleActionClick(slide.button2.link, e)}
                  >
                    {slide.button2.text}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="central-logo">
          NAAM IT <br /> CARE
        </div>
      </div>

      <div className="controls">
        <Button
          variant="glass"
          size="icon"
          onClick={toggleRotation}
          className="control-btn"
        >
          {isRotating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        <Button
          variant="glass"
          size="icon"
          onClick={toggleDirection}
          className="control-btn"
        >
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>

      <div className="instructions">
        <p>Click slides to focus • Space to pause • R to reverse</p>
      </div>
    </div>
  );
};

export default NaaMGroup;
