import React, { useState } from "react";
import './Appointment.css';
import rendezVousImage from "../../assets/111.png";
import { Autocomplete, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const medecins = [
  "Dr. Rasoazanany",
  "Dr. Rakotobe",
  "Dr. Ramanandraibe",
  "Dr. Ravelonjatovo",
  "Dr. Randrianasolo",
];

const Appointment = () => {
  const navigate = useNavigate();

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMedecin, setSelectedMedecin] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = () => {
    if (nom && prenom && email && selectedMedecin && selectedDate) {
      navigate('/reservation', {
        state: {
          nom,
          prenom,
          email,
          medecin: selectedMedecin,
          date: selectedDate.toISOString(), // format ISO pour transfert
        },
      });
    } else {
      alert("Veuillez remplir tous les champs avant de continuer.");
    }
  };

  return (
    <section className="rendezvous-container">
      <div className="rendezvous-bg">
        <div className="rendezvous-card">
          <div className="rendezvous-left">
            <img src={rendezVousImage} alt="Rendez vous image" className="rendezvous-image" />
          </div>
          <div className="rendezvous-right">
            <h2 className="rendezvous-title">Prendre un rendez-vous</h2>

            <div className="input-group">
              <input type="text" placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)} />
              <input type="text" placeholder="Votre prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            </div>

            <input type="email" className="single-input" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <div className="input-group">
              <Autocomplete
                options={medecins}
                value={selectedMedecin}
                onChange={(event, newValue) => setSelectedMedecin(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Sélectionnez un docteur"
                    className="autocomplete-input"
                  />
                )}
                sx={{ flex: 1 }}
              />

              <div className="date-picker-wrapper">
                <FaCalendarAlt className="date-icon" />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Sélectionnez une date"
                  className="date-input"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            <button className="rendezvous-button" onClick={handleSubmit}>
              Prendre un rendez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
