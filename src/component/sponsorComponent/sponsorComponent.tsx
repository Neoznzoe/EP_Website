import React from 'react';
import './sponsorComponent.scss';

interface SponsorCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ imageSrc, title, description }) => {
  return (
    <section className="sponsorContainer">
      <div className="sponsorCard">
        <div className="sponsorContent">
          <img className="sponsorLogo" src={imageSrc} alt={title} />
          <h6>{title}</h6>
          <div className="sponsorHover_content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorCard;
