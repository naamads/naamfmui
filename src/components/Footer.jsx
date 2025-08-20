
import React, { useEffect, useState } from 'react';
import '../styles/_footer.scss';

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand Section */}
        <div className="brand-info">
          <img src="/logo.png" alt="MR.local FM Logo" />
          <p>
            89.4 Tamil FM is a one-of-a-kind entertainment app, bringing Indian
            content to audience. Available in <strong>Android</strong>, <strong>iOS</strong> and web,
            89.4 Tamil FM brings the best of Indian music and audio content...
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/naam-group">Naam Groups</a></li>
              <li><a href="/on-air-crew">On-Air Crew</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/top-20">Top 20</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/news">News Updates</a></li>
            </ul>
          </div>

          <div>
            <h4>Our Shows</h4>
            <ul>
              <li><a href="#">Putham Puthu Kaalai</a></li>
              <li><a href="#">Mersal Mornings</a></li>
              <li><a href="#">Masala Cafe</a></li>
              <li><a href="#">Zhagaram</a></li>
              <li><a href="#">Rock with Raaja</a></li>
              <li><a href="#">The Evening Karak</a></li>
              <li><a href="#">Anbudan Naan</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Toll Free: 800-8940</p>
          <p>Tel: +971 4 35 95535</p>
          <p>Email: <a href="mailto:Naam.lavanya@gmail.com">Naam.lavanya@gmail.com</a></p>
          <p>
            Aaren World Media & Advertising LLC<br />
            P.O Box 50087, Dubai - UAE<br />
            Office 601, Atrium Centre, Khalid Bin Waleed Street
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
            <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="datetime">{dateTime.toLocaleString()}</div>
        <p>&copy; {new Date().getFullYear()} AWM Network. All rights reserved.</p>
        <p>
          Developed by <a href="https://gvsolutions.ae" target="_blank" rel="noopener noreferrer">Naam IT Care</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
