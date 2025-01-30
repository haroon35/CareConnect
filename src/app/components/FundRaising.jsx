import React from "react";
import FundRaiserCard from "./FundRaiserCard";

export default function FundRaising() {
  return (
    <div className="bg-gray-50 w-full h-[100%] mt-32 mb-32">
      <div className="text-center py-32 flex flex-col w-4/5 m-auto">
        <h1 className="text-4xl font-semibold pb-6">Fund Raising</h1>
        <p className="text-xl font-thin">
          Your support can bring hope and change to those in need. Every
          contribution helps us fund vital programs and create a brighter
          future. Together, we can transform lives.
        </p>
      </div>
      <div className="flex w-[98%] m-auto gap-8 pb-32 px-5 overflow-auto scrollbar-none">
        <FundRaiserCard
          bgImage="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/can-you-wear-my-shoes-nafets-norim.jpg"
          title="Water Plant Project"
          description="Help us raise funds for orphan care and education. Help us raise funds for orphan care and education."
          raisedAmount="70000"
          totalAmount="100000"
          filledhr={"w-[70%]"}
        />
        <FundRaiserCard
          bgImage="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/dirty-dark-kitchen-in-an-old-beggars-house-a-grim-abstract-sce-tjeerd-kruse.jpg"
          title="Kitchen Reconstruction and Upgradation"
          description="Help us raise funds for orphan care and education. Help us raise funds for orphan care and education."
          raisedAmount="62000"
          totalAmount="80000"
          filledhr={"w-[86%]"}
        />

        <FundRaiserCard
          bgImage="https://images.fineartamerica.com/images-medium-large-5/hard-life-but-smile-on-their-faces-hamos-gyozo.jpg"
          title="Shelter"
          description="Help us raise funds for orphan care and education. Help us raise funds for orphan care and education."
          raisedAmount="280000"
          totalAmount="5600000"
          filledhr={"w-[8%]"}
        />
        <FundRaiserCard
          bgImage="https://images.fineartamerica.com/images-medium-large-5/3-nepal-mount-everest-david-noyes.jpg"
          title="Medical Center"
          description="Help us raise funds for orphan care and education. Help us raise funds for orphan care and education."
          raisedAmount="1800000"
          totalAmount="1960000"
          filledhr={"w-[96%]"}
        />

        <FundRaiserCard
          bgImage="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/can-you-wear-my-shoes-nafets-norim.jpg"
          title="Water Plant Project"
          description="Help us raise funds for orphan care and education."
          raisedAmount="700"
          totalAmount="1000"
          filledhr={"w-[70%]"}
        />
      </div>
    </div>
  );
}
