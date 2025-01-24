import React from "react";

export default function RequestCard({ requestName, requestDescription }) {
  return (
    <div className="min-w-[300px] md:max-w-lg h-auto rounded shadow-md flex flex-col p-5 gap-8 items-center justify-between">
      <h1 className="text-2xl font-semibold">{requestName}</h1>
      <p className="text-gray-700">{requestDescription}</p>
      <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">
        Donate
      </button>
    </div>
  );
}
