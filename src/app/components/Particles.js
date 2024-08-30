import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { memo } from "react";

function Particles({ count = 1000 }) {
  const meshRef = useRef();

  // Memoriza la geometría de las partículas para evitar recalculaciones innecesarias
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return geometry;
  }, [count]);

  // Asigna la geometría solo una vez
  useEffect(() => {
    meshRef.current.geometry = particlesGeometry;
    meshRef.current.renderOrder = -1; // Asegura que las partículas se rendericen antes que el coche
  }, [particlesGeometry]);

  // Rota las partículas con un intervalo más bajo para mejorar el rendimiento
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.rotation.y = elapsedTime * 0.2; // Reduce la velocidad de rotación
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

export default memo(Particles);
