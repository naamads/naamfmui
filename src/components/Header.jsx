import React, { useState, useEffect, useRef } from "react";
import {
  FaMusic,
  FaPause,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../styles/_header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error("Audio playback error:", err);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        {/* Left: hamburger */}
        <button
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((s) => !s)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center: logo */}
        <div className="logo">
          <a href="/">
            <img src="/path/to/logo.png" alt="NAAM Logo" />
          </a>
        </div>

        {/* Right: music button */}
        <button
          className="music-btn"
          aria-label={isPlaying ? "Pause stream" : "Play stream"}
          onClick={togglePlay}
        >
          {isPlaying ? <FaPause /> : <FaMusic />}
        </button>

        {/* audio player (hidden) */}
        <audio
          ref={audioRef}
          src="https://centova.aarenworld.com/proxy/894tamilfm/stream" // <-- replace with actual stream URL
          preload="none"
        />
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide menu */}
      <aside
        className={`slide-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <FaTimes />
        </button>

        <div className="slide-logo">
          <a href="/" onClick={closeMenu}>
            <img src="/path/to/logo.png" alt="NAAM Logo" />
          </a>
        </div>

        <ul className="slide-links">
          <li>
            <a href="/" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="/about" onClick={closeMenu}>About Us</a>
          </li>
          <li>
            <a href="/naam-groups" onClick={closeMenu}>Naam Groups</a>
          </li>
          <li>
            <a href="/fm-rk" onClick={closeMenu}>FM RK</a>
          </li>
          <li>
            <a href="/contact" onClick={closeMenu}>Contact Us</a>
          </li>
        </ul>

        <div className="slide-footer">
          <a href="mailto:naam.lavanya@gmail.co" className="slide-email">
            <FaEnvelope /> naam.lavanya@gmail.co
          </a>
          <div className="social-row">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
