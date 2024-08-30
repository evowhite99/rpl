"use client";
import { useEffect, useCallback } from "react";

export default function PreventZoom() {
  const handleWheel = useCallback((e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, []);

  const handleKeydown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === "+" || e.key === "-")) {
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [handleWheel, handleKeydown]);

  return null;
}
