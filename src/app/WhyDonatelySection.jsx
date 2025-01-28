"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function WhyDonatelySection() {
  const features = [
    {
      icon: "📝", // Replace with actual SVG or icon
      title: "Simple to use and customize",
      description:
        "We pride ourselves on making things easy to use - no code, no developers, and no training required.",
    },
    {
      icon: "🏷️", // Replace with actual SVG or icon
      title: "Affordable, scalable pricing",
      description:
        "Our pricing model scales with your donation volume and ensures no hidden fees or surprises.",
    },
    {
      icon: "🔒", // Replace with actual SVG or icon
      title: "Safe and secure",
      description:
        "PCI and data privacy compliance with encryption and protection against cyber attacks.",
    },
    {
      icon: "💬", // Replace with actual SVG or icon
      title: "Great customer support",
      description:
        "Our in-house support, developers, and strategists will make sure you don't have to campaign alone.",
    },
  ];

  return (
    <section className={`${poppins.className} bg-white py-16`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why CareConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-150 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
