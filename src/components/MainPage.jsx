"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";
import MobilesSection from "./MobilesSection";
import Booking from "./Booking";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoadingScroller from "./LoadingScroller";

const MainPage = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, [loaded]);

  return (
    <div>
      <div className="text-[#c8956d] bg-[#563322]">
        {loaded ? (
          <LoadingScroller/>
        ) : (
          <>
            <Navbar />
            <Hero />
            <Menu />
            <About />
            <MobilesSection />
            <Booking />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
