import React from 'react'
import './AllContact.css'

const AllContact = () => {
  return (
    <section className="allcontact-container">
      <div className="contact-card">
        <h3>Numéro de téléphone</h3>
        <p>+261 32 55 671 89</p>
      </div>
      <div className="contact-card">
        <h3>Adresse email</h3>
        <p>leamsikyziri@gmail.com</p>
      </div>
      <div className="contact-card">
        <h3>Adresse physique</h3>
        <p>Lazaret cure - Bloc F28</p>
      </div>
    </section>
  );
};

export default AllContact
