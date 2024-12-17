import React from "react";

const Introduction = () => {
  return (
    <div>
      <div className="my-24 md:flex gap-">
        <div className="flex items-center justify-around gap-">
          <div className="">
            <h1 className="flex -tracking-tight text-[24px] md:text-[28px] font-medium text-gray-900">
              BEST DEAL
            </h1>
            <p className="font-medium flex text-[14px] md:text-[14px] text-gray-800">
              Edge to edge full screen coverage.
            </p>
          </div>
          <div>
            <img className="max-w- h-64 md:h-96" src="wtc.png" alt="" />
          </div>
        </div>
        <div className="flex justify-around py-14 bg-[#F0F0F0] items-center">
          <div className="items-center">
            <h1 className="flex -tracking-tight text-[24px] md:text-[28px] font-medium text-gray-900">
              NEW ARRIVAL
            </h1>
            <p className="font-medium items-start pr- flex text-[14px] md:text-[14px] text-gray-800">
              Best carbon pollynet belt with smart diat.
            </p>
          </div>
          <div>
            <img className="max-w- h-64 md:h-96" src="strap.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
