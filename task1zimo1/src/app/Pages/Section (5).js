import React from "react";

import { useEffect, useState } from 'react';



const Section4 = () => {
  return (
    <div className="flex bg-black">
    <div className="relative bg-fixed  z-0 w-full h-screen bg-[url('https://zimogroup.org/_next/static/media/bg-1.73b2c3da.png')] bg-cover bg-center"></div>
    <div className="absolute w-full h-full flex justify-center items-center">
              <span className="text-white text-2xl">REAL ESTATE</span>
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

  </div>
  );
};

export default Section4;
