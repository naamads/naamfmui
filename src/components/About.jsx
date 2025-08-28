// About.jsx
import React from "react"
import "../styles/about.scss"
import aboutImg from "../assests/about.jpg"  
import { FaMicrophoneAlt, FaMusic, FaHeart } from "react-icons/fa"  


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        
        {/* Left Side - Image */}
        <div className="about__image">
          <img src={aboutImg} alt="About NaaM FM" />
        </div>

        {/* Right Side - Content */}
        <div className="about__content">
          <h5 className="about__subtitle">About Us</h5>
          <h2 className="about__title">
            <FaMicrophoneAlt className="icon" /> NaaM FM VIBE <FaMusic className="icon" />
          </h2>
          <p className="about__text">
            Welcome to <strong>NaaM FM</strong> – your voice, your music, 
            your station! <FaMicrophoneAlt /><br /><br />
            We’re here to bring you the best of local vibes, latest hits, 
            and soulful shows. From trending beats to timeless classics, 
            we connect hearts through music and stories that matter.  
            Join us and feel the <em>NaaM FM vibe</em> – 
            because music is not just heard, it’s felt. <FaHeart className="icon heart" />
          </p>
          <a href="#contact" className="about__btn">
            <FaMicrophoneAlt /> Connect With Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
