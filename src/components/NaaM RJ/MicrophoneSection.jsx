import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import "/src/components/NaaM RJ/MicrophoneSection.scss";

const featuresData = [
  {
    icon: <FaMicrophoneAlt />,
    title: { EN: "Dancing Microphone", TN: "நடிக்கும் மைக்ரோபோன்" },
    desc: {
      EN: "Watch as sound waves create visual magic",
      TN: "ஒலி அலைகள் காட்சியியல் மாயாஜாலத்தை உருவாக்குகின்றன",
    },
  },
  {
    icon: <GiSoundWaves />,
    title: { EN: "Sound Journey", TN: "ஒலி பயணம்" },
    desc: {
      EN: "Follow the path of musical exploration",
      TN: "இசை ஆராய்ச்சியின் பாதையை பின்பற்றுங்கள்",
    },
  },
  {
    icon: <BsMusicNoteBeamed />,
    title: { EN: "Musical Elements", TN: "இசைக் கூறுகள்" },
    desc: {
      EN: "Symbols that dance to the rhythm",
      TN: "தாளத்திற்கு நடிக்கும் குறியீடுகள்",
    },
  },
];

const InteractiveExperience = ({ language = "EN" }) => {
  return (
    <section className="interactive-experience">
      <h2 className="title">
        {language === "EN" ? "Interactive Experience" : "இணைமுக அனுபவம்"}
      </h2>
      <p className="subtitle">
        {language === "EN"
          ? "Feel the rhythm, see the sound, experience music in a new dimension"
          : "தாளத்தை உணருங்கள், ஒலியை காணுங்கள், புதிய பரிமாணத்தில் இசையை அனுபவியுங்கள்"}
      </p>

      <div className="features">
        {featuresData.map((f, i) => (
          <div className="card" key={i}>
            <div className="icon">{f.icon}</div>
            <h3>{f.title[language]}</h3>
            <p>{f.desc[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveExperience;
