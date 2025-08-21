import { Float, PresentationControls, useGLTF, Html } from "@react-three/drei";
import { useRef, useEffect } from "react";
import "./LaptopModel.css";
import { useThree } from "@react-three/fiber";

const PANEL_PX = { w: 1600, h: 1000 };  // DOM resolution
const HTML_SCALE = 1.39;                 // world size knob

export default function LaptopModel() {
  const { scene } = useGLTF("/laptop.glb");
  const {size} = useThree();

  const modelRoot = useRef();   // parent for model + (external) transforms
  const modelGLTF = useRef();   // the GLTF <primitive> itself
  const anchorRef = useRef();   // the screen anchor inside the GLTF

  // Tuned to YOUR model’s local space (relative to GLTF root):
  const ANCHOR_POS = [-0.1, 2.1, 0.4];
  const ANCHOR_ROT = [0, -0.04, 0];
  const ANCHOR_SCL = [1, 1, 1]; // keep uniform

  // (Optional) log GLTF root transforms so you see if it has scale/offsets
  // useEffect(() => {
  //   console.log("GLTF root:", {
  //     pos: scene.position.toArray(),
  //     rot: [scene.rotation.x, scene.rotation.y, scene.rotation.z],
 //     scl: scene.scale.toArray(),
  //   });
  // }, [scene]);

//   useEffect(()=>{
//     if(size.width<12){
//         const ANCHOR_POS = [-0.1, 2.1, 0.4];

//     }
//   },[size.width])

  return (

      <Float rotationIntensity={0.25} floatIntensity={0.18} speed={1.1}>
        {/* Apply any external transforms to the whole model here */}
        <group
          ref={modelRoot}
          position={[0.4, -0.2, -1.2]}
        // position={[0,0,0]}
          rotation={[0.2, -0.5, 0]}
          scale={0.9}
        >
          {/* IMPORTANT: Put the anchor INSIDE the primitive */}
          <primitive ref={modelGLTF} object={scene}>
            <group
              ref={anchorRef}
              position={ANCHOR_POS}
              rotation={ANCHOR_ROT}
              scale={ANCHOR_SCL}
            >
              <Html
                transform
                center
                distanceFactor={1}
                scale={HTML_SCALE}
                wrapperClass="htmlScreen"
                // zIndexRange={[0, 0]} // optional; or just remove this prop
                style={{
                  width: `${PANEL_PX.w}px`,
                  height: `${PANEL_PX.h}px`,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <iframe
                  className="techna-iframe"
                  src="https://www.technadiligens.com/"
                  title="Techna Diligens"
                />
              </Html>
            </group>
          </primitive>
        </group>
      </Float>
  );
}
