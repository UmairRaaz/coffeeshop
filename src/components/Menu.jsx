import React from "react";
import MenuCard from "./MenuCard";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <div
      id="menu"
      className="max-w-7xl mx-auto h-[150vh] z-50 md:h-screen border-x-0 border-y-2 border-[#563322]"
    >
      <div className="w-[80%] mx-auto flex justify-between items-center md:flex-row border-b border-[#c8956d] flex-col-reverse my-0 gap-36 md:gap-0 pb-28 md:mt-32  ">
        <div className="flex flex-col md:flex-row md:gap-6 gap-28 items-center md:items-start w-auto ">
          <MenuCard img={"/cup1.png"} />
          <MenuCard img={"/cup3.png"} />
        </div>
        <div className="flex flex-col w-auto px-2 md:px-10 md:pl-14  ">
          <h1 className="text-4xl font-bold">
            <AnimatedText text={["Welcome to", " Perk & Pour"]} />
          </h1>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="mt-4 text-sm font-semibold text-[#b7a69d]"
          >
            At Perk & Pour, we are passionate about crafting exceptional coffee
            experiences. Our journey began with a simple idea – to create a
            space where coffee enthusiasts and casual drinkers alike can savor
            the finest coffees from around the world.
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
