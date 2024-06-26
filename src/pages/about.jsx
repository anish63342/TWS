import React from 'react';
import '../styles.css'; // Importing CSS for the About page
import aboutImage1 from '../assets/hmgoepprod.jpeg'; // Replace with actual image paths
import aboutImage2 from '../assets/hmgoepprod2.jpeg';
import logo from '../assets/TWS black logo.png';
import image3 from '../assets/hmgoepprod3.jpeg';
import Navbar from '../components/navbar'

const About = () => {
    return (
      <div id='about' className="about-container">
        <div className="about-left">
          <h1>About us</h1>
          <img src={aboutImage1} alt="About Us 1" className="about-image-1" />
        </div>
        <div className="about-right">
          <p className="about-text">
            We are a global platform for the footwear industry. Our goal is to unite designers, boutiques and buyers on one site. TWS offers unique shopping opportunities and the largest selection of leading brands on one platform.
          </p>
          <p className="about-text">
            Among our advantages: a fully localized website and applications for iOS and Android, Russian-language customer support, free shipping for purchases from 18,000 rubles (300 euros / 350 dollars) to Russia, Ukraine and Kazakhstan, as well as free returns.
          </p>
          <div className="about-right-img">
            <img src={logo} alt="About Us 2" className='about-image-2' style={{paddingBottom: 0, paddingTop: 0}} />
          </div>
        </div>
        <div class='top-deals-container'>
          
        </div>
      </div>
    );
  };

export default About;
