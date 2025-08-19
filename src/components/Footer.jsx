import React, { useEffect, useState } from 'react';
import '../styles/_footer.scss';

/**
 * Footer Component
 * Displays current date/time updating every second.
 */
const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="datetime">{dateTime.toLocaleString()}</p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Naam It Care. All rights reserved.
        </p>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
