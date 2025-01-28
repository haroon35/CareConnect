"use client";

import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Specify font weights you need
  });

const courses = [
  {
    title: "Beginner to Pro in Excel: Financial Modeling and Valuation",
    category: "Business",
    price: "Free",
    image: "/pc.jpg", // Replace with the actual image path
  },
  {
    title: "Introduction to CSS",
    category: "Web Design",
    price: "Premium",
    image: "/pc.jpg", // Replace with the actual image path
  },
  {
    title: "The Ultimate Drawing Course | From Beginner To Advanced",
    category: "Drawing",
    price: "Premium",
    image: "/pc.jpg", // Replace with the actual image path
  },
  {
    title: "The Complete Web Development Course",
    category: "Web Development",
    price: "Free",
    image: "/pc.jpg", // Replace with the actual image path
  },
];

export default function ExploreCourses() {
  return (
    <section className="py-16 bg-white">
      <div className={josefinSans.className}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Explore Courses
        </h2>
        <p className="text-center text-gray-500 mb-12">
         
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500">{course.category}</p>
                <p
                  className={`text-sm font-medium ${
                    course.price === "Free" ? "text-green-600" : "text-orange-600"
                  }`}
                >
                  {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
