import React from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import "../styles/Radioplayer.scss";

// Translations
const translations = {
  EN: {
    nowPlaying: "Now Playing",
    station: "Naam FM - Your Local Voice",
    liveStream: "Live Radio Stream",
  },
  TN: {
    nowPlaying: "இப்போதைக்கு ஒளிபரப்பு",
    station: "நாம் FM - உங்கள் உள்ளூர் குரல்",
    liveStream: "நேரடி ரேடியோ ஸ்ட்ரீம்",
  },
};

const RadioPlayer = ({
  isPlaying,
  togglePlay,
  volume,
  setVolume,
  isMuted,
  toggleMute,
  audioRef,
  language = "EN",
}) => {
  const t = translations[language] || translations.EN;

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  return (
    <section className="radio-player">
      <div className="container">
        <div className="player-container">
          {/* Naam FM Sticker */}
          <div className="naam-sticker">
            <img
              src="/images/Radio (2).png"
              alt="Naam FM"
              className="main-img"
            />

            {/* Rolling Image */}
            <div className="rolling-img-wrapper">
              <img
                src="/images/Radio (3).png"
                alt="Rolling Naam FM"
                className="rolling-img"
              />
            </div>

            {/* Music Icons Around */}
            <span className="music-icon top-left">
              🎵 <span className="naam-text">NaaM FM</span>
            </span>
            <span className="music-icon top-right">
              🎶 <span className="naam-text">NaaM FM</span>
            </span>
            <span className="music-icon bottom-left">
              🎵 <span className="naam-text">NaaM FM</span>
            </span>
            <span className="music-icon bottom-right">
              🎶 <span className="naam-text">NaaM FM</span>
            </span>
          </div>

          {/* Main Player */}
          <div className="player-content">
            <div className="now-playing">
              <h3>{t.nowPlaying}</h3>
              <p>{t.station}</p>
              <p>{t.liveStream}</p>
            </div>

            <div className="player-controls">
              <button className="play-btn" onClick={togglePlay}>
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>
            </div>

            <div className="volume-control">
              <button onClick={toggleMute}>
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioPlayer;
