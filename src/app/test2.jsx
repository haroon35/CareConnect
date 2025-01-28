"use client";

import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Specify font weights you need
  });

export default function EdusiteSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Left Section - Content */}
        <div className={josefinSans.className}>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Welcome to Edusite
          </h1>
          
          <div className="space-y-8">
            {/* Online Courses */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
                <Image
                  src="/icons/online-courses.svg"
                  alt="Online Courses"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Online Courses
                </h2>
                <p className="text-gray-600">
                  We specialize in providing comprehensive and engaging online
                  courses tailored to meet your learning needs.
                </p>
              </div>
            </div>

            {/* Expert Teachers */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
                <Image
                  src="/icons/expert-teachers.svg"
                  alt="Expert Teachers"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Expert Teachers
                </h2>
                <p className="text-gray-600">
                  Our expert teachers bring years of experience and knowledge to
                  help you achieve your goals.
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
                <Image
                  src="/icons/community.svg"
                  alt="Community"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Community
                </h2>
                <p className="text-gray-600">
                  Join a vibrant community of learners and educators, fostering
                  collaboration and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
          <Image
            src="/tech.png"
            alt="Team Discussion"
            className="rounded-lg"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
