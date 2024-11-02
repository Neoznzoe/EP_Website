import React from 'react';
import SectionHeader from '../../component/sectionHeader/sectionHeader'
import './biography.css';
import Footer from '../../component/footer/footer';
import customImage from '../../assets/img/ep_focus.jpg'

const BiographyPage: React.FC = () => {
  return (
    <div>
      <SectionHeader backgroundImage={customImage}/>
      <div className="content">
        <div className="header">
          <h1>Biographie</h1>  
          <hr />
          <h2>Biography</h2>
        </div>
        <div className="bios">
          <div className="french">
            <span>
                Je m’appelle Eliott Piccard, je viens des Saisies en Savoie et je suis né dans une grande famille de skieurs. Mes valeurs fondamentales sont centrées sur le sport,
                le dépassement de soi ainsi que l’entraide. À cela, vient s’ajouter une touche d’humour et beaucoup de bienveillance (sauf lors des compétitions). <br /><br />
                Mon voyage sportif a commencé à l’âge de trois ans avec le ski alpin. Au fil des ans, j'ai acquis des compétences techniques solides dans cette discipline avant
                d’être recruté en équipe de France de skicross au printemps 2022. Mon bagage technique, mon implication et mon abnégation sont maintenant des atouts précieux dans ma carrière de skicross. <br /><br />
                Le skicross et le sport le plus impressionnants pour les spectateurs, 4 coureurs s'élancent en même temps dans un parcours composé de virages, de compressions et de sauts. Le but est de finir devant ses adversaires. <br /><br />
                Objectifs sur la saison : Intégrer le top 30 mondial Monter sur un podium de coupe du monde. <br /><br />
                Objectif long termes : Décrocher une médaille lors des jeux olympiques et développer le rayonnement de ce sport incroyable.
              </span>
          </div>
          <div className="english">
          <span>
            My name is Eliott Piccard. I'm from Les Saisies in Savoie, and I come from a large family of skiers. My core values revolve around sports, self-improvement, and team spirit, with a touch of humor and a lot of kindness (except during competitions!).<br /><br />

            My sports journey began at the age of three with alpine skiing. Over the years, I have gained strong technical skills, leading to my recruitment into the French Skicross Team in the spring of 2022.
            My technical background, dedication, and perseverance are now valuable assets in my skicross career.<br /><br />

            Skicross is one of the most thrilling sports for spectators: 4 racers launch simultaneously on a course filled with turns, jumps, and bumps. The goal is simple: finish ahead of your opponents.<br /><br />

            Goals for the season: enter the top 30 worldwide and reach a World Cup podium.<br /><br />

            Long-term goals: win an Olympic medal and help raise the profile of this incredible sport.
        </span>  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BiographyPage;
