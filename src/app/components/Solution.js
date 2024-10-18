"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon4, Icon5, Icon6, PartnerWithGalileoFont, Img1 } from "../assets"; // Actualización de las importaciones

const Solution = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="solution"
      className="flex flex-col lg:flex-row gap-[2%] bg-[#09002a] px-[10%] py-[50px] md:py-[5%] justify-center"
    >
      <div data-aos="fade-up" className="md:w-[80%] lg:w-[65%] mx-auto">
        <div className="grid pb-[15%] grid-cols-3 gap-[4%] justify-between">
          <div className="flex flex-col text-center items-center gap-[20px]">
            <img src={Icon4} className="h-14 w-auto md:h-auto" alt="Icon 4" /> {/* Actualización del ícono */}
            <p className="text-[15px] md:text-[20px] lg:text-[23px] leading-[23px] md:leading-[38px]">
              Advanced Blockchain Technology
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-[20px]">
            <img src={Icon5} className="h-14 w-auto md:h-auto" alt="Icon 5" /> {/* Actualización del ícono */}
            <p className="text-[15px] md:text-[20px] lg:text-[23px] leading-[23px] md:leading-[38px]">
              Secure Trading Algorithms
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-[20px]">
            <img src={Icon6} className="h-14 w-auto md:h-auto" alt="Icon 6" /> {/* Actualización del ícono */}
            <p className="text-[15px] md:text-[20px] lg:text-[23px] leading-[23px] md:leading-[38px]">
              Robust Custody Agreements
            </p>
          </div>
        </div>
        <img
          src={PartnerWithGalileoFont}
          alt="Partner with Galileo Capital"
        /> {/* Actualización de la fuente */}
      </div>
      <div
        data-aos="fade-up"
        className="lg:ml-0 w-[90%] pt-[8%] lg:pt-0 lg:w-[35%] mx-auto lg:mx-0"
      >
        <img src={Img1} className="w-full h-auto" alt="Image 1" /> {/* Actualización de la imagen */}
      </div>
    </div>
  );
};

export default Solution;
