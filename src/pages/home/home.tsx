import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import profileimage from '../../assets/img/vincent-van-gogh.jpg';
import EPlogo from '../../assets/logo/EP-logo.svg';

const videoUrls = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/V-_O7nl0Ii0",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/7wtfhZwyrcc",
  "https://www.youtube.com/embed/kJQP7kiw5Fk"
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % videoUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + videoUrls.length) % videoUrls.length);
  };

  const currentVideos = videoUrls.slice(currentIndex, currentIndex + 3);

  return (
    <div className='container'>
      <div className="main">
        <div className="picturePart">
          <Link to="/">
            <img className='logo' src={EPlogo} alt="Logo" />
          </Link>
          <img src={profileimage} alt="photo profil"/>
        </div>
        <div className="navPart">
          <div className="list">
            <ul>
              <li>
                <Link to="/biography"><span>Bio</span></Link>
              </li>
              <li>
                <Link to="/sponsors"><span>Sponsors</span></Link>
              </li>
              <li>
                <Link to="/palmares"><span>Palmarès</span></Link>
              </li>
              <li>
                <Link to="/contact"><span>Contact</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="actuality">
        <hr className="custom-hr"/>
        <span className='title-part'>Mes Actus</span>
        <span className='subtitle-part'>Web Série : Edge to Edge</span>
        <div className='carousel'>
          <button className='carousel-button' onClick={prevSlide}>‹</button>
          <div className='video-list'>
            {currentVideos.map((url, index) => (
              <div key={index} className='video-container'>
                <iframe 
                  width="100%" 
                  height="315" 
                  src={url} 
                  title={`YouTube video player ${index}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            ))}
          </div>
          <button className='carousel-button' onClick={nextSlide}>›</button>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          <span>Eliott Piccard </span>
          <span>Eliott Piccard </span>
          <span>Eliott Piccard </span>
          <span>Eliott Piccard </span>
          <span>Eliott Piccard </span>
          <span>Eliott Piccard </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
