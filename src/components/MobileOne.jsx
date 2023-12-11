import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import IconCards from "./IconCards";
import { CiCoffeeCup } from "react-icons/ci";
import { FaCoffee } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import MenuCardMobile from "./MenuCardMobile";
import { motion } from "framer-motion";

const MobileOne = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:1}}
    className="h-96 w-52 rounded-xl mt-10  bg-[#171a1f] border border-[#171a1f] select-none">
      <div className="h-auto px-2 pt-6">
        <IoIosArrowBack size={20} />
      </div>
      <h1 className="text-md px-2 font-2xl font-bold">Coffee</h1>
      <button className="bg-[#563322] text-[10px] text-[#b7a69d] px-2 py-1 mb-2 ml-2 rounded-full drop-shadow-xl">
        View Menu
      </button>
      <div className="flex justify-evenly mt-1 ">
        <IconCards icons={<CiCoffeeCup size={15} />} />
        <IconCards icons={<FaCoffee size={15} />} />
        <IconCards icons={<GiCoffeeBeans size={15} />} />
        <IconCards icons={<SiBuymeacoffee size={15} />} />
      </div>
      <div className="flex justify-evenly gap-4 mt-1 px-4 ">
        <MenuCardMobile img={"/cup1.png"} />
        <MenuCardMobile img={"/cup3.png"} />
      </div>
      <div className="px-4 py-2 top-2">
        <h1 className="text-xs font-bold">Bean to Cup</h1>
        <h1 className="text-[10px]">
          Our Single-Origin Coffees embark on a journey 
        </h1>
      </div>
      <div className="bg-black mt-5 px-5 py-2 flex justify-evenly text-white rounded-full mx-2">
        <IoHomeOutline/>
        <CiShoppingCart/>
        <IoPersonOutline/>
        <CiMenuFries/>
      </div>
    </motion.div>
  );
};

export default MobileOne;
