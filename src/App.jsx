import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import FlashNewsTicker from "./components/FlashNewsTicker";
import Footer from "./components/Footer";
import ButterflyGarden from "./components/ButterflyGarden";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import RadioPlayer from "./components/RadioPlayer";
import OnAirCrew from "./components/OnAirCrew";

// Pages
import AboutUs from "./pages/AboutUs";
import NaaMGroup from "./pages/NaaMGroup";
import GetStarted from "./NaaMGroupPages/GetStarted";

// Styles
import "./styles/main.scss";
import "./styles/hero-slider.scss";
import "./styles/custom-cursor.css";

function App() {
  // 🦋 Butterfly toggle
  const [showButterflies, setShowButterflies] = useState(true);

  // 🎵 Radio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // 🌐 Language state
  const [language, setLanguage] = useState("EN"); // EN or TN

  const streamUrl = "https://centova.aarenworld.com/proxy/894tamilfm/stream";

  // Update audio volume
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Play/pause toggle
  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio play error:", error);
    }
  };

  // Mute/unmute toggle
  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMute = !prev;
      if (audioRef.current) audioRef.current.volume = newMute ? 0 : volume;
      return newMute;
    });
  };

  return (
    <Router>
      <div className="app relative custom-cursor min-h-screen bg-gray-900 flex flex-col text-white">
        {/* 🦋 Butterfly Background */}
        {showButterflies && (
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <ButterflyGarden />
          </div>
        )}

        {/* 🔼 Header */}
        <Header
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          language={language}
          setLanguage={setLanguage}
        />

        <FlashNewsTicker
          title="Latest News"
          items={[
            { text: "🎉 Naam FM: Your Local Voice", url: "#" },
            { text: "📻 Tune in live 24/7", url: "#" },
            { text: "📰 Community updates every hour", url: "#" },
          ]}
          mode="marquee"
          marqueeSpeedSec={25}
          pauseOnHover={true}
        />

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSlider language={language} />
                  <About language={language} />
                  <RadioPlayer
                    isPlaying={isPlaying}
                    togglePlay={togglePlay}
                    volume={volume}
                    setVolume={setVolume}
                    isMuted={isMuted}
                    toggleMute={toggleMute}
                    audioRef={audioRef}
                    language={language}
                  />
                  <OnAirCrew language={language} />
                </>
              }
            />

            {/* About Us Page */}
            <Route path="/about-us" element={<AboutUs language={language} />} />

            {/* NaaM Group Page */}
            <Route path="/naam-group" element={<NaaMGroup language={language} />} />

            {/* Get Started Page */}
            <Route path="/naam-group/get-started" element={<GetStarted language={language} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer language={language} />

        {/* Audio element (hidden) */}
        <audio ref={audioRef} src={streamUrl} preload="auto" />
      </div>
    </Router>
  );
}

export default App;
