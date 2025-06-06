"use client"; 
import React, { useState } from "react";

import HeroAnim from "../../../public/assets/lottie/hero-anim2.json";
import Lottie from "react-lottie";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const navItems = ["Home", "Features", "Solution", "Process", "About Us"];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleNavClick = (index, sectionId) => {
    setActiveIndex(index);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setShow(false);
  };

  const handleMobile = () => {
    setShow(false);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
    setDropdownOpen2(false);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
    setDropdownOpen1(false);
  };

  return (
    <div id="home" className="relative text-white gradient-background py-[2%] overflow-hidden">
      <header className="flex justify-between w-full items-center py-2 lg:py-4">
        <div className="mx-auto md:mx-[5%]">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-10 a-auto md:h-14 lg:h-auto"
          />
        </div>
        <div className="hidden lg:flex mx-[2%] gap-[50px] items-center">
          <ul className="text-[17px] cursor-pointer flex gap-[50px] font-[700]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${
                  activeIndex === index ? "" : "text-white/70 text-[16px]"
                }`}
                onClick={() =>
                  handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))
                }
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative">
            <button
              onClick={toggleDropdown1}
              className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              Get Started
            </button>
            {dropdownOpen1 && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10">
                <a
                  href="https://form.jotform.com/242172184154452"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For Individuals
                </a>
                <a
                  href="https://form.jotform.com/242172269063455"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For Business
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-5 right-4 lg:hidden">
          <img
            alt=""
            onClick={() => setShow(!show)}
            src="/assets/Icons/menu.svg"
            className="h-10 w-10 text-white"
          />
        </div>
        <div className="absolute lg:hidden">
          <div
            className={`${
              show === true ? "block" : "hidden"
            } fixed z-50 top-20 about-gradient right-5 backdrop-blur-lg py-4 px-5 rounded-lg`}
          >
            <ul className="text-[15px] space-y-3 cursor-pointer gap-[50px] font-[700]">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item`}
                  onClick={() =>
                    handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="flex px-[5%] flex-col h-auto lg:h-[650px] lg:flex-row gap-[2%] 2xl:gap-[5%] pt-[2%] lg:pt-[3%] items-center justify-between">
        <div className="lg:w-[55%] space-y-6 lg:space-y-8">
          {/* SOLUCIÓN: Texto con control específico de saltos de línea */}
          <h2 className="text-[38px] md:text-[68px] font-[600] leading-[60px] lg:leading-[100px] whitespace-nowrap md:whitespace-normal">
            <span className="block md:inline">Asset management</span>
            <br className="hidden md:block" />
            <span className="block md:inline">Done Right with</span>
          </h2>
          
          {/* Alternativa con más control */}
          {/* <h2 className="text-[38px] md:text-[72px] font-[600] leading-[60px] lg:leading-[100px]">
            <div className="flex flex-col md:block">
              <span>Asset management</span>
              <br />
              <span>Done Right with</span>
            </div>
          </h2> */}
          
          <img alt="Galileo Capital" src="/assets/fonts/Galileo capital.svg" className="w-full max-w-[600px]" />
          
          <p className="text-sm md:text-[23px] lg:text-[27px] font-[300] leading-[28px] md:leading-[38px] max-w-[90%] md:max-w-full">
            Safeguard Your Assets and Navigate the volatile world of digital
            assets with our{" "}
            <span className="font-[500]">secure and compliant</span> platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown2}
                className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500] w-full sm:w-auto"
              >
                Get Started
              </button>
              {dropdownOpen2 && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10 left-0">
                  <a
                    href="https://form.jotform.com/242172184154452"
                    className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    For Individuals
                  </a>
                  <a
                    href="https://form.jotform.com/242172269063455"
                    className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    For Business
                  </a>
                </div>
              )}
            </div>
            <a
              href="https://in.sumsub.com/idensic/l/#/uni_k0Terawfp39AHWgi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-[#28C0F5] border-2 hover:bg-[#28C0F5] duration-300 hover:text-white text-[#28C0F5] py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500] w-full sm:w-auto">
                Verify Identity
              </button>
            </a>
          </div>
        </div>
        <div className="w-full mx-auto flex justify-center items-center lg:w-[45%] xl:w-[50%]">
          <div className="w-full h-full min-h-[400px] lg:min-h-[500px]">
            <Lottie 
              options={defaultOptions} 
              style={{
                width: '100%',
                height: '100%',
                minWidth: '400px',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;