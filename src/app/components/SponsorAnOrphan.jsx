import React from "react";

export default function SponsorAnOrphan() {
  return (
    <div className="mt-32 w-[100%] h-[500px] bg-[url('./assets/sponsorBg.jpg')] bg-no-repeat bg-cover bg-center mb-20 transition-transform duration-1000 hover:scale-110">
      <div className=" w-[90%] m-auto md:w-[80%] flex flex-col justify-center h-full">
        <div>
          <h1 className="uppercase text-6xl text-white font-bold ml-[10%] ">
            Sponsor an
            <br /> <span className="text-yellow-300">Orphan</span>{" "}
            <hr className="w-[25%] border-t-4 mt-2  border-yellow-300" />
          </h1>
          <p className="uppercase text-white text-2xl font-semibold ml-[10%] mt-5">
            Give them an opportunity to have a life.
          </p>
        </div>
        <div className="ml-[10%] text-2xl text-white">
          <button className="capitalize  text-white bg-red-500 px-6 py-4 rounded-lg mt-10 hover:bg-red-600 ">
            donate now
          </button>
          <p></p>
        </div>
      </div>
    </div>
  );
}
