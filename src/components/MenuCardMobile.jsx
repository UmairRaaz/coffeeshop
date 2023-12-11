import Image from "next/image";
import React from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const MenuCardMobile = ({ img }) => {
  return (
    <div className="bg-[#b7a69d]  h-20 rounded-md mt-8 w-24 relative flex flex-col justify-between">
      <div className="image relative h-24 -top-6 left-2">
        <Image src={img} alt="coffee" width={60} height={60} />
      </div>
      <div className="text p-2 absolute top-7">
        <h1 className="text-xs font-bold text-[#563322]">Americano</h1>
      </div>
      <div className="flex justify-between items-center p-3 absolute top-12 left-1">
        <div className="bg-black px-2 text-white text-[8px]  rounded drop-shadow-xl ">
          $2.00
        </div>
      </div>
      
    </div>
  );
};

export default MenuCardMobile;
