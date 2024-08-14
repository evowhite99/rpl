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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className}  `}>
        <PreventZoom />
        <Footer />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
