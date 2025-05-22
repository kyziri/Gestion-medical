import React from 'react'
import './Title.css'

// Ceci  est un composant spécial tous les titres
const Title = ({title1,title2,subtitle,}) => {
  return (
    <div className='title'>
        <h1 className='bleu'>{title1}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default Title