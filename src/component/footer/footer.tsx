import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import LekiImg from '../../assets/logo/sponsorsLogo/leki.jpg';
import PocImg from '../../assets/logo/sponsorsLogo/poc.png';
import EnergiapuraImg from '../../assets/logo/sponsorsLogo/energiapura.jpg';
import ReuschImg from '../../assets/logo/sponsorsLogo/reusch.jpg';
import DynastarImg from '../../assets/logo/sponsorsLogo/dynastar.jpeg';
import LangeImg from '../../assets/logo/sponsorsLogo/lange.png'
import SaisiesImg from '../../assets/logo/sponsorsLogo/saisies.jpg';

const sponsorLogos = [
  { src: LekiImg, alt: 'Leki', href: 'https://www.leki.com' },
  { src: PocImg, alt: 'Poc', href: 'https://www.pocsports.com' },
  { src: EnergiapuraImg, alt: 'Energiapura', href: 'https://www.energiapura.info' },
  { src: ReuschImg, alt: 'Reusch', href: 'https://www.reusch.com' },
  { src: DynastarImg, alt: 'Dynastar', href: 'https://www.dynastar.com' },
  { src: LangeImg, alt: 'Lange', href: 'https://www.lange-boots.com' },
  { src: SaisiesImg, alt: 'Saisies', href: 'https://www.lessaisies.com' },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footerSocials">
            <div className="footerIcons">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} id='footerIcon' className="footerIcon icon-3dHome" />
                </a>
                <a href="https://www.instagram.com/eliott_piccard/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} id='footerIcon' className="footerIcon icon-3dHome" />
                </a>
                <a href="https://www.linkedin.com/in/eliott-piccard-838ba7240/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} id='footerIcon' className="footerIcon icon-3dHome" />
                </a>
            </div>
        </div>
        <div className="footerCreator">
            Création: Victor Besson
        </div>
      </div>
      <div className="footer-right">
        <div className="footerSponsors">
          {sponsorLogos.map((logo, index) => (
            <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} className="footerSponsorLogo" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;