import React from 'react';
import SectionHeader from '../../component/sectionHeader/sectionHeader';
import SponsorCard from '../../component/sponsorComponent/sponsorComponent';
import './sponsors.css';
import LekiImg from '../../assets/logo/sponsorsLogo/leki.jpg';
import PocImg from '../../assets/logo/sponsorsLogo/poc.png';
import EnergiapuraImg from '../../assets/logo/sponsorsLogo/energiapura.jpg';
import ReuschImg from '../../assets/logo/sponsorsLogo/reusch.jpg';
import DynastarImg from '../../assets/logo/sponsorsLogo/dynastar.jpeg';
import LangeImg from '../../assets/logo/sponsorsLogo/lange.png'
import SaisiesImg from '../../assets/logo/sponsorsLogo/saisies.jpg'
import customImage from '../../assets/img/lucas-favre-BRTV55ErUZg-unsplash.jpg'

import Footer from '../../component/footer/footer';

const SponsorsPage: React.FC = () => {
  const sponsors = [
    {
      imageSrc: SaisiesImg,
      title: 'Les Saisies',
      description: 'Another description for a different sponsor or product.',
    },
    {
      imageSrc: LekiImg,
      title: 'Leki',
      description: 'Another description for a different sponsor or product.',
    },
    {
      imageSrc: PocImg,
      title: 'Poc',
      description: 'Another description for a different sponsor or product.',
    },
    {
      imageSrc: EnergiapuraImg,
      title: 'Energiapura',
      description: 'Another description for a different sponsor or product.',
    },
    {
      imageSrc: ReuschImg,
      title: 'Reusch',
      description: 'Another description for a different sponsor or product.',
    },
    {
      imageSrc: DynastarImg,
      title: 'Dynastar',
      description: 'Another description for a different sponsor or product.',
    },
    {
      imageSrc: LangeImg,
      title: 'Lange',
      description: 'Another description for a different sponsor or product.',
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