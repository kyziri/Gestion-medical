import React from 'react'
import './FormContact.css'

const FormContact = () => {
  return (
    <section className="formcontact-wrapper">
      <div className="formcontact-card">
        <form className="formcontact-form">
          <div className="input-pair">
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
          </div>
          <div className="input-pair">
            <input type="text" placeholder="Votre numéro" />
            <input type="text" placeholder="Votre sujet" />
          </div>
          <textarea placeholder="Votre message" className="message-area"></textarea>
          <div className="formcontact-button-container">
            <button type="submit" className="formcontact-button">Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormContact
