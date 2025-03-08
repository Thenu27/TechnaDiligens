// App.js
import React, { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import Navbar from './components/NavBar/NavBar';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

const App = () => {
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
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/work' element={<ProjectsPage/>}/>

      </Routes>
    </div>
  );
};

export default App;