// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import PreventZoom from "./components/PreventZoom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Rubén",
  description: "Web Rubén",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <PreventZoom />
        <div className="flex-grow">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
