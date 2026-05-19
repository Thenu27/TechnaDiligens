import { useEffect } from "react";
import { useGLTF, useTexture, useAnimations, Float } from "@react-three/drei";
import * as THREE from "three";

const LaptopModel = () => {
  const { scene, animations } = useGLTF("./robot.glb");
  const { actions } = useAnimations(animations, scene);

  const bakedTexture = useTexture("./robot-img-baked.jpg");
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  bakedTexture.flipY = false;

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshBasicMaterial({
        map: bakedTexture,
      });
    }
  });

    useEffect(() => {
    Object.values(actions).forEach((action) => {
        action.reset();
        action.setLoop(THREE.LoopRepeat);
        action.play();
    });

    return () => {
        Object.values(actions).forEach((action) => action.stop());
    };
    }, [actions]);


  return(
    <Float 
      speed={3}
      floatIntensity={3}
    >
        <primitive scale={1.6} position={[-0.5,1,0]} object={scene} />
    </Float>
  )
  
};

export default LaptopModel;