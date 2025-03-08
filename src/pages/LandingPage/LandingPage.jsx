// App.js
import React, { useEffect } from 'react';
import './LandingPage.css';
import Navbar from '../../components/NavBar/NavBar';
import Hero from '../../components/Hero/Hero';
// import Portfolio from '../../components/projects/projects';
import Contact from '../../components/contact/contact';
import Footer from '../../components/Footer/Footer';
import InfoSection from '../../components/InfoSection/InfoSection';
import Services from '../../components/Services/Services';

const LandingPage = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the 'animate' class
    document.querySelectorAll('.animate').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="landing-page">
      <Hero />
      <InfoSection/>
      <Services/>
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;