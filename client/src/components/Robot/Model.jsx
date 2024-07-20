import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef();
  const { nodes, animations, scene } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    actions["Experiment"].play().paused = true;
  }, []);

  useFrame(() => {
    actions["Experiment"].time =
      (actions["Experiment"].getClip().duration * scroll.offset) / 4;
  });

  return (
    <group ref={group} scale={[2, 2, 2]}>
      <primitive object={scene} />
    </group>
  );
}