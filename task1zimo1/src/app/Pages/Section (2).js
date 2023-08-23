import React from "react";
import { useEffect, useState } from 'react';


const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const element = document.getElementById('fade-in-section');
      const windowHeight = window.innerHeight;
      const elementHeight = element.clientHeight;
      const elementOffset = element.offsetTop;

      const visiblePercentage = (windowHeight - Math.max(0, elementOffset - scrollTop)) / elementHeight;

      if (visiblePercentage >= 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const Section1 = () => {
  return (
    <div>

      <div
        id="Section2"
        className=" text-white text-center tracking-widest bg-black"
      >
        <div className="flex items-center max-lg:justify-center h-screen">
        <div className="block lg:flex w-4/5 lg:items-center ">
        <div className="flex justify-center m-10" id="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70%"
              height="70%"
              viewBox="0 0 222.654 54.47"
            >
              <g
                id="Group_3005"
                data-name="Group 3005"
                transform="translate(-56.415 -116.364)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M125.262,161.566v-1.14a17.669,17.669,0,0,0-1.185-5.391c-1.308-3.144-3.514-6.1-5.387-9.226-3.476-5.8-7.386-12.5-10.883-18.35-2.879-4.814-5.564-11-12.713-11.094-7.434-.1-9.907,6.219-12.605,10.783-8.567,14.488-26.074,43.645-26.074,43.645H64.5s16.7-28.442,24.995-42.816c1.06-1.838,3.163-4.25,5.6-4.25,3.7,0,5.555,4.24,7.219,7.152,4.456,7.8,8.75,15.271,12.929,22.809,1.314,2.369,3.982,5.49,2.155,8.708-1.191,2.1-3.594,1.97-7,1.97-.005.054-32.969,0-32.969,0v6.427h29.951s7.052.207,9.913-.311C122.019,169.628,124.59,166.1,125.262,161.566Z"
                  transform="translate(0 0)"
                  fill="#fff"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M99.743,125.631v1.141a17.662,17.662,0,0,0,1.185,5.39c1.308,3.145,3.514,6.1,5.387,9.227,3.476,5.8,7.385,12.5,10.881,18.35,2.88,4.813,5.564,11,12.714,11.093,7.435.1,9.907-6.218,12.605-10.782,8.567-14.489,26.074-43.645,26.074-43.645h-8.081s-16.7,28.441-25,42.816c-1.059,1.838-3.161,4.25-5.6,4.25-3.7,0-5.556-4.24-7.218-7.154-4.456-7.8-8.75-15.27-12.929-22.808-1.314-2.371-3.982-5.49-2.155-8.708,1.191-2.1,3.592-1.971,7-1.971,0-.053,32.969,0,32.969,0v-6.426H117.628s-7.052-.207-9.913.31C102.986,117.571,100.415,121.1,99.743,125.631Z"
                  transform="translate(13.394 0)"
                  fill="#fff"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M199.423,161.566v-1.14a17.666,17.666,0,0,0-1.185-5.391c-1.308-3.144-3.514-6.1-5.387-9.226-3.476-5.8-7.385-12.5-10.881-18.35-2.88-4.814-5.564-11-12.714-11.094-7.434-.1-9.907,6.219-12.605,10.783-8.567,14.488-26.074,43.645-26.074,43.645h8.081s16.7-28.442,25-42.816c1.06-1.838,3.162-4.25,5.6-4.25,3.7,0,5.556,4.24,7.219,7.152,4.456,7.8,8.75,15.271,12.929,22.809,1.316,2.369,3.982,5.49,2.155,8.708-1.191,2.1-3.592,1.97-7,1.97,0,.054-32.969,0-32.969,0v6.427h29.953s7.051.207,9.911-.311C196.18,169.628,198.751,166.1,199.423,161.566Z"
                  transform="translate(22.925 0)"
                  fill="#fff"
                />
                <path 
                  id="Path_4"
                  data-name="Path 4"
                  d="M173.9,125.631v1.141a17.663,17.663,0,0,0,1.185,5.39c1.308,3.145,3.515,6.1,5.387,9.227,3.476,5.8,7.386,12.5,10.883,18.35,2.879,4.813,5.564,11,12.713,11.093,7.434.1,9.908-6.218,12.606-10.782,8.567-14.489,26.074-43.645,26.074-43.645h-8.081s-16.7,28.441-25,42.816c-1.06,1.838-3.163,4.25-5.6,4.25-3.7,0-5.555-4.24-7.218-7.154-4.456-7.8-8.749-15.27-12.929-22.808-1.314-2.371-3.982-5.49-2.155-8.708,1.191-2.1,3.594-1.971,7-1.971,0-.053,32.968,0,32.968,0v-6.426H191.789s-7.052-.207-9.913.31C177.147,117.571,174.576,121.1,173.9,125.631Z"
                  transform="translate(36.318 0)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div className="flex justify-center w-full text-2xl font-light">
            <FadeInSection>
              <p className=" text-sm">We are the global platform.</p>
              <p className=" text-sm">Services in over one hundred and twenty countries.</p>
            </FadeInSection>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
