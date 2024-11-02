import React from 'react';
import SectionHeader from '../../component/sectionHeader/sectionHeader';
import SponsorCard from '../../component/sponsorComponent/sponsorComponent';
import './sponsors.css';
import LekiImg from '../../assets/logo/sponsorsLogo/leki.jpg';
import TripoinImg from '../../assets/logo/sponsorsLogo/tripoint.svg';
import LookImg from '../../assets/logo/sponsorsLogo/look.png';
import ReuschImg from '../../assets/logo/sponsorsLogo/reusch.jpg';
import DynastarImg from '../../assets/logo/sponsorsLogo/dynastar.jpeg';
import LangeImg from '../../assets/logo/sponsorsLogo/lange.png'
import SaisiesImg from '../../assets/logo/sponsorsLogo/saisies.jpg'
import customImage from '../../assets/img/ep_sponsors.jpg'

import Footer from '../../component/footer/footer';

const SponsorsPage: React.FC = () => {
  const sponsors = [
    {
      imageSrc: SaisiesImg,
      title: 'Les Saisies',
      description: 'Station de coeur depuis ma naissance.',
    },
    {
      imageSrc: LekiImg,
      title: 'Leki',
      description: 'Bâtons pour se battre.',
    },
    {
      imageSrc: TripoinImg,
      title: 'Tripoint',
      description: 'Masque et lunettes de viking.',
    },
    {
      imageSrc: LookImg,
      title: 'Look',
      description: 'Fixation qui restent fixée.',
    },
    {
      imageSrc: ReuschImg,
      title: 'Reusch',
      description: 'Les gants du seigneur.',
    },
    {
      imageSrc: DynastarImg,
      title: 'Dynastar',
      description: 'Ski qui glisse trop.',
    },
    {
      imageSrc: LangeImg,
      title: 'Lange',
      description: 'Chaussures de ski aussi précise qu’un scalpel.',
    },
  ];

  return (
    <div>
      <SectionHeader backgroundImage={customImage} />
      <div className="content">
        <div className="header">
          <h1>Sponsors</h1>
          <hr />
        </div>
      </div>
      <div className="sponsorsListContainer">
        <div className="sponsorsList">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              imageSrc={sponsor.imageSrc}
              title={sponsor.title}
              description={sponsor.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorsPage;