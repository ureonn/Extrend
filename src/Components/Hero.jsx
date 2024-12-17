import React from "react";

const Hero = () => {
  return (
    <div className=" grid md:flex justify-center bg-black text-white md:justify-around">
      <div className="  mt-9 md:mt-28 ">
        <div className="font-medium grid justify-around text-center">
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
        <div className="flex md:justify-start justify-around mr-24 md:m-0">
          <button className="bg-white md:mt-8 mt-4 text-gray-950 hover:bg-black hover:text-white font-bold md:px-16 md:py-4 px-3 py-2 text- rounded-2xl md:text-xm">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex mt-6 max-w-md">
        <img className="w-full max-w-md rounded-md" src="hme.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
