// Brain.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tubes from "./Tubes"; // Fixed: Importing Tubes without curly braces
import brainCurves from "./BrainCurves";
import BrainParticles from "./BrainParticles";
import { PerspectiveCamera } from "@react-three/drei";
export default function Brain() {
  return (
    <Canvas camera={{ position: [0, 0, 0.5], near: 0.001, far: 5, fov: 50 }}>
      <color attach={"background"} args={["black"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Tubes allTheCurves={brainCurves} />
      <BrainParticles allTheCurves={brainCurves} />
      <OrbitControls allTheCurves={brainCurves} />
    </Canvas>
  );
}
