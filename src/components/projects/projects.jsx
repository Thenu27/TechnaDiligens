// // components/Portfolio.js
// import React, { useState } from 'react';
// import './projects.css';

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
  
//   const projects = [
//     {
//       id: 1,
//       title: 'E-commerce Platform',
//       category: 'web',
//       image: '/api/placeholder/600/400',
//       description: 'A full-featured online store with advanced filtering and payment processing.'
//     },
//     {
//       id: 2,
//       title: 'Fitness Tracking App',
//       category: 'mobile',
//       image: '/api/placeholder/600/400',
//       description: 'Cross-platform mobile application for tracking workouts and nutrition.'
//     },
//     {
//       id: 3,
//       title: 'Corporate Dashboard',
//       category: 'ui',
//       image: '/api/placeholder/600/400',
//       description: 'Interactive data visualization dashboard for business analytics.'
//     },
//     {
//       id: 4,
//       title: 'Real Estate Marketplace',
//       category: 'web',
//       image: '/api/placeholder/600/400',
//       description: 'Property listing platform with advanced search and filtering.'
//     },
//     {
//       id: 5,
//       title: 'Restaurant Ordering System',
//       category: 'mobile',
//       image: '/api/placeholder/600/400',
//       description: 'Mobile app for table reservations and food ordering.'
//     },
//     {
//       id: 6,
//       title: 'Finance Management UI',
//       category: 'ui',
//       image: '/api/placeholder/600/400',
//       description: 'Modern interface design for personal finance management.'
//     },
//   ];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="portfolio" className="portfolio">
//       <div className="section-container">
//         <div className="section-header animate">
//           <h2>Our <span className="highlight">Portfolio</span></h2>
//           <p>Explore our recent projects and successful client collaborations</p>
//         </div>
        
//         <div className="portfolio-filters animate">
//           <button 
//             className={activeFilter === 'all' ? 'active' : ''} 
//             onClick={() => setActiveFilter('all')}
//           >
//             All
//           </button>
//           <button 
//             className={activeFilter === 'web' ? 'active' : ''} 
//             onClick={() => setActiveFilter('web')}
//           >
//             Web
//           </button>
//           <button 
//             className={activeFilter === 'mobile' ? 'active' : ''} 
//             onClick={() => setActiveFilter('mobile')}
//           >
//             Mobile
//           </button>
//           <button 
//             className={activeFilter === 'ui' ? 'active' : ''} 
//             onClick={() => setActiveFilter('ui')}
//           >
//             UI/UX
//           </button>
//         </div>
        
//         <div className="portfolio-grid">
//           {filteredProjects.map(project => (
//             <div key={project.id} className="portfolio-item animate">
//               <div className="portfolio-image">
//                 <img src={project.image} alt={project.title} />
//                 <div className="portfolio-overlay">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                   <button className="btn view-project">View Project</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;