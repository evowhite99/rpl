"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children, page }) {
  const previousPage = useRef(page); // Guarda la página anterior

  // Lógica de dirección basada en la comparación de la página actual y la anterior
  const direction = page - previousPage.current; // Si page es mayor, direction será positivo (ir a la derecha)

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? "100%" : "-100%", // Si direction es positivo, entra desde la derecha
    }),
    enter: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? "-100%" : "100%", // Si direction es positivo, sale hacia la izquierda
    }),
  };

  return (
    <div style={{ overflow: "hidden", display: "block" }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
