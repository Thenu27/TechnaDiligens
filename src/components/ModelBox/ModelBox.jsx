import './ModelBox.css'
import { useContext } from 'react'
import { ModelContext } from '../../Context/ModelContext';

  const projectDetails = [
{
  id: 1,
  title: "Three Legged Robot",
  category: "3D Model",
  description: "A stylized, low-poly three-legged robot designed for optimal performance on the web. Ideal for use in developer portfolios, interactive startup landing pages, and browser-based 3D games. Lightweight, visually appealing, and easy to integrate into any real-time web experience using Three.js, React Three Fiber, or similar frameworks.",
  image: "/Three-legged-Robot.png",
  toolsUsed: ["React", "R3F", "Blender", "CSS"],
details: "The model was created in Blender with a clean low-poly aesthetic to ensure optimal performance in real-time rendering environments. It features an idle animation where the robot looks around, adding life and personality. The scene was built using React Three Fiber, with realistic shadows achieved through R3F lighting and shadow-casting configurations for added depth and immersion.",
  link:'https://three-legged-robot-model.vercel.app/'

}
,
{
  id: 2,
  title: "Red Family Car ",
  category: "Business Website",
  description: "Need a ride for your next game or 3D website? Say hello to the Lil’ Red Cruiser — a chunky, cheerful little vehicle with big personality! With its bold red body, cartoonish curves, and tire-squealing attitude, this low poly car is perfect for: 🕹️ Indie games 🧩 Stylized animations 🌐 3D web experiences (Three.js, React Three Fiber) 🎨 Blender renders or toy-like dioramas",
  details: "The model was crafted in Blender with a clean low-poly aesthetic to ensure maximum performance across real-time rendering platforms. Designed with charm and simplicity, the car features stylized geometry and bold, playful proportions that make it ideal for stylized games or interactive web environments.The scene is rendered using React Three Fiber (R3F), with soft, dynamic shadows achieved through carefully configured lighting and shadow-casting materials. The model is lightweight yet visually striking—perfect for projects that need to blend speed with personality. Its idle-ready pose gives it a showroom-quality presence, making it suitable for hero sections, interactive showrooms, or gamified UIs.",
  toolsUsed: ["React", "R3F", "Blender", "CSS"],
  image: "/MonaliProject.png",
  link:'https://red-car-model.vercel.app/'
}

];


const ModelBox =()=>{
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

export default ModelBox
