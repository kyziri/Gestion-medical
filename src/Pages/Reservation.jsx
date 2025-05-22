import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import BannerCont from '../Components/BannerCont/BannerCont'
import Contform from '../Components/Contform/Contform'
import Footer from '../Components/Footer/Footer'

export const Reservation = () => {
  return (
    <div>
        <Navbar />
        <BannerCont title="Prendre un rendez-vous" path="Reservation" />
        <Contform />
        <Footer />
    </div>
  )
}

export default Reservation