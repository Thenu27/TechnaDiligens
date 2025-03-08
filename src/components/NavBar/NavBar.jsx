// components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
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
        <div className="logo">
          <span className="glow">Techna</span>Diligens
        </div>
        
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" onClick={() => {setMenuOpen(false),goToHome()}}>Home</a></li>
          <li className="nav-item"><a href="#services" onClick={() => {setMenuOpen(false), goToServices()}}>Services</a></li>
          <li className="nav-item"><a href="#portfolio" onClick={() => {setMenuOpen(false), goToProjects()}}>Work</a></li>
          <li className="nav-item"><a href="#testimonials" onClick={() => setMenuOpen(false)}>Clients</a></li>
          <li className="nav-item"><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;