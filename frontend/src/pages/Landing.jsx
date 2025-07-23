// src/pages/Landing.jsx
import React, { useEffect, useState } from "react";

// Import your images placed in src/assets/
import img1 from "../assets/landingPage/img1.jpg";
import img2 from "../assets/landingPage/img2.jpg";
import img3 from "../assets/landingPage/img3.jpg";
import img4 from "../assets/landingPage/img4.jpg";
import img6 from "../assets/landingPage/img6.jpg";
import Header from "../components/header";
const images = [img1, img2, img3, img4];

export default function Landing() {
  const [current, setCurrent] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <Header />
      {images.map((src, idx) => (
        <img
          key={idx}
          src={img6} 
          alt={`Slide ${idx + 1}`}
          className={`absolute w-full h-full object-cover bg-opacity-20 backdrop-blur-lg transition-opacity duration-1000 ${
            idx === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          draggable={false}
        />
      ))}
    </div>
  );
}
