import React from "react";
import Image from "next/image";
import Brand1 from "../Assets/brands1.png"
import Brand2 from "../Assets/brands2.png"
import Brand3 from "../Assets/brands3.png"
import Brand4 from "../Assets/brands4.png"

import { useEffect, useState } from 'react';

const FadeInSection2 = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const element = document.getElementById('fade-in-section');
      const elementOffset = element.offsetTop;
      const windowHeight = window.innerHeight;
      const elementHeight = element.clientHeight;

      const isElementVisible =
        scrollTop + windowHeight > elementOffset &&
        scrollTop < elementOffset + elementHeight;

      setIsVisible(isElementVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="fade-in-section"
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
};


const Section5 = () => {
  return (
    <div className="flex w-full h-screen bg-black">
      <div className="relative bg-fixed z-0 w-full h-screen bg-[url('https://zimogroup.org/_next/static/media/cars.b1e107ec.png')] bg-cover bg-center"></div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <span className="text-white text-2xl">CARS</span>
      </div>
      <div className="absolute invert w-full h-full flex justify-center items-center ">
        <div className=" h-screen flex justify-center items-end">
          <i className="absolute bottom-0 transform -translate-x-1/2 left-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20%"
              height="20%"
              viewBox="0 0 82.828 42.414"
            >
              <path
                id="Path_59"
                data-name="Path 59"
                d="M74.805,456.151l40-40-40-40"
                transform="translate(457.565 -73.391) rotate(90)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="absolute h-full w-full flex justify-end items-end">
        <div className=" bg-gray-200 h-48 w-72 m-5 rounded-lg opacity-50">
          <div className="grid grid-rows-3 gap-5 m-5">
              <Image src={Brand1} alt=""></Image>
              <Image src={Brand2} alt=""></Image>
              <Image src={Brand3} alt=""></Image>
              <Image src={Brand4} alt=""></Image>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section5;
