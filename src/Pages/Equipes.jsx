import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Eqbanner from '../Components/Eqbanner/Eqbanner'
import Doc2 from '../Components/Doc2/Doc2'
import Footer from '../Components/Footer/Footer'

export const Equipes = () => {
  return (
    <div>
        <Navbar/>
        <Eqbanner/>
        <div className='container'>
          <Doc2/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Equipes