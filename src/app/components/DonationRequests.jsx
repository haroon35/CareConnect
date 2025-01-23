import React from "react";
import RequestCard from "./RequestCard";

export default function () {
  return (
    <div className="flex overflow-auto scrollbar-none max-w-[90%] m-auto md:grid grid-cols-2 w-[80%]  lg:grid-cols-3 gap-8 p-5">
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
  );
}
