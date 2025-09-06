import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import '../styles/footer.scss';

// Import translations JSON
import translations from '../data/footerTranslations.json';

const Footer = ({ language = "EN" }) => {
  // Use Tamil if language="TN", fallback to English
  const t = translations[language] || translations.EN;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">

          {/* About Section */}
          <div className="footer__section">
            <h3>Naam FM</h3>
            <p>{t.about}</p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer__section">
            <h3>{t.contact}</h3>
            <div className="contact-item"><Phone size={16} /><span>+91 98765 43210</span></div>
            <div className="contact-item"><Mail size={16} /><span>info@naamfm.com</span></div>
            <div className="contact-item"><MapPin size={16} /><span>123 Radio Street, Music City</span></div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3>{t.quickLinks}</h3>
            <a href="#home">Home</a>
            <a href="#naam-fm">Naam FM</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">{t.privacy}</a>
          </div>

          {/* Programs Section */}
          <div className="footer__section">
            <h3>{t.programs}</h3>
            <a href="#morning-show">Morning Show</a>
            <a href="#evening-beats">Evening Beats</a>
            <a href="#night-vibes">Night Vibes</a>
            <a href="#weekend-special">Weekend Special</a>
            <a href="#request-hour">Request Hour</a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p>&copy; 2024 Naam FM. {t.copy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
