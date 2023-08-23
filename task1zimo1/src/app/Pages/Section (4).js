import React from "react";

import { useEffect, useState } from 'react';

const FadeInSection4 = ({ children }) => {
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
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};


const Section3 = () => {
  return (
    <div>
      <div id="Section6" className="relative">
        <div className="flex bg-black  h-screen ">
          <div className=" z-0">
            <div
              id="logo"
              className="absolute inset-0 flex justify-center items-center opacity-17 blur-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1107.162"
                height="100"
                viewBox="0 0 1107.162 100"
              >
                <g
                  id="Group_4553"
                  data-name="Group 4553"
                  transform="translate(-66.748 -183.441)"
                >
                  <path
                    id="Path_27238"
                    data-name="Path 27238"
                    d="M139.119,183.609v2.42a4.86,4.86,0,0,1-.967,2.828l-62.013,86.6h62.427v5.873H66.748v-2.558a4.239,4.239,0,0,1,.829-2.486l62.151-86.8H68.543v-5.873Z"
                    transform="translate(0 0.937)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27239"
                    data-name="Path 27239"
                    d="M92.742,281.327H85.626V183.609h7.116Z"
                    transform="translate(105.278 0.937)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27240"
                    data-name="Path 27240"
                    d="M144.471,257.019c.276-.743.566-1.46.862-2.184a18.829,18.829,0,0,1,1.006-2.032l38.389-67.879a2.507,2.507,0,0,1,1.111-1.1,4.293,4.293,0,0,1,1.519-.211h4.9v97.718h-6.215V198.045a37.09,37.09,0,0,1,.21-3.8l-38.468,68.293a3.009,3.009,0,0,1-2.762,1.8h-1.1a3.106,3.106,0,0,1-2.762-1.8l-39.5-68.359a37.555,37.555,0,0,1,.21,3.867v83.282H95.717V183.609h4.834a4.572,4.572,0,0,1,1.552.211,2.4,2.4,0,0,1,1.144,1.1l39.428,67.951A28.108,28.108,0,0,1,144.471,257.019Z"
                    transform="translate(161.554 0.937)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27241"
                    data-name="Path 27241"
                    d="M211.247,233.365a59.388,59.388,0,0,1-3.381,20.546,45.542,45.542,0,0,1-9.53,15.751,42.137,42.137,0,0,1-14.712,10.076,52.091,52.091,0,0,1-37.843,0,42.111,42.111,0,0,1-14.706-10.076,46.027,46.027,0,0,1-9.569-15.751,63.324,63.324,0,0,1,0-41.019,46,46,0,0,1,9.569-15.745,42.657,42.657,0,0,1,14.706-10.115,48.266,48.266,0,0,1,18.856-3.591,49.1,49.1,0,0,1,18.987,3.552,42.008,42.008,0,0,1,14.712,10.128,45.816,45.816,0,0,1,9.53,15.771A59.236,59.236,0,0,1,211.247,233.365Zm-7.32,0A55.956,55.956,0,0,0,201.1,215a39.626,39.626,0,0,0-7.978-13.8,34.124,34.124,0,0,0-12.4-8.668,41.7,41.7,0,0,0-16.087-3.006,41.067,41.067,0,0,0-15.916,3.006,34.836,34.836,0,0,0-12.437,8.668,39.4,39.4,0,0,0-8.076,13.8,60.4,60.4,0,0,0,0,36.777,39.463,39.463,0,0,0,8.076,13.778,34.49,34.49,0,0,0,12.437,8.629,41.423,41.423,0,0,0,15.916,2.966,42.064,42.064,0,0,0,16.087-2.966,33.792,33.792,0,0,0,12.4-8.629,39.684,39.684,0,0,0,7.978-13.778A55.865,55.865,0,0,0,203.927,233.365Z"
                    transform="translate(286.34 0)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27242"
                    data-name="Path 27242"
                    d="M195.228,277.634a76.442,76.442,0,0,0,9.181-.513,49.81,49.81,0,0,0,7.7-1.559,47.422,47.422,0,0,0,6.774-2.525q3.206-1.48,6.452-3.341V243.382H206.553a1.8,1.8,0,0,1-1.276-.487,1.446,1.446,0,0,1-.52-1.1V237.93h27v34.732a63.876,63.876,0,0,1-7.6,4.558,50.087,50.087,0,0,1-8.425,3.348,64.019,64.019,0,0,1-9.668,2.072,81.238,81.238,0,0,1-11.319.73,50.769,50.769,0,0,1-19.3-3.558,42.751,42.751,0,0,1-14.982-10.082,45.419,45.419,0,0,1-9.707-15.784,62.932,62.932,0,0,1,0-41.118,44.8,44.8,0,0,1,9.806-15.745A43.371,43.371,0,0,1,176,186.993a55.415,55.415,0,0,1,20.335-3.552,64.485,64.485,0,0,1,10.326.763,48.1,48.1,0,0,1,8.8,2.236,41.583,41.583,0,0,1,7.6,3.663,51.712,51.712,0,0,1,6.774,5.012l-1.868,3.038a1.935,1.935,0,0,1-1.723,1.033,2.584,2.584,0,0,1-1.177-.276,14.608,14.608,0,0,1-3.006-1.934,32.045,32.045,0,0,0-5.321-3.176,44.16,44.16,0,0,0-8.385-2.973,49.5,49.5,0,0,0-12.22-1.309,46.469,46.469,0,0,0-17.2,3.038,36.479,36.479,0,0,0-13.088,8.7,38.558,38.558,0,0,0-8.352,13.811,53.82,53.82,0,0,0-2.94,18.3,54.568,54.568,0,0,0,2.973,18.579,39.781,39.781,0,0,0,8.32,13.917,35.839,35.839,0,0,0,12.845,8.734A43.642,43.642,0,0,0,195.228,277.634Z"
                    transform="translate(449.238 0)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27243"
                    data-name="Path 27243"
                    d="M175.488,237.124v44.2h-7.05V183.609h24.933q16.919,0,25.275,6.531T227,209.3a26.229,26.229,0,0,1-1.934,10.22,24.049,24.049,0,0,1-5.557,8.116,29.627,29.627,0,0,1-8.741,5.728,38.611,38.611,0,0,1-11.529,2.933,11.2,11.2,0,0,1,2.966,2.769l33.634,42.262H229.7a4.055,4.055,0,0,1-1.9-.421,4.858,4.858,0,0,1-1.552-1.381l-31.286-39.632a6.918,6.918,0,0,0-2.519-2.144,10.558,10.558,0,0,0-4.183-.625Zm0-5.248h16.988a40.086,40.086,0,0,0,11.634-1.552,25.087,25.087,0,0,0,8.708-4.452,19.323,19.323,0,0,0,5.419-6.971,21.942,21.942,0,0,0,1.861-9.188q0-10.428-6.833-15.469t-19.895-5.038H175.488Z"
                    transform="translate(567.103 0.937)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27244"
                    data-name="Path 27244"
                    d="M277.37,233.365a59.237,59.237,0,0,1-3.387,20.546,45.443,45.443,0,0,1-9.53,15.751,42.112,42.112,0,0,1-14.706,10.076,52.091,52.091,0,0,1-37.843,0A42.111,42.111,0,0,1,197.2,269.663a46.026,46.026,0,0,1-9.569-15.751,63.21,63.21,0,0,1,0-41.019,46,46,0,0,1,9.569-15.745A42.657,42.657,0,0,1,211.9,187.032a48.257,48.257,0,0,1,18.849-3.591,49.109,49.109,0,0,1,18.994,3.552,41.983,41.983,0,0,1,14.706,10.128,45.716,45.716,0,0,1,9.53,15.771A59.084,59.084,0,0,1,277.37,233.365Zm-7.32,0A55.78,55.78,0,0,0,267.216,215a39.614,39.614,0,0,0-7.971-13.8,34.123,34.123,0,0,0-12.4-8.668,41.71,41.71,0,0,0-16.093-3.006,41.09,41.09,0,0,0-15.916,3.006,34.786,34.786,0,0,0-12.424,8.668,39.219,39.219,0,0,0-8.083,13.8,60.266,60.266,0,0,0,0,36.777,39.276,39.276,0,0,0,8.083,13.778,34.442,34.442,0,0,0,12.424,8.629,41.447,41.447,0,0,0,15.916,2.966,42.073,42.073,0,0,0,16.093-2.966,33.791,33.791,0,0,0,12.4-8.629,39.672,39.672,0,0,0,7.971-13.778A55.689,55.689,0,0,0,270.05,233.365Z"
                    transform="translate(655.06 0)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27245"
                    data-name="Path 27245"
                    d="M242.943,276.282a30.912,30.912,0,0,0,12.608-2.453,26.937,26.937,0,0,0,9.425-6.8,29.82,29.82,0,0,0,5.906-10.26,38.661,38.661,0,0,0,2.039-12.733V183.609h7.037v60.427a43.572,43.572,0,0,1-2.552,15.087,36.039,36.039,0,0,1-7.353,12.22,33.87,33.87,0,0,1-11.674,8.181,41.459,41.459,0,0,1-30.865,0,33.87,33.87,0,0,1-11.674-8.181,36.039,36.039,0,0,1-7.353-12.22,43.726,43.726,0,0,1-2.552-15.087V183.609h7.116v60.355a38.766,38.766,0,0,0,2.032,12.746,30.067,30.067,0,0,0,5.873,10.247,26.949,26.949,0,0,0,9.385,6.84A30.585,30.585,0,0,0,242.943,276.282Z"
                    transform="translate(776.216 0.937)"
                    fill="#be9f56"
                  />
                  <path
                    id="Path_27246"
                    data-name="Path 27246"
                    d="M233.038,241.958v39.369h-7.05V183.609H251.2q17.2,0,25.932,7.53t8.734,21.48a28.766,28.766,0,0,1-2.381,11.8,26.3,26.3,0,0,1-6.866,9.293,32.025,32.025,0,0,1-10.917,6.07,44.945,44.945,0,0,1-14.5,2.177Zm0-5.663H251.2a35.055,35.055,0,0,0,11.6-1.789,25.518,25.518,0,0,0,8.668-4.972,21.509,21.509,0,0,0,5.452-7.5,23.064,23.064,0,0,0,1.9-9.418q0-11.266-6.938-17.336T251.2,189.206H233.038Z"
                    transform="translate(888.047 0.937)"
                    fill="#be9f56"
                  />
                </g>
              </svg>
            </div>
          </div>
          <FadeInSection4 className=" w-full h-full ">
            <div className="m-20 grid grid-cols-6 grid-cols-6 z-10 text-white text-center ">
              <div className="py-14">FINANCE</div>
              <div className=" pl-20"></div>
              <div className="flex justify-center  py-14">LEGAL</div>
              <div className=" "></div>
              <div className="flex justify-center py-14">JETS</div>
              <div className="flex justify-center  py-14"></div>
              <div className="flex justify-center py-14">PLATFORM</div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center  py-14">DATA</div>
              <div className="flex justify-center">REAL ESTATE</div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center  py-14"></div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center py-14">CLOUD</div>
              <div className="flex justify-center  py-14"></div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center py-14">CARS</div>
              <div className="flex justify-center  py-14"></div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center py-14">TRAVEL</div>
              <div className="flex justify-center ">YACHTS</div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center  ">
                CRYPTOCURRENCY EXCHANGE
              </div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center  py-14">WATCHES</div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center py-14">PRIVATE ISLANDS</div>
              <div className="flex justify-center  py-14"></div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center py-14"></div>
              <div className="flex justify-center  py-14"></div>
              <div className="flex justify-center py-14">DIAMONDS</div>
              <div className="flex justify-center py-14"></div>
            </div>
          </FadeInSection4>
        </div>
      </div>
    </div>
  );
};

export default Section3;
