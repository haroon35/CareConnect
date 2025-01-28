"use client";

import React, { useState, useEffect } from "react";

export default function ScrollToBottomButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const HeroSection = document.getElementById("herosection");
      if (window.scrollY > HeroSection.offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    const Footer = document.getElementById("footer");
    Footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToBottom}
        className={`fixed bottom-10 right-10 bg-gray-800 text-white rounded-full p-4 shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59L7.3 9.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
