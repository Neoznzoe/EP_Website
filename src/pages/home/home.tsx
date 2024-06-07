import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import profileimage from '../../assets/img/vincent-van-gogh.jpg';
import EPlogo from '../../assets/logo/EP-logo.svg';

const HomePage: React.FC = () => {
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
