// components/Navbar.js
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const goToHome = ()=>{
    navigate('/');
    window.scrollTo(0,0)

  }

  const goToServices = ()=>{
    navigate('/services');
    window.scrollTo(0,0)
  }

  const goToProjects = ()=>{
    navigate('/work');
    window.scrollTo(0,0)
  }

    const goToModels = ()=>{
    navigate('/model');
    window.scrollTo(0,0)
  }

  const goToContact=()=>{
    navigate('/contact')
        window.scrollTo(0,0)

  }

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div onClick={()=>goToHome()} className="logo">
          <span className="glow">Techna</span>Diligens
        </div>
        
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a  onClick={() => {setMenuOpen(false),goToHome()}}>Home</a></li>
          <li className="nav-item"><a  onClick={() => {setMenuOpen(false), goToServices()}}>Services</a></li>
          <li className="nav-item"><a  onClick={() => {setMenuOpen(false), goToProjects()}}>Work</a></li>
          <li className="nav-item"><a  onClick={() => {setMenuOpen(false), goToModels()}}>3D Models</a></li>          
          <li className="nav-item"><a   onClick={() => {setMenuOpen(false), goToContact()}}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;