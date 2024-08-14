"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFooterVisible(true);
    }, 0); // 0 ms delay ensures this runs right after the current rendering cycle

    return () => clearTimeout(timeout); // Cleanup the timeout
  }, []);

  if (!footerVisible) return null;

  return (
    <div
      id="footer"
      className="fixed inset-x-0 bottom-0 z-50 text-center justify-center items-center lg:pt-8 pt-4 lg:pb-8 pb-6 bg-gradient-to-r from-blue-800 from-10% via-blue-500 via-30% to-blue-950 to-90%"
    >
      © 2024 - Rubén Pérez Lara
    </div>
  );
}
