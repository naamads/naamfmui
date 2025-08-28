import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButterflyGarden from "./components/ButterflyGarden";

// Pages
import AboutUs from "./pages/AboutUs";

// Home Page Components
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import RadioPlayer from "./components/RadioPlayer";
import OnAirCrew from "./components/OnAirCrew";

// Styles
import "./styles/main.scss";
import "./styles/hero-slider.scss";
import "./styles/custom-cursor.css";

function App() {
  const [showButterflies, setShowButterflies] = useState(true);

  // 🎵 Global Radio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const streamUrl = "https://centova.aarenworld.com/proxy/894tamilfm/stream";

  // keep volume & mute synced
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
    setIsMuted((prev) => {
      const newMute = !prev;
      if (audioRef.current) {
        audioRef.current.volume = newMute ? 0 : volume;
      }
      return newMute;
    });
  };

  return (
    <Router>
      <div className="app relative custom-cursor min-h-screen bg-gray-900 flex flex-col">
        {/* 🦋 Butterfly Background */}
        {showButterflies && (
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <ButterflyGarden />
          </div>
        )}

        {/* Header (control radio globally) */}
        <Header isPlaying={isPlaying} togglePlay={togglePlay} />

        {/* Page Routes */}
        <main className="flex-1">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSlider />
                  <About />
                  <RadioPlayer
                    isPlaying={isPlaying}
                    togglePlay={togglePlay}
                    volume={volume}
                    setVolume={setVolume}
                    isMuted={isMuted}
                    toggleMute={toggleMute}
                    audioRef={audioRef}
                    streamUrl={streamUrl}
                  />
                  <OnAirCrew />
                </>
              }
            />

            {/* About Us Page */}
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </main>

        {/* Footer visible everywhere */}
        <Footer />

        {/* 🦋 Toggle Butterflies Button */}
        <button
          onClick={() => setShowButterflies((prev) => !prev)}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
        >
          {showButterflies ? "Hide Butterflies" : "Show Butterflies"}
        </button>

        {/* 🎵 Shared audio element */}
        <audio ref={audioRef} src={streamUrl} preload="none" />
      </div>
    </Router>
  );
}

export default App;
