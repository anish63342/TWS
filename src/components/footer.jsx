import React from 'react';
import '../styles.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-message">
        <span style={{color: '#FFFF31', fontStyle: 'italic'}}>Style</span> yourself with our <span style={{color: '#FFFF31', fontStyle: 'italic'}}>stylist</span>
      </p>
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default Footer;