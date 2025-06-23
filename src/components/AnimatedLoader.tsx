"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function WheelModel() {
  const gltf = useGLTF("/car.glb");
  const wheelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (wheelRef.current) {
      wheelRef.current.rotation.y += 0.01; // Continuous Y-axis rotation
    }
  });

  return <primitive ref={wheelRef} object={gltf.scene} scale={0.7} />;
}

export default function AnimatedLoader() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <Suspense fallback={null}>
            <WheelModel />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
      <div className="mt-4 text-center text-base font-medium text-gray-700 dark:text-gray-200">
        Loading your dashboard...
      </div>
    </div>
  );
}
