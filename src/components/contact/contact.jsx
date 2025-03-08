// components/Contact.js
import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header animate">
          <h2>Get in <span className="highlight">Touch</span></h2>
          <p>Have a project in mind? Let's discuss how we can help</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info animate">
            <div className="contact-item">
              <div className="icon-container">
                <i className="icon-map-pin"></i>
              </div>
              <div>
                <h3>Our Location</h3>
                <p>123 Tech Hub, Innovation District, CA 90210</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon-container">
                <i className="icon-mail"></i>
              </div>
              <div>
                <h3>Email Us</h3>
                <p>hello@nexusdev.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon-container">
                <i className="icon-phone"></i>
              </div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form animate" onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                id="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="btn primary-btn submit-btn">
              Send Message
              <span className="btn-glow"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;