// Tube.js
import { extend } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from "three";

// Create the shader material


export default function Tube({ curve }) {
  const brainMat = useRef()
  const {viewport}  =  useThree()
  useFrame(({ clock, mouse }) => {
    if (brainMat.current) {
      brainMat.current.uniforms.time.value = clock.getElapsedTime();

      brainMat.current.uniforms.mouse.value = new THREE.Vector3(
        mouse.x *viewport.width/2,
        mouse.y *viewport.height/2,
        0
      )

    }
  });
  const BrainMaterial = shaderMaterial(
    {
      time: {value :0}, // Initialize time as a number
      color: new THREE.Color(0.2, 0.3, 0.6),
      mouse: new THREE.Vector3(0,0,0)
    },
    `
    varying vec2 vUv;
    uniform float time;
    uniform vec3 mouse;
    varying float vProgress;
  
    void main() {
      vUv = uv;
      vProgress = smoothstep(-1.0, 1.0, sin(vUv.x * 8. + time*3.));


      vec3 p = position;
      float maxDist  = 0.1;
      float dist = length(mouse - p);

      if(dist < maxDist){
        vec3 dir = 0.01 *normalize(mouse- p);
        dir*= (1. - dist/maxDist);
        p -= dir;
      }
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
    `,
    `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    uniform vec3 mouse;
    varying float vProgress;
  
    void main() {
      vec3 finalColor =  mix(color, color*0.25, vProgress);

      float hideCorners = smoothstep(1.,0.9,vUv.x)*smoothstep(0.,0.1,vUv.y);
      gl_FragColor.rgba = vec4(vec3(vProgress), 1.);
      gl_FragColor.rgba = vec4(finalColor, hideCorners);
    }
    `
  );
  extend({ BrainMaterial });
  return (
    <mesh>
      <tubeGeometry args={[curve, 64, 0.001, 2, false]} />
      <brainMaterial ref = {brainMat} 
      side = {THREE.DoubleSide}
      transparent = {true}
      depthTest= {false}
      depthWrite={false}
      blending = {THREE.AdditiveBlending}

      />
    </mesh>
  );
}
