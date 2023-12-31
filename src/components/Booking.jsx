import React from "react";
import AnimatedText from "./AnimatedText";

const Booking = () => {
  return (
    <div id="booking" className="max-w-7xl mx-auto h-auto flex mb-10">
      <div className="w-[80%] mx-auto flex flex-col gap-20 md:gap-0 border-b border-[#c8956d] p-4">
        <div className="w-full mx-auto py-4 flex flex-col md:flex-row justify-between h-32">
          <div className="text-center lg:text-left">
            <h1 className="text-lg text-[#b7a69d] mb-2 font-bold ">
              <AnimatedText text={"Let's Talk"}/>
            </h1>
            <p className="text-[#c8956d] font-bold text-4xl">
              Wants to reserve a table
            </p>
          </div>

          <button className="bg-[#171a1f] h-10 text-[#b7a69d] px-5 py-2 rounded-full mt-5 drop-shadow-xl">
            Contact Now
          </button>
        </div>
        <div className="py-4 text-gray-100 font-bold  md:mt-0   pb-10">
          <p className="flex gap-2 text-2xl mb-2 font-bold text-[#c8956d]">🍽️
            <AnimatedText text={" Secure Your Spot at Perk & Pour"} />
          </p>
          <p className="text-[#b7a69d]">
            Reserve a table effortlessly for your next dining experience. Ensure
            a personalized and memorable meal by clicking &rdquo;Reserve
            Now&rdquo; or giving us a call. We can&lsquo;t wait to host you!
            🌟🍴
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
