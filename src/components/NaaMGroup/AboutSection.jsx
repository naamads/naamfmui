import React from "react";
import "/src/styles/AboutSection.scss";
import aboutContent from "/src/data/aboutContent.json";

const AboutSection = ({ language = "EN" }) => {
  // Use prop `language` to fix language, default to English
  const { title, description, features } = aboutContent[language];

  return (
    <section className="about-section">
      <div className="container">
        {/* Language toggle button removed */}

        <h2 className="about-title">{title}</h2>
        <p className="about-description">{description}</p>
        <ul className="about-features">
          {features.map((feature, index) => (
            <li key={index} className="about-feature">
              <span className="icon">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
