import React from 'react'
import About from '../Components/About/About'
import Notretravail from '../Components/Notretravail/Notretravail'
import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Title/Title'
import BannerCont from '../Components/BannerCont/BannerCont'
import Docteur from '../Components/Docteur/Docteur'
import Footer from '../Components/Footer/Footer'

export const Apropos = () => {
  return (
    <div>
        <Navbar/>
        <BannerCont title="À propos de nous" path="À propos" />
        <About/>
        <div className='container'>
          <Notretravail/>
          <Title title1='Nos docteurs' subtitle= 'RENCONTREZ DES MEILLEUR DOCTEURS' ></Title>
          <Docteur/>
        </div>
        <Footer />
        

    </div>
  )
}

export default Apropos