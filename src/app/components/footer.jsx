import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function footer() {
  return (
    <div className="mt-32 h-[100%] bg-slate-900 text-white">
      <div className="w-[80%] m-auto grid grid-cols-3 gap-12 py-28 ">
        <div>
          <ol className="flex flex-col gap-6 text-xl">
            <li className="text-2xl font-semibold uppercase pb-8">
              contact us
            </li>
            <li>
              Children are the most precious asset of society as they are the
              picture of our future.
            </li>
            <li className="flex gap-3 items-center ">
              <FaLocationDot className="text-red-600" /> Sargodha Road, Rehman
              Pura, Faisalabad.
            </li>
            <li className="flex gap-3 items-center ">
              <FaMobileAlt className="text-red-600" />
              +923086739640
            </li>
            <li className="flex gap-3 items-center ">
              <MdMail className="text-red-600" />
              sheikhharoon35@gmail.com
            </li>
          </ol>
        </div>
        <div>
          <ul className="text-xl capitalize flex flex-col gap-6 list-disc marker:text-red-600 ">
            <li className="text-2xl font-semibold uppercase pb-8 list-none">
              Menu
            </li>
            <li>about us</li>
            <li>What we do</li>
            <li>Our programs</li>
            <li>Our services</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-2xl font-semibold uppercase pb-8 list-none">
              Join us
            </li>
            <li>
              <input
                type="email"
                className="px-6 py-3 w-full text-black"
                placeholder="Enter your email"
              />
              <button className="capitalize px-6 py-3 bg-red-600 rounded-md text-white font-semibold mt-3">
                Subscribe Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
