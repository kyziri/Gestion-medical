import React from 'react'
import './Actu.css'
import Image1 from '../../assets/Trano.jpg'
import Image2 from '../../assets/Im1.jpg'
import Image3 from '../../assets/Im2.jpg'

export const Actu = () => {
  return (
    <div className='actualities'>
        {/* Pour le premier docteur  */}
        <div className="actu">
            <img src={Image1} alt="Photo de  construction de pj10" />
            <div className="caption">
                <h2>Eddy christian</h2>
                <p>Dentiste</p>
                {/* <button className='btn'><a >Prendre rendez-vous</a></button> */}
            </div>
        </div>

        {/* Pour le second docteur */}
        <div className="actu">
            <img src={Image2} alt="photos culturelle" />
            <div className="caption">
                <h2>SOA RIZIKY</h2>
                <p>Dentiste</p>
                {/* <button className='btn'><a >Prendre rendez-vous</a></button> */}
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="actu">
            <img src={Image3} alt="photos du dernier docteur" />
            <div className="caption">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                {/* <button className='btn'><a >Prendre rendez-vous</a></button> */}
            </div>
        </div>


    </div>
  )
}
export default Actu