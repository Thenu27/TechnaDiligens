import React, { useState, useEffect } from 'react';
import './ServicesPage.css';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedInfo, setExpandedInfo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleExpandedInfo = (id) => {
    setExpandedInfo(expandedInfo === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Crafting visually stunning, user-centric designs that captivate and convert. We blend aesthetics with functionality to create interfaces that leave lasting impressions.",
      icon: "✦",
      color: "#6C63FF",
      extendedInfo: {
        subservices: ["UI/UX Research", "Wireframing", "Prototype Design", "Responsive Layouts"],
        tools: ["Figma"]
      }
    },
    {
      id: 2,
      title: "Full-Stack Development",
      description: "End-to-end solutions built with cutting-edge technologies. From robust backends to responsive frontends, we build scalable applications that perform flawlessly.",
      icon: "⬢",
      color: "#4CAF50",
      extendedInfo: {
        subservices: ["Frontend Development", "Backend Systems", "Database Architecture", "System Integration"],
        tools: ["React", "Node.js", "Python", "MongoDB", "PostgreSQL"]
      }
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      description: "Custom online stores that drive sales and enhance customer experience. Secure payment gateways, inventory management, and seamless checkout processes.",
      icon: "◎",
      color: "#FF5722",
      extendedInfo: {
        subservices: ["Store Setup", "Payment Integration", "Inventory Systems"],
        tools: ["React", "Node.js", "MongoDB", "Stripe"]
      }
    },
    {
      id: 4,
      title: "Portfolio Development",
      description: "custom portfolio website development to help individuals and businesses showcase their work professionally. Whether you’re a freelancer, designer, developer, or business owner, a well-crafted portfolio enhances your online presence and credibility.",
      icon: "⬡",
      color: "#2196F3",
      extendedInfo: {
        subservices: ["Custom Design", "Mobile-Friendly Design", "Contact & Inquiry Forms", "Easy Content Management"],
        tools: ["React", "Node.js", "Bootstrap", "Tailwind"]
      }
    },
    {
      id: 5,
      title: "Hosting and Deployment",
      description: "We provide professional hosting and deployment services for all types of websites.Whether you need a simple static site or a scalable full-stack solution, We ensure secure, fast, and reliable hosting with seamless deployment.",
      icon: "⟡",
      color: "#9C27B0",
      extendedInfo: {
        subservices: ["PM2 & Nginx Setup", "SSL Security & Domain Setup", "Database Hosting", "Microservices"],
        tools: ["Hostinger VPS ", "Digital Ocean", "Vercel"]
      }
    },
    // {
    //   id: 6,
    //   title: "Performance Optimization",
    //   description: "Speed up your digital presence. We analyze, refine, and enhance your existing applications to deliver lightning-fast experiences that boost conversion rates.",
    //   icon: "◈",
    //   color: "#FFC107",
    //   extendedInfo: {
    //     subservices: ["Speed Testing", "Code Refactoring", "Database Optimization", "Caching Strategies"],
    //     tools: ["Lighthouse", "WebPageTest", "Chrome DevTools", "Redis"]
    //   }
    // }
  ];

  const testimonials = [
    {
      id: 1,
      client: "Sarah Johnson",
      company: "TechVision Inc.",
      content: "The team delivered beyond our expectations. Our new platform saw a 43% increase in user engagement within the first month.",
      avatar: "SJ"
    },
    {
      id: 2,
      client: "Marcus Chen",
      company: "Retail Evolution",
      content: "Our e-commerce conversion rates have doubled since launching the new site. Their attention to detail and optimization strategies made all the difference.",
      avatar: "MC"
    },
    {
      id: 3,
      client: "Elena Rodriguez",
      company: "Global Finance",
      content: "Exceptional work on our mobile app. The intuitive design and seamless performance have received outstanding feedback from our customers.",
      avatar: "ER"
    }
  ];

  const navigate = useNavigate();
  const goToContact =()=>{
    navigate('/contact');
    window.scrollTo(0,0)
  }
  return (
    <div className="services-container">

      <div className="services-header">
        <h1>Our <span className="gradient-text">Services</span></h1>
        <p className="subtitle">Transforming visions into digital reality</p>
        <div className="header-description">
          <p>We combine technical expertise with creative innovation to deliver digital experiences that exceed expectations. Our holistic approach ensures that every project we undertake is strategically aligned with your business objectives and user needs.</p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-item ${activeService === service.id ? 'active' : ''} ${expandedInfo === service.id ? 'expanded' : ''}`}
            style={{ '--service-color': service.color }}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button 
                className="expand-button"
                onClick={() => toggleExpandedInfo(service.id)}
              >
                {expandedInfo === service.id ? 'Show Less' : 'Learn More'}
              </button>
              
              {expandedInfo === service.id && (
                <div className="extended-info">
                  <div className="subservices">
                    <h3>What We Offer</h3>
                    <ul>
                      {service.extendedInfo.subservices.map((subservice, idx) => (
                        <li key={idx}>{subservice}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tools">
                    <h3>Tools & Technologies</h3>
                    <div className="tools-list">
                      {service.extendedInfo.tools.map((tool, idx) => (
                        <span key={idx} className="tool-badge">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="service-hover-effect" />
            </div>
          </div>
        ))}
      </div>

      <div className="process-section">
        <h2>Our <span className="gradient-text">Process</span></h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Discovery</h3>
            <p>We start by understanding your business, goals, and target audience to establish clear objectives.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Strategy</h3>
            <p>Developing a comprehensive plan that aligns technology solutions with your business requirements.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Design & Development</h3>
            <p>Creating visually stunning and functionally robust solutions through iterative collaboration.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Testing & Launch</h3>
            <p>Rigorous quality assurance followed by a smooth deployment and launch strategy.</p>
          </div>
        </div>
      </div>

      {/* <div className="testimonials-section">
        <h2>Client <span className="highlight">Testimonials</span></h2>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.client}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to <span className='gradient-text'>Transform Your Digital</span> Presence?</h2>
          <p>Let's collaborate to create exceptional digital experiences that drive growth and engagement.</p>
          <button onClick={goToContact} className="cta-button">Get in Touch</button>
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

export default ServicesPage;