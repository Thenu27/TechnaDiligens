
import { Environment, OrbitControls, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import LaptopModel from './LaptopModel'
import * as THREE from 'three'
import './LaptopExperience.css';
import { useRef } from 'react';

const LaptopExperience=()=>{

    const dirRef = useRef();
    // useHelper(dirRef,THREE.DirectionalLightHelper,5,"red")

    return(
        
       <div className='laptop-experience' >
        
        <Canvas
        camera={{ 
            position: [0, 0, 6],
            fov: 75,
            near: 0.1,
            far: 200 }}
            shadows
            gl={{
                antialias: true,
                outputColorSpace: THREE.SRGBColorSpace,
            }}
        >
          <LaptopModel/>  
          {/* <OrbitControls/> */}
          <ambientLight
            intensity={2}
          />
          <directionalLight
            intensity={1}
            ref={dirRef}
          />
          <Environment preset='city' />
          </Canvas>
        </div>
    )
}

export default LaptopExperience