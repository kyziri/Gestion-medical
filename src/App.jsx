
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './Pages/Accueil'
import Equipes from './Pages/Equipes'
import Apropos from './Pages/Apropos'
import Contact from './Pages/Contact'
import Reservation from './Pages/Reservation'
// import Historique from './Pages/Historique'
import Inscription from './Pages/Inscription/Inscription'
import Connexion from './Pages/Connexion/Connexion'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />


      </Routes>
    </Router>
  )
}

export default App
