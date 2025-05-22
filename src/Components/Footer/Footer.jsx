import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Lazaret cur</p>
          <p>+261 32 55 671 89</p>
          <p>ismaelrizikyir@gmail.com</p>
          <p>Suivez-nous sur</p>
          <div className="social-icons">
            <div className="icon facebook" />
            {/* Ajoute d'autres icônes si tu veux */}
          </div>
        </div>

        <div className="footer-section categories">
          <h2>Catégories</h2>
          <p href="Accueil.jsx"> Accueil</p>
          <p>Nos équipes</p>
          <p>A propos</p>
          <p>Contact</p>
        </div>
        <div className="footer-section info">
          <h2>Information</h2>
          <p>Qui sommes-nous ?</p>
          <p>Nous contacter</p>
        </div>

      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        ©2025 Leamed. Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
