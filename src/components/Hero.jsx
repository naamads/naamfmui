import React from "react";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(/img/hero-bg.png)` }}>
      <div className="container">
        <div className="hero__text">
          <span>New single</span>
          <h1>Feel the heart beats</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="https://www.youtube.com/watch?v=K4DyBUG242c" className="play-btn">
            ▶
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
