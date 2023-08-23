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



const Section14 = () => {
  return (
    <div>
      <div id="section" className="relative ">
        <div
          id="logo"
          className="absolute inset-0 flex justify-center items-center opacity-25 blur-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1109.361"
            height="300"
            viewBox="0 0 1109.361 300"
          >
            <g
              id="Group_3326"
              data-name="Group 3326"
              transform="translate(0 0)"
            >
              <path
                id="Path_7823"
                data-name="Path 7823"
                d="M528.965,367.263v-6.281c-.832-11.038-2.817-21.045-6.281-29.694-6.934-17.325-18.625-33.594-28.549-50.816C475.716,248.517,455,211.6,436.463,179.409c-15.257-26.513-29.483-60.574-67.373-61.1-39.4-.544-52.507,34.247-66.8,59.383C256.88,257.487,164.1,418.08,164.1,418.08h42.826s88.52-156.649,132.467-235.822c5.621-10.122,16.762-23.407,29.695-23.407,19.624,0,29.439,23.356,38.255,39.4,23.612,42.973,46.367,84.1,68.519,125.616,6.966,13.055,21.1,30.239,11.422,47.961-6.319,11.563-19.047,10.852-37.115,10.852-.026.295-174.723,0-174.723,0v35.4H434.183s37.371,1.133,52.526-1.716C511.781,411.658,525.406,392.214,528.965,367.263Z"
                transform="translate(580.395 -118.304)"
                fill="#040506"
              />
              <path
                id="Path_7824"
                data-name="Path 7824"
                d="M270.01,118.3v7.421a14.962,14.962,0,0,1-2.971,8.688L76.656,400.281H268.313V418.3H47.819v-7.843a13.036,13.036,0,0,1,2.542-7.631l190.812-266.5H53.332V118.3Z"
                transform="translate(-47.819 -118.304)"
                fill="#161615"
              />
              <path
                id="Path_7825"
                data-name="Path 7825"
                d="M115.818,418.3H93.979v-300h21.839Z"
                transform="translate(201.559 -118.304)"
                fill="#161615"
              />
              <path
                id="Path_7826"
                data-name="Path 7826"
                d="M262.118,343.671c.845-2.254,1.729-4.488,2.651-6.678a55.081,55.081,0,0,1,3.073-6.255L385.718,122.331c1.133-1.837,2.26-2.971,3.393-3.393a13.754,13.754,0,0,1,4.668-.634h15.046v300H389.745V162.609a114.126,114.126,0,0,1,.64-11.659L272.292,360.637q-2.968,5.513-8.483,5.506h-3.393q-5.292,0-8.477-5.506L130.669,150.745a115.573,115.573,0,0,1,.634,11.864V418.3H112.435v-300h14.841a14.734,14.734,0,0,1,4.77.634,7.516,7.516,0,0,1,3.5,3.393L256.6,330.955A86.508,86.508,0,0,1,262.118,343.671Z"
                transform="translate(301.266 -118.304)"
                fill="#161615"
              />
            </g>
          </svg>
        </div>
        <div className=" h-screen flex justify-center items-center text-center">
          <h1>Bringing the world closer together.</h1>
          <div className="absolute  h-screen flex justify-center items-end">
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

export default Section14;
