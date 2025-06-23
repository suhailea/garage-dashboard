"use client";
import {
  Bounds,
  Center,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import { Cardetails } from "./Cardetails";
import Uicard from "@/components/shared/Uicard";

const CarModel = () => {
  const gltf = useGLTF("/mercedes_g_wagon.glb");

  useEffect(() => {
    console.log("Nodes:", gltf.nodes);
    console.log("Materials:", gltf.materials);
  }, [gltf]);

  return (
    <Center>
      <primitive object={gltf.scene} scale={0.5} rotation={[0, Math.PI, 0]} />
    </Center>
  );
};

export function CarViewer() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Uicard
        title="Vehicle Details"
        description="View your car in 3D and see all its details, status, and upcoming service information."
        style="border-none h-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg"
      >
        <div className="rounded-t-md h-full">
          <div className="h-56 bg-white dark:bg-gray-900 rounded-t-md">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} />
                <Environment preset="sunset" />
                <Bounds fit clip observe margin={1.2}>
                  <CarModel />
                </Bounds>
                <OrbitControls
                  target={[0, 0, 0]}
                  autoRotate
                  autoRotateSpeed={1.5}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="overflow-y-auto max-h-screen">
            <Cardetails />
          </div>
        </div>
      </Uicard>
    </motion.div>
  );
}
