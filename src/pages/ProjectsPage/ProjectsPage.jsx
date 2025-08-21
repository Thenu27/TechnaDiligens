import React, { useState, useEffect, useRef } from 'react';
import './ProjectsPage.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProjectModel from '../../components/ProjectModel/ProjectModel';
import { useContext } from 'react';
import { ModelContext } from '../../Context/ModelContext';

const ProjectsPage = () => {
  // const [activeProject, setActiveProject] = useState(null);

  const {model,setModel} = useContext(ModelContext)
  const {selectedDetailsId,SetSelectedDetailsId} = useContext(ModelContext)


  const projects = [
    {
      id: 1,
      title: "Chat-App",
      category: "Web Design",
      description: "A revolutionary online shopping experience with AR product visualization and AI-powered recommendations.",
      image: "ChatApp.png",
    },
    {
      id: 2,
      title: "MONALI TRADERS",
      category: "Business Website.",
      description: "A Company specializing in the import and distribution of Ariel bundles, cable accessories, and electrical fittings.",
      image: "/MonaliProject.png",
    },
    {
      id: 3,
      title: "Real Estate",
      category: "Web Design",
      description: "A comprehensive financial management system with real-time analytics and predictive insights.",
      image: "/RealEstate.png",
    },
        {
      id: 4,
      title: "Travel Jaya",
      category: "Travel Agency Website",
      description: "A comprehensive financial management system with real-time analytics and predictive insights.",
      image: "/TravelJaya.png",
    },
    {
      id: 5,
      title: "Portfolio",
      category: "Environmental Engineer",
      description: "A professional portfolio showcasing expertise in sustainable design, environmental impact assessments, and innovative engineering solutions for eco-friendly development.",
      image: "/Navin-portfolio.png",
    }
  ];


  
  const navigate = useNavigate();
  const goToContact =()=>{
    navigate('/contact');
    window.scrollTo(0,0)
  }

  const handleViewProject =()=>{
    setModel(true)
  }

  const handleIdSelect=(id)=>{
    SetSelectedDetailsId(id)
  }

  return (
    <div className="projects-container">

      <div className="projects-hero">
        <h1 className='project-hero-title'>Our <span className="gradient-text">Projects</span></h1>
        <p className="subtitle">Innovative solutions for forward-thinking clients</p>
        <div className="hero-description">
          <p>We transform complex challenges into elegant digital experiences. Each project represents our commitment to excellence, innovation, and client success.</p>
        </div>

      </div>


      <div className='featured-projects'>
        {projects.map((project)=>{
          return(
              <div className="projects-card" style={{ backgroundImage: `url(${project.image})` }} key={project.id}>
                  <div className="overlay">
                    <button onClick={() => {handleViewProject();handleIdSelect(project.id);}} className="view-btn">View Project</button>
                  </div>
              </div>

          )
        })}

      </div>

      {model && <ProjectModel/>}

<div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let's collaborate to create a digital solution that drives your business forward.</p>
          <button onClick={goToContact} className="cta-button">Start Your Project</button>
        </div>
        <div className="cta-decoration"></div>
      </div>


    </div>
  );
};

export default ProjectsPage; 