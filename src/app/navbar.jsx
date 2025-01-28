"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative" >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between py-4">
          {/* Brand Logo */}
          <h1 className="text-2xl font-medium text-amber-600">CareConnect.</h1>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {["Home", "How It Works", "Donate", "Gallery", "Blog", "About", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`${
                      isScrolled ? "text-black" : "text-white"
                    } hover:text-yellow-500`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Toggle (Optional) */}
          <button
            className={`block md:hidden text-lg ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen" id="herosection">
        <Image
          src="/donate.jpg" // Replace with your image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority // Ensures the image loads quickly
          className="z-[-1]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-thin mb-4">How It Works</h2>
        </div>
      </div>
    </div>
  );
}
