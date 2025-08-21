// components/Hero.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import LaptopExperience from '../../LaptopExperience/LaptopExperience';

const Hero = () => {
  useEffect(() => {
    const heroText = document.querySelector('.hero-text');
    heroText.classList.add('animate-in');

    // Particle animation setup
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.random() * 30 + 150}, ${Math.random() * 30 + 150}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = useNavigate();
  const goToProjects =()=>{
    navigate('/work')
  }

  const goToContacts =()=>{
    navigate('/contact')
  }


  return (
    <div className='hero-section'>
     <canvas id="particle-canvas"></canvas>
     <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className='hero-title'>
            <span className="gradient-text">Transforming</span> Ideas Into
            <span className="gradient-text"> Digital Reality</span>
          </h1>
          <p className='hero-description'>Cutting-edge web solutions for forward-thinking businesses</p>
          <div className="hero-buttons">
            <button onClick={goToProjects} className="btn primary-btn hero-btn">Our Work</button>
            <button onClick={goToContacts} className="btn secondary-btn hero-btn">Get in Touch</button>
          </div>
        </div>
      </div>
      <div className='laptop-hero-experience'>
          <LaptopExperience/>
      </div>
      </section>
    </div>

   
  );
};

export default Hero;