import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles.css'; // Importing CSS for the Services page
import serviceImage1 from '../assets/hmgoepprod.jpeg'; // Replace with actual image paths
import serviceImage2 from '../assets/hmgoepprod2.jpeg';
import serviceImage3 from '../assets/hmgoepprod3.jpeg';
import Navbar from '../components/navbar'

const Services = () => {
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    const serviceSection = document.querySelector('.service');

    const handleHover = () => {
      serviceSection.classList.add('hovered');
    };

    serviceSection.addEventListener('mouseenter', handleHover);

    return () => {
      serviceSection.removeEventListener('mouseenter', handleHover);
    };
  }, []);

  const handleImageClick = (path) => {
    navigate(path); // Use navigate to change the route
  };

  return (
    <div id='services' className="services-container">
      <h1>Services</h1>
      <div className="service">
        <div className="service-item" onClick={() => handleImageClick('/personal-styling')}>
          <div className="service-image-container">
            <img src={serviceImage1} alt="Nike Ambush" className="service-image" />
            <div className="overlay">
            <button className="know-more-button">Know More</button>
            </div>
          </div>
          <p className="service-name">Personal Styling</p>
        </div>

        <div className="service-item" onClick={() => handleImageClick('/event-styling')}>
          <div className="service-image-container">
            <img src={serviceImage1} alt="Nike Ambush" className="service-image" />
            <div className="overlay">
            <button className="know-more-button">Know More</button>
            </div>
          </div>
          <p className="service-name">Event Styling</p>
        </div>
        <div className="service-item" onClick={() => handleImageClick('/wedding-styling')}>
          <div className="service-image-container">
            <img src={serviceImage1} alt="Nike Ambush" className="service-image" />
            <div className="overlay">
            <button className="know-more-button">Know More</button>
            </div>
          </div>
          <p className="service-name">Wedding Styling</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
