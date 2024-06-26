import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Importing CSS for the Navbar
import logo from '../assets/TWS White logo11.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" height="70px" width="200px" />
        </Link>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {menuOpen && (
        <div className="menu-overlay">
          <div className="close-button" onClick={handleMenuClick}>✖</div>
          <ul>
            <li><a href="#home" onClick={handleMenuClick}>Home</a></li>
            <li><a href="#about" onClick={handleMenuClick}>About</a></li>
            <li><a href="#services" onClick={handleMenuClick}>Services</a></li>
            <li><a href="#why-us" onClick={handleMenuClick}>Why Us</a></li>
            {/* <li><Link to="/personal-styling" onClick={handleMenuClick}>Personal Styling</Link></li>
            <li><Link to="/event-styling" onClick={handleMenuClick}>Event Styling</Link></li>
            <li><Link to="/wedding-styling" onClick={handleMenuClick}>Wedding Styling</Link></li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
