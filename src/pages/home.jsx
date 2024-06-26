import React, { useEffect, useState } from 'react';
import '../styles.css'; // Importing CSS for the Home page
import image1 from '../assets/hmgoepprod.jpeg'; // Replace with actual image paths
import image2 from '../assets/hmgoepprod2.jpeg';
import image3 from '../assets/hmgoepprod3.jpeg';
import Navbar from '../components/navbar'

const images = [image1, image2, image3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home'>
        
        <div className="home">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt="Fashion" />
      </div>
      <div className="content">
        {/* <h1>Dress your best<br />Feel <em style={{color:"#FFFF31"}}>sneakers</em> collection</h1> */}
        {/* <h1>Dress your <em style={{color:"#FFFF31"}}>best</em>, <br />Feel your <em style={{color:"#FFFF31"}}>best</em>. </h1> */}
        <div>
          <h1><em style={{color:"#FFFF31"}}>Dress</em> your best, <br /><em style={{color:"#FFFF31"}}>Feel</em> your best.</h1>
        </div>
        <div>
          <p>
            We are a global platform for the footwear industry. Our goal is to unite designers, boutiques, and buyers on one site. TWS offers unique shopping opportunities and the largest selection of leading brands on one platform.
          </p>
        </div>
        <button class="shop-now">
          <span class="shop-now-text">Shop now</span>
        </button>

      </div>
    </div>
    </div>
  );
};

export default Home;