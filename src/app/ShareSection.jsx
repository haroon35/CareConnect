"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ShareSection() {
  return (
    <section className={`${poppins.className} bg-white py-16`}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Step 02 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Left Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/friends.jpg" // Replace with your image path
              alt="Share with Family and Friends"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-sm font-semibold text-gray-400 uppercase mb-2">
              Step 02
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
              Share with Family and Friends
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
