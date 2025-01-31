import React from "react";
import RequestCard from "./RequestCard";

export default function () {
  return (
    <div className="mt-32 max-w-[90%] m-auto  md:w-[80%]   ">
      <div>
        <h1 className="capitalize text-4xl font-semibold mb-16 underline">
          Requests
        </h1>
      </div>
      <div className="flex overflow-auto scrollbar-none md:grid grid-cols-2 lg:grid-cols-3 gap-14 p-5">
        <RequestCard
          requestName="Request 1"
          requestDescription="This is a request description lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Sed nec eros ut felis fermentum."
        />
        <RequestCard
          requestName="Request 1"
          requestDescription="This is a request description"
        />
        <RequestCard
          requestName="Request 1"
          requestDescription="This is a request description"
        />
        <RequestCard
          requestName="Request 1"
          requestDescription="This is a request description"
        />
        <RequestCard
          requestName="Request 1"
          requestDescription="This is a request description"
        />
        <RequestCard
          requestName="Request 1"
          requestDescription="This is a request description"
        />
      </div>
    </div>
  );
}
