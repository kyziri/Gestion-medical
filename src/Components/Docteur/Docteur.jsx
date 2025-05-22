import React from 'react'
import './Docteur.css'
import Image1 from '../../assets/doc1.png'
import Image2 from '../../assets/doc2.png'
import Image3 from '../../assets/med-2.png'

export const Docteur = () => {
  return (
    <div className='docteurs'>
        {/* Pour le premier docteur  */}
        <div className="doc">
            <img src={Image1} alt="photos du premier docteur" />
            <div className="caption">
                <h2>Eddy christian</h2>
                <p>Dentiste</p>
                <button className='btn'><a href="#">Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le second docteur */}
        <div className="doc">
            <img src={Image2} alt="photos du second docteur" />
            <div className="caption">
                <h2>SOA RIZIKY</h2>
                <p>Dentiste</p>
                <button className='btn'><a href="#">Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="doc">
            <img src={Image3} alt="photos du dernier docteur" />
            <div className="caption">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a href="#">Prendre rendez-vous</a></button>
            </div>
        </div>


    </div>
  )
}
export default Docteur