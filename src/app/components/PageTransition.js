"use client";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children, page }) {
  const previousPage = useRef(page);

  useEffect(() => {
    previousPage.current = page; // Actualiza el valor de la página anterior después de cada renderizado
  }, [page]);

  const direction = page - previousPage.current;

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? "100%" : "-100%",
    }),
    enter: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div style={{ overflow: "hidden" }}>
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
