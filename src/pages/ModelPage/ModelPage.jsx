import React, { useState, useEffect, useRef } from 'react';
import './ModelPage.css'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProjectModel from '../../components/ProjectModel/ProjectModel';
import { useContext } from 'react';
import { ModelContext } from '../../Context/ModelContext';
import ModelBox from '../../components/ModelBox/ModelBox';

const ModelPage = () => {
  // const [activeProject, setActiveProject] = useState(null);

  const {model,setModel} = useContext(ModelContext)
  const {selectedDetailsId,SetSelectedDetailsId} = useContext(ModelContext)


  const projects = [
    {
      id: 1,
      title: "Three Legged Robot",
      category: "Model",
      description: "A revolutionary online shopping experience with AR product visualization and AI-powered recommendations.",
      image: "/Three-legged-Robot.png",
    },
    {
      id: 2,
      title: "Red Car Model",
      category: "Model",
      description: "A Company specializing in the import and distribution of Ariel bundles, cable accessories, and electrical fittings.",
      image: "/red-car-model.png",
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
        <h1 className='project-hero-title'>Our <span className="gradient-text">3D Models</span></h1>
        <p className="subtitle">Bringing Innovation to Life</p>
        <div className="hero-description">
          <p>We create low-poly 3D models tailored for real-time web experiences. Every asset is carefully crafted for fast loading, seamless interaction, and smooth performance — perfect for websites and online platforms</p>
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

      {model && <ModelBox/>}

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

export default ModelPage; 