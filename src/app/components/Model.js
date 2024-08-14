"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ isMobile, ...props }) {
  const { scene, materials } = useGLTF("/models/1971_gaz-24_volga_lp.glb");
  const modelRef = useRef();

  React.useEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material) {
        material.roughness = isMobile ? 0.3 : 0.2; // Ajusta para móviles
        material.metalness = isMobile ? 0.8 : 1; // Ajusta para móviles
        material.needsUpdate = true;
      }
    });
  }, [materials]);

  // Rotar el modelo continuamente solo si no es móvil
  useFrame((state, delta) => {
    if (modelRef.current && !isMobile) {
      modelRef.current.rotation.y += delta * -0.4; // Ajusta la velocidad de rotación
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}
