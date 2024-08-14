"use client";

import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Esto forzará un repaint del footer en la carga de la página.
    const footer = document.getElementById("footer");
    footer.style.display = "none";
    footer.offsetHeight; // Forzar reflow
    footer.style.display = "block";
  }, []);

  return (
    <div
      id="footer"
      className="fixed inset-x-0 bottom-0 z-10 text-center justify-center items-center lg:pt-8 pt-4 lg:pb-8 pb-6 bg-gradient-to-r from-blue-800 from-10% via-blue-500 via-30% to-blue-950 to-90%"
    >
      © 2024 - Rubén Pérez Lara
    </div>
  );
}
