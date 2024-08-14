"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const { scene, materials } = useGLTF("/models/1971_gaz-24_volga_lp.glb");
  const modelRef = useRef();

  React.useEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material) {
        material.roughness = 0.2; // Disminuye la rugosidad para mayor reflexión
        material.metalness = 1; // Aumenta la metalicidad para reflejos más fuertes
        material.needsUpdate = true; // Asegura que los cambios se apliquen
      }
    });
  }, [materials]);

  // Rotar el modelo continuamente
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * -0.4; // Ajusta la velocidad de rotación
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}
