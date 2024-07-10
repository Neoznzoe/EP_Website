import React from 'react';
import './sectionHeader.css';
import { Link } from 'react-router-dom';

const SectionHeader: React.FC = () => {
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
        </div>
        <div className="rightPart">
          <div className="list">
            <ul>
              <li>
                <Link to="/biography"><span>Bio</span></Link>
              </li>
              <li>
                <Link to="/sponsors"><span>Sponsors</span></Link>
              </li>
              <li>
                <Link to="/resultat"><span>Résultats</span></Link>
              </li>
              <li>
                <Link to="/contact"><span>Contact</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
