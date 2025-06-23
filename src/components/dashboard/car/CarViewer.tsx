"use client";
import {
  Bounds,
  Center,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Cardetails } from "./Cardetails";
import Uicard from "@/components/Uicard";
import { motion } from "framer-motion";

const CarModel = () => {
  const gltf = useGLTF("/mercedes_g_wagon.glb");

  useEffect(() => {
    console.log("Nodes:", gltf.nodes);
    console.log("Materials:", gltf.materials);
  }, [gltf]);

  return (
    <Center>
      <primitive object={gltf.scene} scale={0.5} />
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
        title="Monthly Points Summary"
        description="Monthly Points summary for the year 2025"
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
                <OrbitControls target={[0, 0, 0]} />
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
