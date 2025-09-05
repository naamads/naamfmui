import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import "/src/components/NaaM RJ/MicrophoneSection.scss";

const features = [
  {
    icon: <FaMicrophoneAlt />,
    title: "Dancing Microphone",
    desc: "Watch as sound waves create visual magic",
  },
  {
    icon: <GiSoundWaves />,
    title: "Sound Journey",
    desc: "Follow the path of musical exploration",
  },
  {
    icon: <BsMusicNoteBeamed />,
    title: "Musical Elements",
    desc: "Symbols that dance to the rhythm",
  },
];

const InteractiveExperience = () => {
  return (
    <section className="interactive-experience">
      <h2 className="title">Interactive Experience</h2>
      <p className="subtitle">
        Feel the rhythm, see the sound, experience music in a new dimension
      </p>

      <div className="features">
        {features.map((f, i) => (
          <div className="card" key={i}>
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveExperience;
