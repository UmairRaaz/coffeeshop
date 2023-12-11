import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";
import { delay, motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto h-screen overflow-x-hidden"
    >
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row  p-4  justify-between border-b border-[#c8956d] items-center md:py-36">
        <div className="lg:w-3/5 pr-4 md:mb-10">
          <h2 className="text-4xl font-bold mb-2">
            <AnimatedText text={"Our Mission"} />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="text-md mt-5 text-[#b7a69d]"
          >
            At Perk & Pour, we are on a mission to craft unforgettable coffee
            experiences. We strive to create a space where coffee enthusiasts,
            casual drinkers, and everyone in between can come together to
            appreciate the artistry of a perfectly brewed cup.
          </motion.p>
        </div>
        <motion.div
          initial={{ x: 510 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:w-2/5 lg:mt-0 relative md:mt-0 mt-10"
        >
          <Image
            src={"/cup6.png"}
            alt="coffee"
            width={300}
            height={300}
            className="z-10 md:absolute md:-top-44 top-0 left-0 "
          />
          <div className="bg-[#171a1f] text-[#b7a69d] p-2 md:w-20 rounded-2xl inline absolute md:right-24 md:-top-36 top-0 left-0 z-20">
            $2.50
          </div>
          <div className="">
            <Image
              src={"/beans.png"}
              width={700}
              height={700}
              alt="beans"
              className="md:absolute md:-top-24 z-[1]  top-0 left-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
