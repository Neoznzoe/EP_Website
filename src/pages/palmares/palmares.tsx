import React from 'react';
import SectionHeader from '../../component/sectionHeader/sectionHeader';
import './palmares.css';
import Footer from '../../component/footer/footer';
import customImage from '../../assets/img/ep_race.jpg'; 

const PalmaresPage: React.FC = () => {
  return (
    <div>
    <SectionHeader backgroundImage={customImage}/>
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
              <div className="podium">
                <h1>Podium</h1>
                <span>3</span>
              </div>
              <div className="top10">
                <h1>Top 10</h1>
                <span>11</span>
              </div>
              <div className="top30">
                <h1>Top 30</h1>
                <span>16</span>
              </div>
            </div>
          </div>
          <div className="worldCupTitle">
            <h1>Coupe du monde</h1>
            <hr />
            <h2>World cup</h2>
            <div className="worldCupContainer">
              <div className="top15">
                <h1>Top 15</h1>
                <span>1</span>
              </div>
              <div className="top30">
                <h1>Top 30</h1>
                <span>3</span>
              </div>
              <div className="top50">
                <h1>Top 50</h1>
                <span>13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PalmaresPage;
