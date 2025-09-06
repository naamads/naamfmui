import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// Components
import Header from "./components/Header";
import FlashNewsTicker from "./components/FlashNewsTicker";
import Footer from "./components/Footer";
import ButterflyGarden from "./components/ButterflyGarden";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import RadioPlayer from "./components/RadioPlayer";
import OnAirCrew from "./components/OnAirCrew";
import NaamFMSlider from "./components/NaaM RJ/NaamFMSlider";
import ProgrammingSection from "./components/NaaM RJ/ProgrammingSection";
import MicrophoneSection from "./components/NaaM RJ/MicrophoneSection";
import ServicesSection from "./components/NaaMGroup/ServicesSection";
import AboutSection from "./components/NaaMGroup/AboutSection";
import ContactSection from "./components/NaaMGroup/contactInfo"; // ✅ likely fix from "connectSection"

// Pages
import AboutUs from "./pages/AboutUs";
import NaaMGroup from "./components/NaaMGroup/NaaMGroup";
// import GetStarted from "./NaaMGroupPages/GetStarted";

// Data
import aboutContent from "./data/aboutContent.json";

// Styles
import "./styles/main.scss";
import "./styles/hero-slider.scss";
import "./styles/custom-cursor.css";

function App() {
  // Butterfly background toggle
  const [showButterflies, setShowButterflies] = useState(true);

  // Radio states
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Language toggle
  const [language, setLanguage] = useState("EN"); // or "TA"

  const streamUrl = "https://centova.aarenworld.com/proxy/894tamilfm/stream";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

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

  const toggleMute = () => {
    setIsMuted(prev => {
      const newMute = !prev;
      if (audioRef.current) {
        audioRef.current.volume = newMute ? 0 : volume;
      }
      return newMute;
    });
  };

  return (
    <Router>
      <div className="app relative custom-cursor min-h-screen bg-gray-900 flex flex-col text-white">
        {/* Butterfly background */}
        {showButterflies && (
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <ButterflyGarden />
          </div>
        )}

        {/* Header */}
        <Header
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          language={language}
          setLanguage={setLanguage}
        />

        {/* Flash news ticker */}
        <FlashNewsTicker language={language} />

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            {/* Home */}
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

            {/* About Us */}
            <Route path="/about-us" element={<AboutUs language={language} />} />

            {/* NaaM RJ */}
            <Route
              path="/naam-rj"
              element={
                <>
                  <NaamFMSlider language={language} />
                  <ProgrammingSection language={language} />
                  <MicrophoneSection language={language} />
                </>
              }
            />

            {/* Old path redirect */}
            <Route path="/naam-fm" element={<Navigate to="/naam-rj" replace />} />

            {/* NaaM Group */}
            <Route
              path="/naam-group"
              element={
                <>
                  <NaaMGroup language={language} />
                  <ServicesSection language={language} />
                  <AboutSection language={language} />
                  <ContactSection language={language} />
                </>
              }
            />

            {/* Future: Get Started page (optional) */}
            {/* <Route path="/naam-group/get-started" element={<GetStarted language={language} />} /> */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer language={language} />

        {/* Hidden Audio Player */}
        <audio ref={audioRef} src={streamUrl} preload="auto" />
      </div>
    </Router>
  );
}

export default App;
