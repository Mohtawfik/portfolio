import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Ancient = () => {
  const ancient = useGLTF("./garden/scene.gltf");

  return (
    <primitive object={ancient.scene} scale={2.4} position-y={0} rotation-y={0} />
  );
};

const AncientCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={1.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ancient />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AncientCanvas;
