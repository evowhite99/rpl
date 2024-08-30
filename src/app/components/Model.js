"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ isMobile, ...props }) {
  const { scene, materials } = useGLTF("/models/1971_gaz-24_volga_lp.glb");
  const modelRef = useRef();

  // Memoriza la configuración de los materiales para evitar recalculaciones
  const materialSettings = useMemo(() => {
    return {
      roughness: isMobile ? 0.3 : 0.2,
      metalness: isMobile ? 0.8 : 1,
    };
  }, [isMobile]);

  useEffect(() => {
    // Aplica las configuraciones de materiales solo cuando sea necesario
    Object.values(materials).forEach((material) => {
      if (material) {
        material.roughness = materialSettings.roughness;
        material.metalness = materialSettings.metalness;
        material.needsUpdate = true;
      }
    });
  }, [materials, materialSettings]);

  // Rotar el modelo continuamente solo si no es móvil
  useFrame((state, delta) => {
    if (modelRef.current && !isMobile) {
      modelRef.current.rotation.y += delta * -0.4; // Ajusta la velocidad de rotación
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}
