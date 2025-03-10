
import React, { useEffect, useRef } from 'react';
import './InfoSection.css';
import img1 from '/99fe97fbf7ad5ea0be3f3089e46349b3 2-min.png';
import img2 from '/Stunning-pic.png';
import img3 from '/laptop.png';
import img4 from '/Lightning.png';
import { useNavigate } from 'react-router-dom';

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

  const navigate =useNavigate();

  const goToServices =()=>{
    navigate('/services');
    window.scrollTo(0,0);
  }
  
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
              <button onClick={goToServices} className="learn-more-btn">Learn More</button>
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
