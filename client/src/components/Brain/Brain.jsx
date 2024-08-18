import React, { useLayoutEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import Tubes from "./Tubes";
import brainCurves from "./BrainCurves";
import BrainParticles from "./BrainParticles";

export default function Brain() {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Adjust the camera Z position: closer for smaller windows
      // Adjust the divisor and minimum value as needed
      const newCameraZ = Math.max(3, 10 * (1 - Math.min(width, height) / 2000));

      setCameraPosition([0, 0, newCameraZ]);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial values

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 6]}
        near={0.01}
        far={1000}
        fov={5}
      />
      <color attach={"background"} args={["black"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Tubes allTheCurves={brainCurves} />
      <BrainParticles allTheCurves={brainCurves} />
      <OrbitControls
        enablePan={false} // Disable dragging (panning)
        enableZoom={false} // Optionally disable zooming
      />
    </Canvas>
  );
}
