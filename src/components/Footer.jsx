import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import '../styles/footer.scss'  // 👈 import styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Mr.Local Naam FM</h3>
            <p>Your trusted local radio station bringing you the best music, news, and entertainment 24/7.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
         </div>

          <div className="footer__section">
            <h3>Contact Info</h3>
            <div className="contact-item"><Phone size={16} /><span>+91 98765 43210</span></div>
            <div className="contact-item"><Mail size={16} /><span>info@naamfm.com</span></div>
            <div className="contact-item"><MapPin size={16} /><span>123 Radio Street, Music City</span></div>
          </div>

          <div className="footer__section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#naam-fm">Naam FM</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
          </div>

          <div className="footer__section">
            <h3>Programs</h3>
            <a href="#morning-show">Morning Show</a>
            <a href="#evening-beats">Evening Beats</a>
            <a href="#night-vibes">Night Vibes</a>
            <a href="#weekend-special">Weekend Special</a>
            <a href="#request-hour">Request Hour</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2024 Mr.Local Naam FM. All rights reserved. | Designed with ❤️ for music lovers</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
