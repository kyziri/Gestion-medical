import React from 'react';
import './NotreTravail.css';

const NotreTravail = () => {
  return (
    <section className="notre-trav-section">
      <h2 className="notre-trav-title">Comment on travaille ?</h2>
      <div className="card-wrapper">
        <div className="card">
          <h3 className="card-title">Inscription</h3>
          <p className="card-description">
            Le patient peut s'inscrire ici en fournissant des informations de base.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Prendre un rendez-vous</h3>
          <p className="card-description">
            Le patient peut prendre rendez-vous depuis la page d’accueil ou son espace.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Recevoir un traitement</h3>
          <p className="card-description">
            Les médecins peuvent interagir avec les patients et effectuer les traitements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotreTravail;
