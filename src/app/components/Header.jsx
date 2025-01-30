import Link from "next/link";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm transition-all duration-300 shadow-none hover:shadow-md ">
      <div className="flex bg-transparent w-[90%] m-auto items-center justify-between py-10 md:w-[80%] sticky top-0 z-50 ">
        <div>
          <a href="#">
            <p className="hidden md:inline-block text-3xl lg:text-4xl font-bold">
              Care<span className="text-red-500">Connect</span>
            </p>
            <GoHomeFill className="text-4xl md:hidden" />
          </a>
        </div>
        <div className=" capitalize list-none gap-5 hidden md:flex text-lg lg:text-xl  ">
          <Link href="/" className="hover:text-red-500 hover:underline">
            Home
          </Link>
          <Link href="/" className="hover:text-red-500 hover:underline">
            What we do
          </Link>
          <Link href="/" className="hover:text-red-500 hover:underline">
            Who we are
          </Link>
          <Link href="/" className="hover:text-red-500 hover:underline">
            Login
          </Link>
          <IoMenu className="text-4xl md:hidden" />
        </div>
      </div>
    </nav>
  );
}
