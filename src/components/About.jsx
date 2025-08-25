// About.jsx
import React from "react"
import "../styles/about.scss"
import aboutImg from "../assests/abouts.png"  // ✅ Correct path

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        
        {/* Left Side - Image */}
        <div className="about__image">
          <img src={aboutImg} alt="About Electro Vibe" />
        </div>

        {/* Right Side - Content */}
        <div className="about__content">
          <h5 className="about__subtitle">About Us</h5>
          <h2 className="about__title">THE ELECTRO VIBE</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lectus turpis sociis ut porttitor
            scelerisque amet ultrices placerat mid facilisis proin purus, cursus
            ridiculus nisi diam augue porta? Penatibus magna etiam, placerat
            dignissim.
          </p>
          <a href="#contact" className="about__btn">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default About
