import React, { useRef, useEffect, useState } from "react";
import "../styles/about.scss";
import aboutImg from "/src/assests/about.jpg"; // ✅ Make sure your path is correct
import { FaMicrophoneAlt, FaMusic, FaHeart } from "react-icons/fa";
import translations from "../data/aboutTranslations.json"; // 🈳 i18n JSON

const About = ({ language = "EN" }) => {
  const t = translations[language];
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about ${inView ? "in-view" : ""}`}
      id="about"
    >
      <div className="about__container">
        <div className="about__image">
          <img src={aboutImg} alt={t.imgAlt} />
        </div>

        <div className="about__content">
          <h5 className="about__subtitle">{t.subtitle}</h5>
          <h2 className="about__title">
            <FaMicrophoneAlt className="icon vibe-icon" /> {t.title}{" "}
            <FaMusic className="icon vibe-icon" />
          </h2>
          <p className="about__text">
            {t.text} <FaHeart className="icon heart vibe-icon" />
          </p>
          <a href="#contact" className="about__btn">
            <FaMicrophoneAlt className="vibe-icon" /> {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
