import React, { useState } from "react";
import { Play, Pause, X } from "lucide-react"; // icons
import "../styles/Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            MR<span>Local NaaM FM </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul>
            <li><a href="/" className="active">HOME</a></li>
            <li><a href="/aboutUs">ABOUT</a></li>
            <li><a href="/albums">NAAM GROUP</a></li>
            <li><a href="/tours">NAAM RJ </a></li>
            <li><a href="/pages">PAGES</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>

        {/* Music Play/Pause */}
        <button 
          className="player-btn" 
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause size={20}/> : <Play size={20}/>}
        </button>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          MENU ☰
        </button>
      </div>

      {/* Gray Right-Side Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="side-header">
          <span>MENU</span>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <ul>
          <li><a href="/" className="active">HOME</a></li>
          <li><a href="/aboutUs">ABOUT US </a></li>
          <li><a href="/albums">ALBUMS</a></li>
          <li><a href="/tours">TOURS</a></li>
          <li><a href="/pages">PAGES</a></li>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
