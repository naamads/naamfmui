
import React, { useEffect, useRef, useState } from 'react';
import '../styles/_radioPlayer.scss';

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        const playOnUserInteraction = () => {
          audio.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
          document.removeEventListener('click', playOnUserInteraction);
        };
        document.addEventListener('click', playOnUserInteraction);
      }
    };

    tryPlay();

    return () => {
      document.removeEventListener('click', () => {});
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="radio-player">
      <audio ref={audioRef} preload="auto">
        <source
          src="https://centova.aarenworld.com/proxy/894tamilfm/stream"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="logo-title">
        <img src="/fm.gif" alt="Tamil FM Logo" className="station-logo" />
        <div className="station-info">
          <span className="station-title">89.4 Tamil FM</span>
          <span className="live-tag">LIVE NOW</span>
          <span className="tagline">Namma Radio Na</span>
        </div>
      </div>

      <button
        className="play-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  );
};

export default RadioPlayer;
