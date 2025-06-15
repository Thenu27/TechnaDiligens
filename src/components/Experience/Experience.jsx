import './Experience.css'
import { OrbitControls } from '@react-three/drei'
import Cube from '../Cube/Cube'
import { Canvas } from '@react-three/fiber'


const Experience=()=>{
    return(
       <div className="cube-model">

          <Canvas
            camera={[0,0,6]}
                >
            {/* <OrbitControls/> */}
            <Cube/>
          </Canvas>
        </div>
    )
}

export default Experience