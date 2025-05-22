import React from 'react';
import { Link } from 'react-router-dom';
import './BannerCont.css';

const BannerCont = ({ title, path }) => {
  return (
    <section className="contact-banner">
      <div className="contact-banner-content">
        <h2 className="contact-title">{title}</h2>
        <p className="contact-breadcrumb">
          <Link to="/" className="breadcrumb-link">Accueil</Link> / {path}
        </p>
      </div>
    </section>
  );
};

export default BannerCont;
