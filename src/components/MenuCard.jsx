import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const MenuCard = ({img}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1, delay: 0.3}}
    whileHover={{ scale: 1.1, transition: { duration: 0.2, delay:0.1 } }}
    className="bg-[#b7a69d] h-64 rounded-[36px] w-64 relative flex flex-col justify-between text-[#171a1f] ">
      <motion.div
      initial={{ y: -100 } }
      animate={{ y: 0 } }
      transition={{ duration: 1 }}
      className="image relative h-24 -top-24 left-8">
        <Image src={img} alt="coffee" width={200} height={200} />
      </motion.div>
      <div className="text p-5 absolute top-20">
        <h1 className="text-md font-bold">Americano</h1>
        <h1 className="text-sm">
          A classic espresso diluted with hot water, creating a bold and smooth
          coffee experience.
        </h1>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className="flex gap-2">
          <CiShoppingCart size={30} className="bg-gray-100 p-1 rounded-xl cursor-pointer" />
          <CiHeart size={30} className="bg-gray-100 p-1 rounded-xl cursor-pointer" />
        </div>
        <div className="bg-[#171a1f] text-white text-sm p-2 rounded-full drop-shadow-xl mr-4">
          $2.00
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
