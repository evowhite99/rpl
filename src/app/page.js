"use client";
import PageTransition from "./components/PageTransition";
import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import VideojuegosSection from "./components/Videojuegos";
import Footer from "./components/Footer";

// Cargar el modelo de manera dinámica
const Model = dynamic(() => import("./components/Model"), { ssr: false });

function ResponsiveCamera({ isMobile }) {
  const { camera } = useThree();

  useEffect(() => {
    if (isMobile) {
      camera.position.set(5, 3.3, 0);
    } else {
      camera.position.set(0, 0, 0); // Cambia estos valores para acercar más la cámara
    }
  }, [isMobile, camera]);

  return null;
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(0); // Estado que controla la página actual
  const [loading, setLoading] = useState(true); // Estado de carga del modelo

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar una vez al montar el componente

    // Simulación de carga de modelo 3D (ejemplo: 2 segundos)
    const timeout = setTimeout(() => setLoading(false), 1000); // Pequeño retraso

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modelPosition = isMobile ? [0, 2.5, 0] : [0, -0.6, -1.88];

  return (
    <div className="min-h-screen  w-screen bg-gradient-to-r from-blue-800 from-10% via-blue-500 via-30% to-blue-950 to-90% ">
      {loading ? (
        <div className="flex flex-row min-h-screen justify-center items-center z-10 ">
          <p className="text-2xl font-bold">Cargando...</p>
        </div>
      ) : (
        <PageTransition page={page}>
          {page === 0 && (
            <div key="home" className="w-screen lg:h-screen flex flex-col">
              {/* Contenedor del modelo en la mitad superior */}
              <Canvas className="flex-grow h-1/2 flex justify-center items-center">
                <ResponsiveCamera isMobile={isMobile} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensidad={3} />
                <pointLight position={[0, 10, 10]} intensidad={1} />
                <Environment preset="city" />
                <Model scale={0.5} position={modelPosition} />
                <OrbitControls
                  enableZoom={false}
                  enableRotate={false}
                  enablePan={false}
                />
              </Canvas>

              {/* Contenedor de botones en la mitad inferior */}
              <div className="flex-grow h-1/2 flex justify-center items-center  ">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                  <button
                    onClick={() => setPage(1)}
                    className="bg-blue-500 text-white py-4 px-20 rounded text-center  hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    Música
                  </button>
                  <button
                    onClick={() => setPage(2)}
                    className="bg-blue-500 text-white py-4 px-20 rounded text-center hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    Videojuegos
                  </button>
                  <a
                    href="https://www.rubenportfolio.com/"
                    className="bg-blue-500 text-white py-4 px-20 rounded text-center hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    Portfolio
                  </a>
                  <button
                    className="bg-blue-500 text-white text-center py-4 px-20 rounded hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    Próximamente...
                  </button>
                </div>
              </div>
              <Footer />
            </div>
          )}

          {page === 1 && (
            <div key="music" className="w-screen min-h-screen relative">
              {/* Aquí iría la sección de música */}
              <button
                className="hover:bg-red-700"
                onClick={() => setPage(0)}
                style={{
                  position: "fixed",
                  top: "20px",
                  left: "20px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
                  zIndex: 10,
                }}
              >
                Volver
              </button>
            </div>
          )}

          {page === 2 && (
            <div key="games" className="w-screen min-h-screen relative">
              <VideojuegosSection onBack={() => setPage(0)} />
              <Footer />
            </div>
          )}
        </PageTransition>
      )}
    </div>
  );
}
