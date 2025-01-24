import React from "react";
import OurVisionCard from "./OurVisionCard";

export default function OurVision() {
  return (
    <div>
      <h1 className="capitalixe text-xl font-semibold text-center mt-32 w-[80%] m-auto md:w-[70%] md:text-2xl lg:text-3xl xl:text-4xl">
        Our Vision Is To Build A Community Of Empowered Orphans And People That
        Can Contribute To Society And Humanity At Large.
      </h1>
      <div className="flex flex-wrap justify-center max-w-[90%] m-auto mt-32  gap-10 md:w-[80%] mb-32">
        <OurVisionCard
          bgImg="https://havenofhopeintl.org/wp-content/uploads/2019/02/HP-Header.jpg"
          title="Orphan Care"
          description="We envision a world where everyone has access to quality healthcare. We are on a mission to provide free healthcare services to the underprivileged. "
          btnText="Our Seven Pillars"
          color={"orange"}
        />
        <OurVisionCard
          bgImg="https://dfnusa.org/wp-content/uploads/2021/04/Screen-Shot-2021-03-25-at-12.02.55-PM-3.png"
          title="Orphan Education"
          description="We envision a world where everyone has access to quality healthcare. We are on a mission to provide free healthcare services to the underprivileged."
          btnText="What We Do"
          color={"sky"}
        />
        <OurVisionCard
          bgImg="https://imageio.forbes.com/specials-images/imageserve/509719231/960x0.jpg?format=jpg&width=1440"
          title="Community Building"
          description="We envision a world where everyone has access to quality healthcare. We are on a mission to provide free healthcare services to the underprivileged."
          btnText="Our Programs"
          color={"green"}
        />
      </div>
    </div>
  );
}
