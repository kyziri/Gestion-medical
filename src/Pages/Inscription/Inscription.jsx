import React, { useState } from "react";
import "./Inscription.css";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    date_naiss: "",
    phone: "",
    adresse: "",
    email: "",
    fonction: "Patient",
    mdp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ici, tu pourras appeler ton API pour enregistrer les données
  };

  return (
    <div className="inscription-container">
      <h2>Inscription</h2>
      <form className="inscription-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
          <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="date" name="date_naiss" placeholder="Date de naissance" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Téléphone" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" name="adresse" placeholder="Adresse" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <select name="fonction" onChange={handleChange}>
            <option value="Patient">Patient</option>
            <option value="Docteur">Docteur</option>
            <option value="Admin">Admin</option>
          </select>
          <input type="password" name="mdp" placeholder="Mot de passe" onChange={handleChange} required />
        </div>
        
        <button type="submit">S'inscrire</button>
      </form>
      <p className="redirect">
        Avez-vous déjà un compte ? <a href="/connexion">Connectez-vous ici</a>
      </p>
    </div>
  );
};

export default Inscription;
