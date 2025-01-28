"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights you need
});

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
        <div className={poppins.className}> 
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="pl-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">
    Perfection in learning and growth, unmatched expertise awaits you.
  </h2>
  <p className="text-gray-500 text-lg mb-6">
    Discover eloquence in learning and explore unparalleled growth opportunities.
  </p>
  <p className="text-gray-600">
    Engage in insightful discussions, embrace diverse perspectives, and immerse
    yourself in a world of endless learning possibilities. Achieve excellence
    through meaningful interactions and unlock your full potential.
  </p>
</div>


        {/* Image with Play Button */}
        <div className="relative group">
          <Image
            src="/tech.png" // Replace with your actual image path
            alt="Team Discussion"
            width={600}
            height={400}
            className="rounded-lg"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-orange-600 opacity-50 rounded-lg group-hover:opacity-60 transition-opacity"></div>
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10.132v4.535a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
