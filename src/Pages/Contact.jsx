import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import BannerCont from '../Components/BannerCont/BannerCont'
import FormContact from '../Components/FormContact/FormContact'
import AllContact from '../Components/AllContact/AllContact'
import Footer from '../Components/Footer/Footer'

export const Contact = () =>{
  return (
    <div>
        <Navbar />
        <BannerCont title="Contactez-nous" path="Contact" />
        <FormContact />
        <AllContact />
        <Footer />
    </div>
  )
}

export default Contact