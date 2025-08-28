import React, { useState } from "react";
import {
  Play,
  Pause,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import "../styles/Header.scss";

const Header = ({ isPlaying, togglePlay }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN"); // Language state

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "TN" : "EN"));
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Left: Brand */}
          <div className="header__left">
            <h1 className="header__brand">NaaM FM</h1>
          </div>

          {/* Center: Play / Pause Button */}
          <button className="header__play" onClick={togglePlay}>
            {isPlaying ? (
              <Pause size={24} className="header__play-icon" />
            ) : (
              <Play size={24} className="header__play-icon" />
            )}
          </button>

          {/* Right: Contact + Social + Menu + Language */}
          <div className="header__right">
            <div className="header__contact">
              <Phone className="header__phone-icon" size={18} />
              <span className="header__phone-text">+91 98765 43210</span>
            </div>

            <div className="header__socials">
              <a href="#" className="header__social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="header__social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="header__social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="header__social-link">
                <Youtube size={20} />
              </a>
            </div>

            {/* Language Toggle */}
            <button
              className="header__lang"
              onClick={toggleLanguage}
              title="Switch Language"
            >
              {language}
            </button>

            {/* Menu Button */}
            <button
              className="header__menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="header__nav">
          <div className="header__nav-container">
            <div className="header__nav-content">
              <a href="/" className="header__nav-link">
                Home
              </a>
              <a href="/aboutUs" className="header__nav-link">
                About Us
              </a>
              <a href="#" className="header__nav-link">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
