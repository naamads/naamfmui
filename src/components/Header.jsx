import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Play,
  Pause,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
} from "lucide-react";
import { useRadio } from "../context/RadioContext";
import "../styles/_header.scss";

const Header = ({
  logo = "Mr.localNaam FM",
  logoImg = "/banners/logo.jpeg",   // logo path
  email = "Naam.lavanya@gmail.com",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isPlaying, togglePlay } = useRadio();

  // lock/unlock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Naam Group", href: "/naam-group" },
    { label: "FM RK", href: "/fm-rk" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="header">
        <div className="top-bar">
          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="logo">
            <a href="/">
              {logoImg ? (
                <img src={logoImg} alt={logo} className="logo-img" />
              ) : (
                <h1>{logo}</h1>
              )}
            </a>
          </div>

          {/* Play button */}
          <div className="right-icons">
            <button className="music-btn" onClick={togglePlay}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Slide Menu */}
      <nav className={`slide-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
          <X size={24} />
        </button>

        {/* Logo in menu */}
        <div className="slide-logo">
          <a href="/">
            {logoImg ? (
              <img src={logoImg} alt={logo} className="logo-img" />
            ) : (
              <h2>{logo}</h2>
            )}
          </a>
        </div>

        {/* Links */}
        <ul className="slide-links">
          {navigationLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="slide-footer">
          <div className="slide-email">
            <Mail size={16} />
            <span>{email}</span>
          </div>
          <div className="social-row">
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href={`mailto:${email}`}>
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
