"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights you need
});

const features = [
  {
    title: "Online Courses",
    description:
      "Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.",
    icon: "/icons/online-courses.svg", // Replace with the actual path
  },
  {
    title: "Expert Teachers",
    description:
      "Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.",
    icon: "/icons/expert-teachers.svg", // Replace with the actual path
  },
  {
    title: "Community",
    description:
      "Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.",
    icon: "/icons/community.svg", // Replace with the actual path
  },
];

export default function WhyEdusite() {
  return (
    <section className="py-16 bg-white">
   <div className={poppins.className}>    
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Edusite</h2>
        <p className="text-gray-500 mb-12">
        
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
