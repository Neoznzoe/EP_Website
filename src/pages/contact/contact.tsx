import React from 'react';
import SectionHeader from '../../component/sectionHeader/sectionHeader';
import './contact.css';  // Assurez-vous d'ajouter les styles CSS nécessaires dans ce fichier
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactPage: React.FC = () => {
  return (
    <div>
      <SectionHeader />
      <div className="content">
        <div className="header">
          <h1>CONTACT</h1>
          <hr />
        </div>
        <div className="contact-container">
          <div className="contact-form">
            <h2 className='form-title'>Envoyer moi un message</h2>
            <form>
              <label htmlFor="name">Nom*</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5}></textarea>

              <button type="submit">SUBMIT</button>
            </form>
          </div>
          <div className="contact-details"> 
            <div className="address">
              <h3 className='adress-title'>Contacter moi directement sur mes réseaux sociaux</h3>
              <div className="icon-flex">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className="icon-3d" />
                </a>
                <a href="https://www.instagram.com/eliott_piccard/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="icon-3d" />
                </a>
                <a href="https://www.linkedin.com/in/eliott-piccard-838ba7240/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon-3d" />
                </a>
                {/* <i className="fa fa-twitter fa-4x icon-3d"></i>
                <i className="fa fa-facebook fa-4x icon-3d"></i>
                <i className="fa fa-instagram fa-4x icon-3d"></i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
