import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <div className="canvas-container top:0%">
        <Canvas
          gl={{ antialias: true }}
          dpr={[1, 1.5]}
          style={{ width: "100%", height: "100%" }}
        >
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Suspense fallback={<Loader />}>
            <ScrollControls damping={0.5} pages={2}>
              <Model />
            </ScrollControls>
          </Suspense>
        </Canvas>
    </div>
  );
}
