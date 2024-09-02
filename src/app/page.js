"use client";
import PageTransition from "./components/PageTransition";
import React, { Suspense, useState, useEffect, lazy } from "react";
import dynamic from "next/dynamic";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Footer from "./components/Footer";

// Lazy load de secciones
const VideojuegosSection = lazy(() => import("./components/Videojuegos"));
const MusicaSection = lazy(() => import("./components/Música"));
const Particles = lazy(() => import("./components/Particles"));
const WebPagesSection = lazy(() => import("./components/WebPages"));

// Cargar el modelo de manera dinámica
const Model = dynamic(() => import("./components/Model"), { ssr: false });

function ResponsiveCamera({ isMobile }) {
  const { camera } = useThree();

  useEffect(() => {
    if (isMobile) {
      camera.position.set(0, 0, 0);
    } else {
      camera.position.set(0, 0, 0); // Cambia estos valores para acercar más la cámara
    }
  }, [isMobile, camera]);

  return null;
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Estado para gestionar el estado de carga

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Timeout de 0 segundos

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modelPosition = isMobile ? [0, -0.45, -1.88] : [0, -0.6, -1.88];

  return (
    <div className="min-h-screen  w-screen bg-gradient-to-r from-blue-800 from-10% via-blue-500 via-30% to-blue-950 to-90%">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-2xl font-bold">Cargando...</p>
        </div>
      ) : (
        <PageTransition page={page}>
          {page === 0 && (
            <div key="home" className="w-screen  lg:h-screen  flex flex-col">
              {/* Contenedor del modelo en la mitad superior */}
              <Canvas className="flex-grow lg:h-1/2 flex justify-center items-center">
                <ResponsiveCamera isMobile={isMobile} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensidad={3} />
                <pointLight position={[0, 10, 10]} intensidad={1} />
                <Environment preset="city" />
                <Model scale={0.5} position={modelPosition} />
                <Particles />
                <OrbitControls
                  enableZoom={false}
                  enableRotate={false}
                  enablePan={false}
                />
              </Canvas>

              {/* Contenedor de botones en la mitad inferior */}
              <div className="flex-grow h-1/2 flex justify-center items-center  mb-10">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                  <button
                    onClick={() => setPage(1)}
                    className="bg-blue-500 text-white py-4 px-12 rounded text-center  hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    Música
                  </button>
                  <button
                    onClick={() => setPage(2)}
                    className="bg-blue-500 text-white py-4 px-12 rounded text-center hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    Videojuegos
                  </button>
                  <a
                    href="https://www.rubenportfolio.com"
                    className="bg-blue-500 text-white py-4 px-12 rounded text-center hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    Portfolio
                  </a>
                  <button
                    onClick={() => setPage(3)}
                    className="bg-blue-500 text-white text-center py-4 px-12 rounded hover:bg-green-500 hover:scale-110 duration-300"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    ¿Necesitas una web?
                  </button>
                </div>
              </div>
              <Footer />
            </div>
          )}

          {page === 1 && (
            <div key="music" className="w-screen min-h-screen relative">
              <Suspense
                fallback={<div className="text-center mt-20">Cargando...</div>}
              >
                <MusicaSection onBack={() => setPage(0)} />
              </Suspense>
              <Footer />
            </div>
          )}

          {page === 2 && (
            <div key="games" className="w-screen min-h-screen relative">
              <Suspense
                fallback={<div className="text-center mt-20">Cargando...</div>}
              >
                <VideojuegosSection onBack={() => setPage(0)} />
              </Suspense>
              <Footer />
            </div>
          )}

          {page === 3 && (
            <div key="webs" className="w-screen min-h-screen relative">
              <Suspense
                fallback={<div className="text-center mt-20">Cargando...</div>}
              >
                <WebPagesSection onBack={() => setPage(0)} />
              </Suspense>
              <Footer />
            </div>
          )}
        </PageTransition>
      )}
    </div>
  );
}
