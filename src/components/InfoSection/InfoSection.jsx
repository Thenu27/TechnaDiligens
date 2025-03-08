// import React from 'react';
// import './InfoSection.css';
// import img1 from '../../assets/99fe97fbf7ad5ea0be3f3089e46349b3 2-min.png';
// import img2 from '../../assets/Stunning-pic.png';
// import img3 from '../../assets/laptop.png';
// import img4 from '../../assets/Lightning.png';


// const InfoSection = () => {
//     return (
//         <div className='info-section'>
//             <div className='info-container'>
//                 <div className='info-container-top'>

//                 <div className='info-title-container'>
//                         <h1 className='info-title'><span className='gradient-text'>Cutting</span> Edge <span className='gradient-text'>Web</span> Solutions</h1>
//                 </div>
//                 <div className='info-description-container'>
//                         <p className='info-description'>We build high-performance, modern websites using the latest technologies like HTML,
//                             CSS, JavaScript, React,and Node.js, along with robust database solutions using MongoDB and SQL, ensuring speed,
//                             security, and scalability. Our solutions are tailored to meet your business needs, providing seamless user experiences 
//                             and future-ready digital products.</p>
//                 </div>
//                 </div>
//                 <div className='info-image-container'>
//                     <img className='info-image info-image1' src={img1}/>
//                 </div>
                

//             </div>

//             <div className='info-container'>
//                 <div className='info-container-top'>
//                     <div className='info-title-container'>
//                             <h1 className='info-title'><span className='gradient-text'>Stunning</span> User-Centric <span className='gradient-text'>Design</span></h1>
//                     </div>
//                     <div className='info-description-container'>
//                             <p className='info-description'>Our UI/UX designs are crafted to engage users, improve conversions,
//                                 and make your brand stand out in the digital world. We focus on intuitive navigation, visually 
//                                 appealing aesthetics, and seamless interactions to create memorable user experiences that drive
//                                 growth and customer satisfaction.</p>
//                     </div>
//                     </div>
//                     <div className='info-image-container'>
//                         <img className='info-image' src={img2}/>
//                     </div>

                
               
//             </div>

//             <div className='info-container'>
//             <div className='info-container-top'>

//                     <div className='info-title-container'>
//                             <h1 className='info-title'><span className='gradient-text'>Custom</span> Tailored <span className='gradient-text'>Development</span></h1>
//                     </div>
//                     <div className='info-description-container'>
//                             <p className='info-description'>Every business is unique, and so is our approach. 
//                                 We create custom web solutions that perfectly fit your goals and needs, 
//                                 ensuring a seamless blend of functionality, aesthetics, and performance. 
//                                 Our solutions are tailored to enhance user experience, improve efficiency,
//                                 and drive business growth, giving you a competitive edge in the digital landscape..</p>
//                     </div>
//                     </div>
//                     <div className='info-image-container'>
//                         <img className='info-image' src={img3}/>
//                     </div>
             

//             </div>

//             <div className='info-container'>
//                <div className='info-container-top'>
//                 <div className='info-title-container'>
//                             <h1 className='info-title'><span className='gradient-text'>Performance</span> Optimization</h1>
//                     </div>
//                     <div className='info-description-container'>
//                             <p className='info-description'>In today’s fast-paced digital world, website performance is critical for user experience,
//                                 SEO rankings, and conversion rates. A slow-loading website can lead to high bounce rates, lower engagement,
//                                 and lost revenue. Our performance optimization services ensure that your website runs efficiently, loads quickly,
//                                 and delivers a seamless experience across all devices.</p>
//                     </div>
//                     </div> 
//                     <div className='info-image-container'>
//                         <img className='info-image info-image1' src={img4}/>
//                     </div>
               


//             </div>


//         </div>
//     );
// };

// export default InfoSection

import React, { useEffect, useRef } from 'react';
import './InfoSection.css';
import img1 from '../../assets/99fe97fbf7ad5ea0be3f3089e46349b3 2-min.png';
import img2 from '../../assets/Stunning-pic.png';
import img3 from '../../assets/laptop.png';
import img4 from '../../assets/Lightning.png';

const InfoSection = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  useEffect(() => {
    const observers = sectionRefs.map(ref => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.2 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    });
    
    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs[index].current) {
          observer.unobserve(sectionRefs[index].current);
        }
      });
    };
  }, []);
  
  const sections = [
    {
      title: "Web Development",
      description: " We create custom web solutions that perfectly fit your goals and needs,ensuring a seamless blend of functionality, aesthetics, and performance. Our solutions are tailored to enhance user experience, improve efficiency,and drive business growth, giving you a competitive edge in the digital landscape..",
      image: img1,
      direction: "left"
    },
    {
      title: "Stunning,User Centric Design",
      description: "Our UI/UX designs are crafted to engage users, improve conversions, and make your brand stand out in the digital world. We focus on intuitive navigation, visually appealing aesthetics, and seamless interactions to create memorable user experiences that drive growth and customer satisfaction.",
      image: img2,
      direction: "right"
    },
    {
      title: "E-Commerce Developement",
      description: "Our e-commerce development service creates powerful, user-friendly online stores tailored to boost your sales and grow your business.",
      image:img3,
      direction: "left"
    },
    {
      title: "Performance Optimization",
      description: "In today’s fast-paced digital world, website performance is critical for user experience, SEO rankings, and conversion rates. A slow-loading website can lead to high bounce rates, lower engagement, and lost revenue. Our performance optimization services ensure that your website runs efficiently, loads quickly, and delivers a seamless experience across all devices.",
      image: img4,
      direction: "right"
    }
  ];
  
  return (
    <div className="info-section-container">
      {sections.map((section, index) => (
        <div
          key={index}
          ref={sectionRefs[index]}
          className={`info-section ${section.direction}`}
        >
          <div className="content-wrapper">
            <div className="text-content">
              <h2 className='gradient-text'>{section.title}</h2>
              <p>{section.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="image-container">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
