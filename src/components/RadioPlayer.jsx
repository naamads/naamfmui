import React from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import "../styles/Radioplayer.scss";

const RadioPlayer = ({
  isPlaying,
  togglePlay,
  volume,
  setVolume,
  isMuted,
  toggleMute,
  audioRef,
  streamUrl,
}) => {
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
          <div className="now-playing">
            <h3>Now Playing</h3>
            <p>Naam FM - Your Local Voice</p>
            <p>Live Radio Stream</p>
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
    </section>
  );
};

export default RadioPlayer;
