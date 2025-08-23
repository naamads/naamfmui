import { useRadio } from "../context/RadioContext";
import "../styles/_radioPlayer.scss";

const RadioPlayer = () => {
  const { isPlaying, togglePlay } = useRadio();

  return (
    <div className="radio-player">
      <div className="logo-title">
        <img src="/fm.gif" alt="Tamil FM Logo" className="station-logo" />
        <div className="station-info">
          <span className="station-title">MR.Local Naam FM</span>
          <span className="live-tag">LIVE NOW</span>
          <span className="tagline">Naam Radio</span>
        </div>
      </div>

      <button
        className="play-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
};

export default RadioPlayer;
