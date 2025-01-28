"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function FundraisingSection() {
  return (
    <section className={`${poppins.className} bg-white py-16`}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            How It Works
          </h1>
        </div>

        {/* Step 01 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-16">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-sm font-semibold text-gray-400 uppercase mb-2">
              Step 01
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
              Create Your Fundraising Campaign
            </h2>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12">
            <Image
              src="/campaign.jpg" // Replace with your image path
              alt="Fundraising Campaign"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
