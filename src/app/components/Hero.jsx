import React from "react";
import Header from "./Header";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <div className=" max-h-screen h-screen bg-[url('./assets/helpinghands3.jpg')] bg-no-repeat bg-cover bg-center backdrop-blur-sm">
      <Header />
      <div className="absolute inset-0  backdrop-blur-sm"></div>
      <div className="w-[90%] md:w-[80%]  m-auto items-center flex flex-col gap-10 justify-center h-screen text-center z-10 relative">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
          Bring Hope to Their World
        </h1>
        <h3 className="text-2xl lg:text-3xl ">
          Your small act of kindness can make a big difference in the lives of
          orphaned children. Join us in creating a better tomorrow for children
          in need.
        </h3>
        <div>
          <a
            href="https://www.youtube.com/watch?v=ElG5-nXD0B8"
            className="flex items-center gap-2 hover:underline active:scale-95 active:opacity-80 lg:gap-3"
            target="_blank"
          >
            <IoPlayCircleOutline className="text-3xl lg:text-4xl text-red-500 " />
            <span className="text-lg lg:text-xl ">Watch Video</span>
          </a>
        </div>
      </div>
    </div>
  );
}
