import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'code',
      title: 'E-Commerce',
      description: 'Build high-performing online stores with secure payment integration'
    },
    {
      id: 2,
      icon: 'smartphone',
      title: 'Portfolio',
      description: 'Showcase your work with sleek, professional, and fully responsive portfolio websites that leave a lasting impression.'
    },
    {
      id: 3,
      icon: 'bar-chart',
      title: 'Custom Web Development',
      description: ' Tailor-made websites built with modern technologies, optimized for performance, scalability, and user experience.'
    },
    {
      id: 4,
      icon: 'layers',
      title: 'UI/UX Design',
      description: 'We create visually stunning and user-friendly interfaces that enhance engagement and provide seamless navigation..'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header animate">
          <h2>Our <span className="gradient-text">Services</span></h2>
          <p>We deliver exceptional digital experiences through our specialized services</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card animate">
              <div className="icon-container">
                <i className={`icon-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="learn-more">
                Learn More
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;