import React from "react";
import Image from "next/image";
import Brand1 from "../Assets/brands1.png"
import Brand2 from "../Assets/brands2.png"
import Brand3 from "../Assets/brands3.png"
import Brand4 from "../Assets/brands4.png"

import { useEffect, useState } from 'react';
import PopUp from "../Assets/PopUp";



const Section5 = () => {
  return (
    <div className="flex w-full h-screen bg-black">
      <div className="relative bg-fixed z-0 w-full h-screen bg-[url('https://zimogroup.org/_next/static/media/cars.b1e107ec.png')] bg-cover bg-center"></div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <h1 className="text-s text-2xl text-white  opacity-50">CARS</h1>
      </div>

      <div className="absolute h-full w-full flex justify-end items-end">
       <div className=" bg-[#707070] h-[341px] w-[487px] m-5 p-5 rounded-lg opacity-50">
          <PopUp> <div className="grid grid-rows-4 gap-10 ">
              <Image src={Brand1} alt=""></Image>
              <Image src={Brand2} alt=""></Image>
              <Image src={Brand3} alt=""></Image>
              <Image src={Brand4} alt=""></Image>
          </div>
</PopUp>
        </div>
      </div>
      

    </div>
  );
};

export default Section5;
