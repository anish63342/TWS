import React, { useState } from 'react';
import '../styles.css';
import demoImage from '../assets/hmgoepprod2.jpeg'; // Update with the correct path
import playbtn from '../assets/play button.gif';

const Demo = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setVideoPlaying(true);
  };

  return (
    <div className="demo-container">
      <h1 className="demo-title">Adizero running</h1>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <p className="demo-subtitle">
        Created by design experts and pro athlete feedback, with innovative technologies that help you take your run to the next level.
        Check out the new models of the Adizero running franchise.
      </p>
      </div>
      <div className="demo-media">
        {videoPlaying ? (
          <iframe
            className="demo-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="demo-image-container" onClick={handlePlayButtonClick}>
            <img src={demoImage} alt="Adizero Running" className="demo-image" loading="lazy" />
            <img src={playbtn} alt="Play Button" className="play-button" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
