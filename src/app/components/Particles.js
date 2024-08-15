import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles({ count = 1000 }) {
  const meshRef = useRef();
  const particlesCount = count;

  useEffect(() => {
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    meshRef.current.geometry = particlesGeometry;
    meshRef.current.renderOrder = -1; // Asegura que las partículas se rendericen antes que el coche
  }, [particlesCount]);

  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <points ref={meshRef}>
      <pointsMaterial
        color="cyan"
        size={0.02}
        depthTest={false} // Desactiva el test de profundidad para las partículas
      />
    </points>
  );
}
