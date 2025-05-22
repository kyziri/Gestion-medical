import React from 'react'
import { useNavigate } from 'react-router-dom';
import './About.css'

const About = () => {
  const navigate = useNavigate(); // Initialiser la navigation

  const handleContactClick = () => {
    navigate('/contact'); // Rediriger vers la page contact
  };


  return (
    <div className="apropos-container" >
      <div className="apropos-image"> </div>

      <div className="apropos-text">
        <h2 className="apropos-title">A propos</h2>
        <h3 className="apropos-subtitle">
          Reservez votre rendez-vous en clinique en toute simplicité
        </h3>

        <p className="apropos-description">
          Une solution logicielle de planification de rendez-vous médicaux riche en
          fonctionnalités et complète, visant à offrir une expérience de réservation
          de rendez-vous rapide et fiable aux patients.
        </p>
      
        <div className="services">
          <span>Aide d'urgence</span>
          <span className="dot" />
          <span>Meilleurs docteurs</span>
          <span className="dot" />
          <span>Traitement médical</span>
        </div>

        <button className="btn-cont" onClick={handleContactClick}>
          Contactez-nous
        </button>
      </div>
    </div>
  );
};

export default About;
