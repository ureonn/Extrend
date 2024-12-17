import React from "react";

const Hero = () => {
  return (
    <div className=" grid md:flex justify-center bg-black text-white md:justify-around">
      <div className="flex-col-ro  mt-9 md:mt-28 justify-center">
        <div className="font-medium text-center">
          <span className="text-xl md:text-4xl md:mb-1 text-gray-200 flex">
            {" "}
            Rich watch
          </span>
          <span className="md:text-7xl flex text-3xl font-bold">
            SALE 35% OFF
          </span>
          <span className="md:text-4xl text-xl md:mt-1 text-gray-200  flex">
            Make a Rich Life
          </span>
        </div>
        <button className="bg-white flex md:mt-8 mt-4 text-gray-950 hover:bg-black hover:text-white font-bold md:px-16 md:py-4 px-3 py-2 text- rounded-2xl md:text-xm">
          Shop Now
        </button>
      </div>
      <div className="flex mt-6 justify-center max-w-md">
        <img className="w-full rounded-md" src="hme.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
