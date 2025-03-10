// components/Footer.js
import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';


const Footer = () => {

  const navigate = useNavigate();
  const goToServices =()=>{
    navigate('/services');
    window.scrollTo(0,0);
  }

  const goToWork =()=>{
    navigate('/work');
    window.scrollTo(0,0);
  }

  const goToContact =()=>{
    navigate('/contact');
    window.scrollTo(0,0);
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info animate">
            <div className="footer-logo">
              <span className="glow">Techna</span>Diligens
            </div>
            <p>
              We design and develop exceptional digital experiences that help businesses thrive in the digital landscape.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="icon-facebook"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="icon-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="icon-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <i className="icon-github"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links animate">
            <div className="footer-link-group">
              <h3>Services</h3>
              <ul>
                <li><a  onClick={goToServices}>Web Development</a></li>
                <li><a  onClick={goToServices}>UI/UX Design</a></li>
                <li><a  onClick={goToServices}>E-commerce</a></li>
                <li><a  onClick={goToServices}>Portfolio Development</a></li>
                <li><a  onClick={goToServices}>Hosting and Deployment</a></li>

              </ul>
            </div>
            
            <div className="footer-link-group">
              <h3>Company</h3>
              <ul>
                <li><a onClick={goToWork}>Our Work</a></li>
                <li><a onClick={goToContact}>Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h3>Resources</h3>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechnaDiligence. All rights reserved.</p>
          <p>Designed and built with passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;