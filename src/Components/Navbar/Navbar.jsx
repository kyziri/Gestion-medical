// Navbar.jsx
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSticky(window.scrollY > 60);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'scroll-bar' : ''}`}>
      <div className='logo-nk'>
        <Link to="/">
          <h1 className="nav_logonaka">Leamed</h1>
        </Link>
      </div>
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/equipes">Nos équipes</Link></li>
          <li><Link to="/a-propos">A propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/inscription"><FaUser className='logo-icon' /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
