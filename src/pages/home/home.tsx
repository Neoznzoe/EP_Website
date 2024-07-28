import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './home.css';
import profileimage from '../../assets/img/vincent-van-gogh.jpg';
import EPlogo from '../../assets/logo/EP-logo.svg';
import Footer from '../../component/footer/footer';

const videoUrls = [
  "https://www.youtube.com/embed/EzkpHQrEwYc",
  "https://www.youtube.com/embed/tpKgKESCpQg",
  "https://www.youtube.com/embed/Btbms6wxb3w",
  "https://www.youtube.com/embed/umm5uT_lrno",
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  const getCurrentVideos = () => {
    if (isMobile) {
      return videoUrls;
    }
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(videoUrls[(currentIndex + i) % videoUrls.length]);
    }
    return result;
  };

  const currentVideos = getCurrentVideos();

  return (
    <>
      <div className='container'>
        <div className="main">
          <div className="picturePart">
            <Link to="/">
              <img className='logo' src={EPlogo} alt="Logo" />
            </Link>
            <img src={profileimage} alt="photo profil" className='profilPicture'/>
          </div>
          <div className="navPart">
            <div className="miniBio">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis placeat provident illum odit cumque dolor reprehenderit eligendi id quae earum numquam, possimus, asperiores mollitia veritatis ut quidem. Nostrum, deserunt!</span>
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/biography">
                    <div className="li-content">
                      <span>Bio</span>
                      <img src="data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 7H0' stroke='%23ECECE9' stroke-width='1.2'/%3E%3Cpath d='M12 1L18 7L12 13' stroke='%23ECECE9' stroke-width='1.2'/%3E%3C/svg%3E%0A" alt="arrow" className="arrow" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/sponsors">
                    <div className="li-content">
                      <span>Sponsors</span>
                      <img src="data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 7H0' stroke='%23ECECE9' stroke-width='1.2'/%3E%3Cpath d='M12 1L18 7L12 13' stroke='%23ECECE9' stroke-width='1.2'/%3E%3C/svg%3E%0A" alt="arrow" className="arrow" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/resultat">
                    <div className="li-content">
                      <span>Résultats</span>
                      <img src="data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 7H0' stroke='%23ECECE9' stroke-width='1.2'/%3E%3Cpath d='M12 1L18 7L12 13' stroke='%23ECECE9' stroke-width='1.2'/%3E%3C/svg%3E%0A" alt="arrow" className="arrow" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <div className="li-content">
                      <span>Contact</span>
                      <img src="data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 7H0' stroke='%23ECECE9' stroke-width='1.2'/%3E%3Cpath d='M12 1L18 7L12 13' stroke='%23ECECE9' stroke-width='1.2'/%3E%3C/svg%3E%0A" alt="arrow" className="arrow" />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-center">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="icon-3d icon-3dHome" />
              </a>
              <a href="https://www.instagram.com/eliott_piccard/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon-3d icon-3dHome" />
              </a>
              <a href="https://www.linkedin.com/in/eliott-piccard-838ba7240/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon-3d icon-3dHome" />
              </a>
            </div>
          </div>
        </div>
        <div className="actuality">
          <hr className="custom-hr"/>
          <span className='title-part'>Mes Actus</span>
          <span className='subtitle-part'>Web Série : Edge to Edge</span>
          <div className='carousel'>
            {!isMobile && <button className='carousel-button' onClick={prevSlide}>‹</button>}
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
            {!isMobile && <button className='carousel-button' onClick={nextSlide}>›</button>}
          </div>
          <div className='indicators'>
            {!isMobile && videoUrls.map((_, index) => (
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
  
  
};

export default HomePage;
