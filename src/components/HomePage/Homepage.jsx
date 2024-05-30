import React, { useState, useEffect } from 'react';

import video from "../../Assets/v1.mp4";
import b1 from "../../Assets/b1.png";
import b2 from "../../Assets/b2.jpeg";
import b3 from "../../Assets/b3.png";

const br = "<br/>";
const banners = [
  { id: 1, src: video, type: 'video',title:"Lead Businness into ",highlight:"Future",subtitle:'BY HARNESSING CUTTING-EDGE AI AND BLOCKCHAIN KNOWLEDGE' },
  { id: 2, src: b1, type: 'image',title:"BY UNLEASHING THE POWER OF ",highlight:"AI AND BLOCKCHAIN",subtitle:'Work Smarter ,Not Harder'},
  { id: 3, src: b2, type: 'image' ,title:"AI CERTS IS LEADING THE CHARGE  ",highlight:"IN BUSINESS EVOLUTION",subtitle:'From Data to Decisions'},
  { id: 4, src: b3, type: 'image' ,title:"MASTER AI AND BLOCKCHAIN WITH  ",highlight:"AI CERTS",subtitle:'Expand Your Horizons'},
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="hero-banner">
      <div className="banner-container" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
        {banners.map((banner) => (
          <div key={banner.id} className="banner">
            {banner.type === 'video' ? (
              <video src={banner.src} autoPlay loop muted className='video'/>
            ) : (
              <img src={banner.src} alt={`Banner ${banner.id}`}/>
            )}

            <div className="banner-content">
               <h1 className='title'>{banner.title}<span>{banner.highlight}</span></h1>
                <p>{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
