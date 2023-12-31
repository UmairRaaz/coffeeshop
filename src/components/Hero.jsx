import Image from "next/image";
import React from "react";
import { CiCoffeeCup } from "react-icons/ci";
import { FaCoffee } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import IconCards from "./IconCards";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
const Hero = () => {
 
  return (
    <div
      id="home"
      className="max-w-7xl mx-auto pb-10  pt-0 md:pt-2 overflow-hidden"
    >
      <div className="flex justify-between flex-col md:flex-row items-center w-[80%] mx-auto border-b border-[#c8956d] gap-10 md:gap-0 pb-0 md:pb-8">
        <div className="mt-20 md:mt-0 ">
          <div
            className="text-5xl font-bold leading-10"
          >
            <h1 className="mb-2 md:mb-4"><AnimatedText text={"Coffee"}/></h1>
            <h1 className="text-4xl md:text-5xl"><AnimatedText text={"The Best For You"}/></h1>
            
          </div>
          <Link href="#menu">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="bg-[#171a1f] text-[#b7a69d] px-5 py-2 rounded-full mt-5 drop-shadow-xl"
            >
              View Menu
            </motion.button>
          </Link>

          <div className="flex gap-8 mt-6">
            <IconCards icons={<CiCoffeeCup size={30} />} />
            <IconCards icons={<FaCoffee size={30} />} />
            <IconCards icons={<GiCoffeeBeans size={30} />} />
            <IconCards icons={<SiBuymeacoffee size={30} />} />
          </div>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="pb-8 md:pb-0"
        >
          <Image
            src={"/heroTwo.png"}
            width={450}
            height={450}
            alt="heroImage"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
