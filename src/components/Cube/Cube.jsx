import './Cube.css'
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube=()=>{

    const cubeRef = useRef()

    useFrame((state,delta)=>{

        const time = state.clock.getElapsedTime()
        if(cubeRef.current){
            cubeRef.current.rotation.y = time *0.5
        }
    })

    return(

            <mesh ref={cubeRef} position={[0,0,-3]}>
                <boxGeometry args={[5,5,5,8,8,8]}/>
                <meshBasicMaterial color={'blue'} wireframe={true}/>
            </mesh>
        


    )
}

export default Cube