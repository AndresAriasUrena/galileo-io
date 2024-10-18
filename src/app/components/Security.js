"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Security = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-start overflow-hidden gap-[3%] bg-[#09002a] px-[10%] pb-[8%] py-[50px] md:py-[5%] lg:space-y-0 md:space-y-8">
      <div data-aos="fade-up" className="md:block md:w-full mx-auto">
        <img src="/assets/img2.png" className="w-full h-auto mx-auto mt-10" />
      </div>

      <div
        data-aos="fade-up"
        className="space-y-8 pt-[8%] lg:pt-[6%] md:pb-[15%] lg:pb-0 md:ml-[40%] lg:ml-0 md:w-[60%]"
      >
        <img
          src="/assets/fonts/Minimized Volatility & Enhanced Security.svg"
          className="mb-10" // Añadido margen inferior
        />
        <p className="text-[18px] text-center md:text-end lg:text-start leading-[30px] lg:w-[75%] text-white/70">
          Our hedging strategies help mitigate price fluctuations, while
          Industry-leading security measures safeguard your assets.
        </p>
        <div className="relative">
          <img
            src="/assets/bg-art.png"
            className="hidden md:block absolute lg:-top-40 -top-[200px] -left-[75%] lg:left-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
