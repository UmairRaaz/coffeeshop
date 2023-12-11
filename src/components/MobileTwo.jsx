import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { motion } from "framer-motion";

const MobileTwo = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:1}}
    className="relative">
      <div className="h-96 w-52 rounded-xl m-10 bg-[#171a1f] border border-[#171a1f] select-none">
        <div className="h-auto px-2 py-4">
          <IoIosArrowBack size={20} />
        </div>
        <div className="text-sm  mt-60 px-4">
            <h1 className="font-bold">Latte Grand</h1>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, mollitia!</p>
        </div>
      </div>
      <div className="image  absolute top-20 left-5">
        <Image
          src="/cup2.png"
          width={250}
          height={250}
          alt="coffee"
          className=""
        />
      </div>
      <div className="bg-[#563322] border border-[#171a1f] text-[#b7a69d] px-3 w-36 absolute top-8 -right-10 py-1 rounded-full mt-5 drop-shadow-xl flex items-center justify-between text-sm">Add to Cart <span><CiCirclePlus size={25}/></span></div>
    </motion.div>
  );
};

export default MobileTwo;
