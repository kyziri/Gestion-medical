import React, { useState } from "react";
import "./Connexion.css";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      mdp: mdp
    };

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Connexion réussie :", data);

        // Stocker le token si présent (optionnel)
        // localStorage.setItem("token", data.token);

        alert("Connexion réussie !");
        // Rediriger l'utilisateur si besoin : window.location.href = "/dashboard";
      } else {
        alert("Email ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      alert("Erreur de connexion au serveur");
    }
  };

  return (
    <div className="connexion-container">
      <h2>Connexion</h2>
      <form className="connexion-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={mdp}
          onChange={(e) => setMdp(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      <p className="redirect">
        Pas encore de compte ? <a href="/inscription">Inscrivez-vous ici</a>
      </p>
    </div>
  );
};

export default Connexion;
