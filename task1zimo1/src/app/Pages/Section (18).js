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

const Section17 = () => {
  return (
    <div>
      <div
        id="Section20"
        className="h-screen text-2xl relative flex items-center justify-center bg-black text-white"
      >
        <div className="  z-0">
          <div
            id="logo"
            className="absolute inset-0 flex justify-center items-center opacity-25 blur-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1109.36"
              height="271.394"
              viewBox="0 0 1109.36 271.394"
            >
              <g
                id="Group_4641"
                data-name="Group 4641"
                transform="translate(-56.415 -116.364)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M399.439,341.581V335.9c-.782-9.979-2.648-19.036-5.9-26.862-6.516-15.666-17.507-30.39-26.841-45.968-17.317-28.908-36.8-62.3-54.222-91.426-14.343-23.988-27.721-54.8-63.341-55.275-37.042-.489-49.363,30.986-62.806,53.725-42.684,72.183-129.911,217.46-129.911,217.46H96.679S179.9,245.843,221.215,174.225c5.283-9.157,15.759-21.176,27.917-21.176,18.446,0,27.675,21.126,35.966,35.637,22.2,38.881,43.6,76.087,64.417,113.644,6.549,11.806,19.842,27.352,10.736,43.388-5.936,10.463-17.9,9.816-34.889,9.816-.026.27-164.266,0-164.266,0v32.022H310.328s35.137,1.029,49.389-1.55C383.283,381.749,396.093,364.157,399.439,341.581Z"
                  transform="translate(0 0)"
                  fill="#fff"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M99.743,162.536v5.686c.783,9.979,2.648,19.03,5.9,26.856,6.516,15.672,17.506,30.39,26.841,45.974,17.318,28.9,36.794,62.3,54.216,91.426,14.349,23.982,27.721,54.792,63.348,55.269,37.042.5,49.363-30.98,62.806-53.719,42.684-72.19,129.911-217.46,129.911-217.46H402.5S319.281,258.273,277.96,329.9c-5.277,9.157-15.752,21.176-27.91,21.176-18.453,0-27.682-21.126-35.966-35.643-22.2-38.876-43.6-76.081-64.417-113.638-6.549-11.812-19.842-27.352-10.736-43.388,5.936-10.463,17.9-9.823,34.89-9.823.019-.263,164.265,0,164.265,0V116.568H188.855s-35.137-1.029-49.389,1.544C115.9,122.374,103.089,139.966,99.743,162.536Z"
                  transform="translate(239.284 0.003)"
                  fill="#fff"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M473.6,341.581V335.9c-.782-9.979-2.648-19.036-5.9-26.862-6.516-15.666-17.507-30.39-26.841-45.968-17.317-28.908-36.794-62.3-54.216-91.426-14.35-23.988-27.721-54.8-63.348-55.275-37.042-.489-49.363,30.986-62.806,53.725-42.684,72.183-129.911,217.46-129.911,217.46H170.84s83.222-141.712,124.543-213.33c5.284-9.157,15.752-21.176,27.91-21.176,18.453,0,27.682,21.126,35.966,35.637,22.2,38.881,43.6,76.087,64.418,113.644,6.555,11.806,19.841,27.352,10.736,43.388-5.936,10.463-17.9,9.816-34.89,9.816-.02.27-164.266,0-164.266,0v32.022H384.5s35.131,1.029,49.383-1.55C457.444,381.749,470.254,364.157,473.6,341.581Z"
                  transform="translate(409.563 0)"
                  fill="#fff"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M173.9,162.536v5.686c.783,9.979,2.648,19.03,5.9,26.856,6.516,15.672,17.513,30.39,26.84,45.974,17.318,28.9,36.8,62.3,54.223,91.426,14.343,23.982,27.721,54.792,63.341,55.269,37.042.5,49.364-30.98,62.806-53.719,42.684-72.19,129.911-217.46,129.911-217.46H476.664S393.442,258.273,352.128,329.9c-5.283,9.157-15.759,21.176-27.917,21.176-18.446,0-27.676-21.126-35.966-35.643-22.2-38.876-43.591-76.081-64.417-113.638-6.549-11.812-19.842-27.352-10.737-43.388,5.936-10.463,17.9-9.823,34.9-9.823.02-.263,164.259,0,164.259,0V116.568H263.016s-35.137-1.029-49.389,1.544C190.061,122.374,177.251,139.966,173.9,162.536Z"
                  transform="translate(648.846 0.003)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="relative">
          <h1>INTERESTED IN WORKING WITH US? </h1>
          <h1 className="flex justify-center mt-40 cursor-pointer">Email </h1>

        </div>
      </div>
    </div>
  );
};

export default Section17;
