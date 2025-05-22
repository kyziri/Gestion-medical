import React from 'react';
import './Contform.css';

const FormContact = () => {
  return (
    <div className="formcontact-container">
      <h2 className="form-title">Réserver un rendez-vous</h2>

      <form className="form-fields">
        <div className="form-row">
          <div className="form-group">
            <label>Votre nom</label>
            <input type="text" placeholder="Entrez votre nom" />
          </div>
          <div className="form-group">
            <label>Votre prénom</label>
            <input type="text" placeholder="Entrez votre prénom" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Votre email</label>
            <input type="email" placeholder="exemple@mail.com" />
          </div>
          <div className="form-group">
            <label>Sélectionnez un docteur</label>
            <select>
              <option>Dr. Rasoazanany</option>
              <option>Dr. Rakotobe</option>
              <option>Dr. Ramanandraibe</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Sélectionnez une date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Mode de paiement</label>
            <select>
              <option>Carte bancaire</option>
              <option>Mobile Money</option>
              <option>Espèces</option>
            </select>
          </div>
        </div>

        <button className="btn-submit">Confirmer</button>
      </form>
      
        {/* Disponibilité */}
        <div className="status-info">
          <span>Créneaux disponibles :</span>
          <span className="status">
            <span className="box reserved" />
            Réservé
          </span>
          <span className="status">
            <span className="box available" />
            Disponible
          </span>
        </div>
    </div>
  );
};

export default FormContact;
