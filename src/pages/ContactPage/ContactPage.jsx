import React, { useEffect, useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  return (
    <div className="contact-container">
      <div className={`contact-card ${visible ? 'visible' : ''}`}>
        <h1 className="title gradient-text">Get in Touch</h1>
        
        <div className="contact-section">
          <div className={`contact-item ${visible ? 'slide-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="icon-container">
              <i className="icon location-icon"></i>
            </div>
            <div className="contact-info">
              <h3>Location</h3>
              <p>Poorwarama Rd,Kirulapone,Colombo 05,Srilanka</p>
            </div>
          </div>
          
          <div className={`contact-item ${visible ? 'slide-in' : ''}`} style={{ animationDelay: '0.5s' }}>
            <div className="icon-container">
              <i className="icon email-icon"></i>
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>thenuliyana@gmail.com</p>
            </div>
          </div>
          
          <div className={`contact-item ${visible ? 'slide-in' : ''}`} style={{ animationDelay: '0.7s' }}>
            <div className="icon-container">
              <i className="icon phone-icon"></i>
            </div>
            <div className="contact-info">
              <h3>Phone</h3>
              <p>+94 76 641 1765</p>
            </div>
          </div>
          
          <div className={`contact-item ${visible ? 'slide-in' : ''}`} style={{ animationDelay: '0.9s' }}>
            <div className="icon-container">
              <i className="icon hours-icon"></i>
            </div>
            <div className="contact-info">
              <h3>Hours</h3>
              <p>Monday - Sunday: 9AM - 8PM</p>
            </div>
          </div>
        </div>
        
        <div className={`social-links ${visible ? 'fade-in' : ''}`}>
          <div className="social-icon twitter"></div>
          <div className="social-icon facebook"></div>
          <div className="social-icon instagram"></div>
          <div className="social-icon linkedin"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;