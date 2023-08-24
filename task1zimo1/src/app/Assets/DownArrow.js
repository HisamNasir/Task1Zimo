import React from 'react';

const scrollToBottom = () => {
  const windowHeight = window.innerHeight;
  window.scrollTo({
    top: windowHeight,
    behavior: 'smooth', // Add smooth scrolling effect
  });
};

const DownArrow = () => {
  return (
    <div className="">
      <button
        id="scrollButton"
        className=""
        onClick={scrollToBottom}
      >

        <div className=" h-screen flex justify-center items-end">
          <i className="absolute bottom-0 transform -translate-x-1/2 left-1/2 -translate-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="82.828" height="42.414" viewBox="0 0 82.828 42.414">
              <path id="Path_59" data-name="Path 59" d="M74.805,456.151l40-40-40-40" transform="translate(457.565 -73.391) rotate(90)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </i>
        </div>


      </button>
    </div>
  );
};

export default DownArrow;
