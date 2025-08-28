import React, { useEffect, useState } from "react";
import "../styles/butterfly-cursor.scss";

const ButterflyGarden = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  // Generate 15 floating butterflies
  const butterflies = Array.from({ length: 15 });

  return (
    <>
      {/* ✨ Special Cursor Butterfly */}
      <div
        className="cursor-butterfly"
        style={{ left: position.x, top: position.y }}
      >
        <span className="wing">🦋</span>
      </div>

      {/* 🌸 Random Floating Butterflies */}
      {butterflies.map((_, i) => (
        <div
          key={i}
          className="floating-butterfly"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${8 + Math.random() * 12}s`,
            fontSize: `${0.8 + Math.random() * 1.5}rem`, // smaller sizes
            opacity: 0.8,
            filter: `hue-rotate(${Math.random() * 360}deg) saturate(1.5)`, // 🌈 random colors
          }}
        >
          🦋
        </div>
      ))}
    </>
  );
};

export default ButterflyGarden;
