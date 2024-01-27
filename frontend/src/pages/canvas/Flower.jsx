import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Flower = () => {
  const flower = useGLTF("./crystal_flowers/scene.gltf"); // Updated path to the flower model

  return (
   <mesh>
    <ambientLight intensity={20}/>
     <primitive object={flower.scene} scale={5} position-y={0} rotation-y={0} />
   </mesh>
  );
};

const FlowerCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false} // Allowing zoom for better control
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        <hemisphereLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <Flower />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default FlowerCanvas; 