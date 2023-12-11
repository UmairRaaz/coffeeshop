'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <motion.div
    initial={{y: -200}}
    animate={{y: 0}}
    transition={{duration:0.5, staggerChildren: 0.1}}
    >
      <nav className="w-full backdrop-blur-xl  z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-28">
          <div >
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-[#c8956d] font-bold ">Perk & Pour</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:py-6 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-base text-white py-2 md:px-6 text-center border-b-2 md:border-b-0   md:hover:text-[#171a1f] md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-[#171a1f] md:hover:bg-transparent">
                  <Link href="#menu" onClick={() => setNavbar(!navbar)}>
                    MENU
                  </Link>
                </li>
                <li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-[#171a1f] ">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    ABOUT
                  </Link>
                </li>
                <li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-[#171a1f] ">
                  <Link href="#booking" onClick={() => setNavbar(!navbar)}>
                    BOOK
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default NavBar;