import React from "react";
import Image from "next/image";
import BGimage from "./Assets/aaa (3).jpg";
const Section5 = () => {
  return (
    <div>
      <div id="Section8" className="relative bg-black  bg-cover bg-center text-white">
      <div className=" ">
        <Image className="absolute opacity-25 w-full h-full object-cover z-0" src={BGimage} alt='/'/>
        </div>
    
        <div className=" h-screen flex justify-center items-center ">
          <h1 className="z-10 text-2xl">CARS</h1>
        </div>
      </div>
    </div>
  );
};

export default Section5;
