import './ProjectModel.css'
import { useContext } from 'react'
import { ModelContext } from '../../Context/ModelContext';

  const projectDetails = [
     {
         id: 1,
         title: "Modern Landing Page Design",
         category: "UI/UX Design",
         description: "We designed a sleek and modern landing page tailored to a client who wanted a clean and visually appealing online presence. The design was created in Figma, with a focus on simplicity, clarity, and conversion. To ensure the visual experience felt premium yet relatable, we selected high-resolution, royalty-free images from Unsplash, carefully chosen to align with the brand's tone and industry.",
         details: "Additional design polishing and asset enhancements were done using Adobe Photoshop, including minor retouching, background cleanup, and custom overlays to maintain a consistent color theme. The final design was optimized for desktop and mobile layouts, brand consistency with proper font and color usage, and user experience through clear CTAs and visual hierarchy. The client was thrilled with how professional and modern their landing page looked — simple, elegant, and focused on results.",
         toolsUsed: ['Figma', 'Adobe Photoshop'],
         image: "/ChatApp.png",
        },
{
  id: 2,
  title: "MONALI TRADERS",
  category: "Business Website",
  description: "A company specializing in the import and distribution of Ariel bundles, cable accessories, and electrical fittings. They needed a clean and professional online presence to showcase their product range and attract more business clients.",
  details: "We developed a responsive business website that clearly presents Monali Traders' product offerings and services. The site features a product catalog, contact form, and essential company information. The design reflects a straightforward and trustworthy brand image, with easy navigation for both desktop and mobile users. Our goal was to build credibility and enable inquiries through the website.",
  toolsUsed: ["React", "Node.js", "MongoDB", "CSS3", "Photoshop"],
  image: "/MonaliProject.png",
  link:'https://www.monali-traders.com/'
}
,
{
  id: 3,
  title: "Real Estate Landing Page Design",
  category: "UI/UX Design",
  description: "The client needed a modern and visually attractive landing page to establish a strong and professional online presence in the real estate industry. Our goal was to create a design that would inspire trust, showcase the brand’s professionalism, and appeal to high-value property clients.",
  details: "The landing page was designed in Figma with a clean layout, focused visual hierarchy, and strategic use of space to drive user attention toward calls to action. We used high-quality, royalty-free images from Unsplash that matched the real estate theme. Final visual enhancements were completed in Adobe Photoshop to ensure a polished and cohesive presentation. The layout was optimized for both desktop and mobile to ensure responsive performance, and the result was a sleek, professional, and effective landing page that met the client’s goals.",
  toolsUsed: ['Figma', 'Adobe Photoshop', 'Unsplash'],
  image: "/RealEstate.png"
},

{
  id: 4,
  title: "Travel Jaya",
  category: "Travel Agency Website",
  description: "Travel Jaya, a Sri Lankan travel agency, needed a modern and elegant website to showcase their travel services and destinations. We started by designing a clean, visually appealing layout in Figma, then brought it to life using React and CSS.",
  details: "The Figma design focused on clarity, imagery, and user flow — using large visuals, friendly fonts, and intuitive navigation. After approval, we developed the website using React for structure and CSS for styling, ensuring full responsiveness and performance. We used high-resolution travel photos from Unsplash and enhanced them in Photoshop to align with the brand’s style. The final site reflects professionalism, builds trust, and gives users a smooth browsing experience across devices.",
  toolsUsed: ['Figma', 'React', 'CSS3', 'Adobe Photoshop', 'Unsplash', 'Responsive Design'],
  image: "/TravelJaya.png",
  link: "https://traveljayasl.com"
}
  ];


const ProjectModel =()=>{
      const {model,setModel} = useContext(ModelContext)
      const {selectedDetailsId,SetSelectedDetailsId} = useContext(ModelContext)

      const handleCloseBtn =()=>{
        setModel(false)
      }
    
    return(
<div className='projectModel'>
  <div className='project-model-container'>
    <button onClick={handleCloseBtn} className='close-btn'>×</button>

    {projectDetails
      .filter(item => item.id === selectedDetailsId)
      .map(project => (
        <div className='project-model-inner-container' key={project.id}>
          {/* Image Section */}
          {/* <div className='project-model-img-container'>
            <img className='project-model-img' src={project.image} alt={project.title} />
          </div> */}

          {/* Info Section */}
          <div className='project-model-info-container'>
            <h2 className='text-color project-title'>{project.title}</h2>
            <p className=' text-color project-category'>{project.category}</p>

            <div className="project-section">
              <h4 className='text-color title-color'>Description</h4>
              <p className='text-color project-description'>{project.description}</p>
            </div>

            <div className="project-section">
              <h4 className='text-color'>Project Details</h4>
              <p className='text-color project-details'>{project.details}</p>
            </div>

            <div className="project-section">
              <h4 className='text-color'>Tools Used</h4>
              <ul className='project-tools'>
                {project.toolsUsed.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

                {project.link && (
                <div className="project-section">
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                    >
                    🔗 Visit Website
                    </a>
                </div>
                )}
          </div>
        </div>
      ))}
  </div>
</div>
    )
}

export default ProjectModel
