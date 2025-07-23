// src/components/Header.jsx
import React from "react";
import logo from "../assets/landingPage/gymLogo.svg"
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center px-6 py-4 z-50">
    <div className="flex items-center gap-2">
        <img
        src={logo}
        alt="Logo"
        className="h-8 w-8 object-contain"
        draggable={false}
        />
        <span className="text-2xl font-semibold text-white tracking-wide">
        FITNESS CLUB
        </span>
    </div>
    {/* Responsive, centered navigation */}
    <nav className="flex-1 flex justify-center">
        <ul className="flex gap-8 md:gap-16">
        <li>
            <a href="#" className="px-4 md:px-6 text-2xl text-white font-medium drop-shadow-md">
            HOME
            </a>
        </li>
        <li>
            <a href="#" className="px-4 md:px-6 text-2xl text-white font-medium drop-shadow-md">
            ABOUT US
            </a>
        </li>
        <li>
            <a href="#" className="px-4 md:px-6 text-2xl text-white font-medium drop-shadow-md">
            CONTACT US
            </a>
        </li>
        </ul>
    </nav>
    </header>

  );
}
