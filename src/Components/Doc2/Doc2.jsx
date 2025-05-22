import React from 'react'
import './Doc2.css'
import Image1 from '../../assets/doc1.png'
import Image2 from '../../assets/doc2.png'
import Image3 from '../../assets/med-2.png'
import Image4 from '../../assets/doc3.png'
import Image5 from '../../assets/doc4.png'
import Image6 from '../../assets/about-img.png'
import Image7 from '../../assets/doc5.png'
import Image8 from '../../assets/doc6.png'
import Image9 from '../../assets/doc7.png'
export const Doc2 = () => {
  return (
    <div className='docteurs-cont'>
        {/* Pour le premier docteur  */}
        <div className="docs">
            <img src={Image1} alt="photos du premier docteur" />
            <div className="captions">
                <h2>Eddy christian</h2>
                <p>Dentiste</p>
                <button className='btn'><a href="#">Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le second docteur */}
        <div className="docs">
            <img src={Image2} alt="photos du second docteur" />
            <div className="captions">
                <h2>SOA RIZIKY</h2>
                <p>Dentiste</p>
                <button className='btn'><a >Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="docs">
            <img src={Image3} alt="photos du dernier docteur" />
            <div className="captions">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a >Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="docs">
            <img src={Image4} alt="photos du dernier docteur" />
            <div className="captions">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a >Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="docs">
            <img src={Image5} alt="photos du dernier docteur" />
            <div className="captions">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a >Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="docs">
            <img src={Image6} alt="photos du dernier docteur" />
            <div className="captions">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a >Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="docs">
            <img src={Image7} alt="photos du dernier docteur" />
            <div className="captions">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a href="#">Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="docs">
            <img src={Image8} alt="photos du dernier docteur" />
            <div className="captions">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a href="#">Prendre rendez-vous</a></button>
            </div>
        </div>

        {/* Pour le troisième docteur */}
        <div className="docs">
            <img src={Image9} alt="photos du dernier docteur" />
            <div className="captions">
                <h2>R. Carina</h2>
                <p>Psychiatrie</p>
                <button className='btn'><a >Prendre rendez-vous</a></button>
            </div>
        </div>


    </div>
  )
}
export default Doc2