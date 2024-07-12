import React from 'react';
import './sectionHeader.css';
import { Link } from 'react-router-dom';
import defaultProfileImage from '../../assets/img/quenten-janssen-W_z4awYQgO4-unsplash (1).jpg';

interface SectionHeaderProps {
  backgroundImage?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ backgroundImage = defaultProfileImage }) => {
  return (
    <div>
      <div className="sectionHeader-container">
        <div className="leftPart">
          <Link to="/">
            <h1>
              <span>Eliott</span>
              <span>Piccard</span>
            </h1>
          </Link>
          <img src={backgroundImage} alt="Eliott Piccard" className="profileImage" />
        </div>
        <div className="rightPart">
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
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
