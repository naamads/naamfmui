import React, { useState } from 'react';
import '../styles/_header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      {/* Hamburger menu */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Left Menu */}
      <nav className={`menu-left ${menuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">NaaM Groups</a>
        <a href="#">Contact Us</a>
      </nav>

      {/* Center Logo */}
      <div className="logo">NAAM</div>

      {/* Right Social Icons and Email */}
      <div className="social-right">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="mailto:naam.lavanya@gmail.com" className="email">
          <i className="fas fa-envelope"></i> naam.lavanya@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Header;
