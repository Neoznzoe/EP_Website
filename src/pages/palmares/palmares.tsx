import React from 'react';
import SectionHeader from '../../component/sectionHeader/sectionHeader';
import './palmares.css'

const PalmaresPage: React.FC = () => {
  return (
    <div>
      <SectionHeader></SectionHeader>
      <div className="content">
        <div className="header">
          <h1>Résultats</h1>
          <hr />
          <h2>Results</h2>
        </div>
        <div className="palmaresContainer">
          <div className="euroCupTitle">
            <h1>Coupe d'europe</h1>
            <hr />
            <h2>European cup</h2>
            <div className="euroCupContainer">
              
            </div>
          </div>
          <div className="worldCupTitle">
            <h1>Coupe du monde</h1>
            <hr />
            <h2>World cup</h2>
            <div className="worldCupContainer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalmaresPage;
