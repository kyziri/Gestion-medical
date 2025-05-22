   import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Title from '../Components/Title/Title'
import Docteur from '../Components/Docteur/Docteur'
import About from '../Components/About/About'
import Appointment from '../Components/Appointment/Appointment'
import Footer from '../Components/Footer/Footer'

export const Accueil = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <div className='container'>
            <Title title1='Nos docteurs' subtitle= 'RENCONTREZ DES MEILLEUR DOCTEURS' ></Title>
            <Docteur/>
            <About/>
        </div>
        <Appointment/>
        <Footer/>
    </div>
  )
}
export default Accueil