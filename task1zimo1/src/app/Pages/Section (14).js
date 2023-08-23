import React from "react";


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

const Section13 = () => {
  return (
    <div>
      <div id="Section16" className=" bg-black text-white">
        <div className=" h-screen flex justify-center items-center text-center">
          <h1>
            A REAL ESTATE AND PROPERTY PLATFORM THAT WILL CHANGE THE WORLD.
          </h1>
          <div className="absolute invert h-screen flex justify-center items-end">
          <i className="flex justify-center  bottom-0 transform -translate-x-1/2 left-1/2 animate-bounce">
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
    </div>
  );
};

export default Section13;
