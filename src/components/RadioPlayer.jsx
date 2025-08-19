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
        // Autoplay might be blocked, wait for user interaction
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

      <div className="station-info">
        <span className="station-title">Tamil FM Live</span>
        <span className="live-tag">NOW PLAYING</span>
        <span className="tagline">Streaming Live Tamil Songs</span>
      </div>

      <button
        className="stop-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? '⏸' : '▶️'}
      </button>
    </div>
  );
};

export default RadioPlayer;
