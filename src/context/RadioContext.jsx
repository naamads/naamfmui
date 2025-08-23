import { createContext, useContext, useRef, useState, useEffect } from "react";

const RadioContext = createContext();

export const RadioProvider = ({
  children,
  streamUrl = "https://centova.aarenworld.com/proxy/894tamilfm/stream"
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // try autoplay after first click/tap
  useEffect(() => {
    const audio = audioRef.current;
    const unlock = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
      document.removeEventListener("click", unlock);
    };
    document.addEventListener("click", unlock);
    return () => document.removeEventListener("click", unlock);
  }, []);

  return (
    <RadioContext.Provider value={{ isPlaying, togglePlay }}>
      <audio ref={audioRef} src={streamUrl} preload="auto" />
      {children}
    </RadioContext.Provider>
  );
};

export const useRadio = () => useContext(RadioContext);
