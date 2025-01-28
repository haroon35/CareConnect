"use client";

import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights you need
});

export default function HelpSection() {
  return (
    <section className={`${josefinSans.className} py-16`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Left Section - Image */}
        <div className="flex-1 relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/pexels-panditwiguna-3401402.jpg" // Ensure this image is in the public directory
            alt="Laptop with Chat"
            fill
            className="object-contain rounded-md shadow-sm"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="flex-1 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left">
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
          Friendly representatives will answer any questions .
          </h2>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
          Don't hesitate and start your free trial today. Our team is
              available to guide you every step of the way. We aim to provide
              the best experience for all your needs.

          </p>
          <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
