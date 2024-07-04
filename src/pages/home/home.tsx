import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './home.css';
import profileimage from '../../assets/img/vincent-van-gogh.jpg';
import EPlogo from '../../assets/logo/EP-logo.svg';

const videoUrls = [
  "https://www.youtube.com/embed/EzkpHQrEwYc",
  "https://www.youtube.com/embed/tpKgKESCpQg",
  "https://www.youtube.com/embed/Btbms6wxb3w",
  "https://www.youtube.com/embed/umm5uT_lrno",
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  const getCurrentVideos = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(videoUrls[(currentIndex + i) % videoUrls.length]);
    }
    return result;
  };

  const currentVideos = getCurrentVideos();

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
          <div className="miniBio">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis placeat provident illum odit cumque dolor reprehenderit eligendi id quae earum numquam, possimus, asperiores mollitia veritatis ut quidem. Nostrum, deserunt!</span>
          </div>
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
          <div className="flex-center">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="icon-3d" />
            </a>
            <a href="https://www.instagram.com/eliott_piccard/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon-3d" />
            </a>
            <a href="https://www.linkedin.com/in/eliott-piccard-838ba7240/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-3d" />
            </a>
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
        <div className='indicators'>
          {videoUrls.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
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
