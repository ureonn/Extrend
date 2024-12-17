import React from "react";
import { CgMenuHotdog } from "react-icons/cg";
import { FaOpencart, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiAccountBoxLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <div className="md:flex hidden justify-between bg-black text-white p-1 px-9 font-medium text-xm">
        <h1>
          <a href="#">Welcome-Sign Up Now And Get 25% Off</a>
        </h1>
        <h1>
          Call The Experts - <a href="#">(123)456-7890</a>
        </h1>
      </div>
      <nav>
        <div className="flex justify-between items-center">
          <div className="border-none leading-tight w-32">
            <h1 className="font-medium flex text-2xl md:text-4xl">Extrend</h1>
            <span className="flex items-end text-[12px] md:p-0 pr-11 md:text-[19px] font-medium text-gray-800 justify-end">
              smart watch
            </span>
          </div>
          <ul className="md:flex hidden space-x-6">
            <li className="text-[18px] font-medium">
              <a href="#">Home</a>
            </li>
            <li className="text-[18px] font-medium flex items-center">
              <a href="#">Shop</a>
              <IoIosArrowDown />
            </li>
            <li className="text-[18px] font-medium flex items-center">
              <a href="#">Furniture</a>
              <IoIosArrowDown />
            </li>
            <li className="text-[18px] font-medium pr-3">
              <a href="#">Sale</a>
            </li>
            <li className="text-[18px] font-medium">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="md:flex hidden items-center gap-5">
            <button className="text-3xl">
              <RiAccountBoxLine />
            </button>
            <button className="text-2xl">
              <FaSearch />
            </button>
            <button className="text-3xl">
              <FaOpencart />
            </button>
          </div>
          <button className="md:hidden flex">
            <CgMenuHotdog size={35} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
