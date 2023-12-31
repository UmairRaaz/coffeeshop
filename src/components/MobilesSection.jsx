import React from "react";
import MobileOne from "./MobileOne";
import MobileTwo from "./MobileTwo";
import AnimatedText from "./AnimatedText";

const MobilesSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex mb-10">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row p-4 mt-10 md:mt-0 border-b border-[#c8956d] pb-10">
        <div className="lg:w-auto pr-4 flex flex-col md:flex-row items-center justify-between">
          <MobileOne />
          <MobileTwo />
        </div>
        <div className="lg:w-auto md:pr-4 md:mt-32 mt-8 md:pl-8 ">
          <h1 className="text-4xl font-bold"><AnimatedText text={"App is Available"}/></h1>
          <p 
          className="text-sm mt-4 text-justify font-semibold text-[#b7a69d]">
            Exciting news! Perk & Pour app is now available. Order your favorite
            brew with a tap, unlock exclusive offers, and find the nearest
            location effortlessly. Your coffee, your way—download now for a
            seamless and rewarding coffee experience! ☕
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobilesSection;
