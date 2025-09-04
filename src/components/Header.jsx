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
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import translations from "/src/data/Header.json"; // Import JSON

const Header = ({ isPlaying, togglePlay, language = "EN", setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language] || translations.EN;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__left">
            <h1 className="header__brand">NaaM FM</h1>
            <span className="header__group">{t.group}</span>
          </div>

          <button className="header__play" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          <div className="header__right">
            <div className="header__contact">
              <Phone size={18} />
              <span>{t.phone}</span>
            </div>

            <div className="header__socials">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>

            {/* Language Toggle Buttons */}
            <div className="header__lang-toggle">
              <button
                className={`btn-ta ${language === "TN" ? "active" : ""}`}
                onClick={() => setLanguage("TN")}
                aria-pressed={language === "TN"}
              >
                TA
              </button>
              <button
                className={`btn-en ${language === "EN" ? "active" : ""}`}
                onClick={() => setLanguage("EN")}
                aria-pressed={language === "EN"}
              >
                EN
              </button>
            </div>

            <button
              className="header__menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="header__nav" role="navigation" aria-label="Main menu">
          <div className="header__nav-container">
            <div className="header__nav-content">
              <Link to="/" className="header__nav-link">{t.home}</Link>
              <Link to="/naam-group" className="header__nav-link">{t.groupMenu}</Link>
              <Link to="/aboutUs" className="header__nav-link">{t.about}</Link>
              <Link to="/contact" className="header__nav-link">{t.contact}</Link>
              <Link to="/it-care" className="header__nav-link header__nav-link--special">{t.menuGroup}</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
