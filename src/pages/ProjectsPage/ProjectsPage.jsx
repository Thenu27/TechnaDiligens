import React, { useState, useEffect, useRef } from 'react';
import './ProjectsPage.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Chat-App",
      category: "Business Website.",
      description: "A revolutionary online shopping experience with AR product visualization and AI-powered recommendations.",
      image: "ChatApp.png",
      client: "FutureRetail Inc.",
      technologies: ["React", "Node.js", "MongoDB", "WebGL", "TensorFlow"],
      results: {
        conversionRate: "+43%",
        userEngagement: "+67%",
        salesIncrease: "+51%"
      },
      featured: true
    },
    {
      id: 2,
      title: "MONALI TRADERS",
      category: "Business Website.",
      description: "A Company specializing in the import and distribution of Ariel bundles, cable accessories, and electrical fittings.",
      image: "/MonaliProject.png",
      client: "ConnectWell Technologies",
      technologies: ["React Native", "GraphQL", "Firebase", "Redux", "AWS"],
      results: {
        userRetention: "+38%",
        dailyActiveUsers: "2.3M",
        userGrowthRate: "+28%"
      },
      featured: true
    },
    {
      id: 3,
      title: "Real Estate",
      category: "Web Design",
      description: "A comprehensive financial management system with real-time analytics and predictive insights.",
      image: "/RealEstate.png",
      client: "GlobalBank Financial",
      technologies: ["Angular", "Node.js", "PostgreSQL", "D3.js", "WebSockets"],
      results: {
        processingTime: "-62%",
        userSatisfaction: "+47%",
        operationalEfficiency: "+53%"
      },
      featured: true
    }
    // {
    //   id: 4,
    //   title: "Real Estate",
    //   category: "Business Website",
    //   description: "An immersive travel discovery platform with personalized itineraries and virtual destination previews.",
    //   image: "/src/assets/RealEstate.png",
    //   client: "Nomad Ventures",
    //   technologies: ["Vue.js", "Django", "PostgreSQL", "Three.js"],
    //   results: {
    //     bookingConversions: "+41%",
    //     returnVisitors: "+52%",
    //     averageSessionTime: "15:27"
    //   }
    // },
    // {
    //   id: 5,
    //   title: "PulseHealth Monitoring App",
    //   category: "mobile",
    //   description: "A comprehensive health tracking application with wearable device integration and medical professional connectivity.",
    //   image: "/api/placeholder/600/400",
    //   client: "MediTech Innovations",
    //   technologies: ["Flutter", "Firebase", "Swift", "TensorFlow Lite"],
    //   results: {
    //     userAdherence: "+74%",
    //     dataAccuracy: "+68%",
    //     userRetention: "+59%"
    //   }
    // },
    // {
    //   id: 6,
    //   title: "CloudScale Analytics Platform",
    //   category: "enterprise",
    //   description: "Enterprise-grade data analytics platform with real-time processing and intuitive visualization tools.",
    //   image: "/api/placeholder/600/400",
    //   client: "DataStream Corp",
    //   technologies: ["React", "Python", "Apache Kafka", "Elasticsearch", "Docker"],
    //   results: {
    //     dataProcessingSpeed: "+829%",
    //     decisionMakingTime: "-67%",
    //     costReduction: "42%"
    //   },
    //   featured: true
    // }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  const navigate = useNavigate();
  const goToContact =()=>{
    navigate('/contact');
    window.scrollTo(0,0)
  }

  return (
    <div className="projects-container">
      <div 
        className="cursor-follower" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }} 
      />

      <div className="projects-hero">
        <h1 className='project-hero-title'>Our <span className="gradient-text">Projects</span></h1>
        <p className="subtitle">Innovative solutions for forward-thinking clients</p>
        <div className="hero-description">
          <p>We transform complex challenges into elegant digital experiences. Each project represents our commitment to excellence, innovation, and client success.</p>
        </div>
        {/* <button className="scroll-button" onClick={scrollToProjects}>
          <span>Explore Our Work</span>

        </button> */}
      </div>

      <div className="featured-projects">
        {/* <h2>Featured <span className="highlight">Projects</span></h2> */}
        <div className="featured-grid">
          {projects.filter(project => project.featured).map(project => (
            <div 
              key={project.id} 
              className="featured-item"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="featured-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <h3>{project.title}</h3>
                  <span className="category-tag">{project.category}</span>
                </div>
              </div>
              <div className={`featured-info ${activeProject === project.id ? 'active' : ''}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="client-info">
                  <span>Client:</span> {project.client}
                </div>
                <div className="project-stats">
                  <div className="stat">
                    <span className="stat-value">{project.results.conversionRate || project.results.userRetention || project.results.processingTime || project.results.dataProcessingSpeed}</span>
                    <span className="stat-label">Improvement</span>
                  </div>
                </div>
                <button className="view-project-btn">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>

<div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let's collaborate to create a digital solution that drives your business forward.</p>
          <button onClick={goToContact} className="cta-button">Start Your Project</button>
        </div>
        <div className="cta-decoration"></div>
      </div>

      <div className="background-grid">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="grid-dot" 
            style={{ 
              animationDelay: `${Math.random() * 5}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 