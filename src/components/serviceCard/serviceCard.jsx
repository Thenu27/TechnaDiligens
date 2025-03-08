import React from 'react';
import './serviceCard.css';
import { FiCode, FiSmartphone, FiTrendingUp, FiCloud } from 'react-icons/fi';

const ServiceCard = ({ service }) => {
  // Map service icons to actual React components
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <FiCode className="service-icon" />;
      case 'mobile':
        return <FiSmartphone className="service-icon" />;
      case 'analytics':
        return <FiTrendingUp className="service-icon" />;
      case 'cloud':
        return <FiCloud className="service-icon" />;
      default:
        return <FiCode className="service-icon" />;
    }
  };

  return (
    <div className="service-card">
      <div className="service-card-header">
        {getIcon(service.icon)}
        <h3>{service.title}</h3>
      </div>
      <p className="service-description">{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>
            <span className="feature-bullet"></span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="learn-more-btn">Learn More</button>
    </div>
  );
};

export default ServiceCard;