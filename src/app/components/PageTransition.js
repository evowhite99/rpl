"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = React.memo(({ children, page }) => {
  const previousPage = useRef(page);

  useEffect(() => {
    previousPage.current = page;
  }, [page]);

  const direction = page - previousPage.current;

  const variants = useMemo(
    () => ({
      initial: (direction) => ({
        opacity: 0,
        x: direction > 0 ? "100%" : "-100%",
        willChange: "opacity, transform",
      }),
      enter: {
        opacity: 1,
        x: 0,
        willChange: "opacity, transform",
      },
      exit: (direction) => ({
        opacity: 0,
        x: direction > 0 ? "-100%" : "100%",
        willChange: "opacity, transform",
      }),
    }),
    []
  );

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
          transition={{ duration: 0.5 }} // Reducido para mejorar la percepción de velocidad
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default PageTransition;
