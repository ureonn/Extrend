import React from "react";
import { BsEyeFill } from "react-icons/bs";

const Login = () => {
  return (
    <div className="bg-black text-white px-1">
      <div className="flex justify-center gap-9">
        <div className="grid justify-around pt-16">
          <div className="flex justify-center">
            <img className="md:h-16 h-9 mb-6" src="1.jpg" alt="" />
          </div>
          <h1 className="text-[19px] md:text-[25px] mb-1 font-medium text-gray-200">
            Yooo, welcome back!
          </h1>
          <label
            className="text-[11px] md:text-[14px] mb-7 font-medium"
            htmlFor=""
          >
            <a className="text-gray-300" href="#">
              First time here?{" "}
            </a>
            Sign up for free
          </label>
          <form className="space-y-2" action="">
            <div className="flex border items-center bg-black hover:border-white font-medium rounded-md border-gray-600 focus:outline-none focus:border-white">
              <input
                className="bg-black border font-medium border-gray-600 focus:outline-none focus:border-white rounded-md w-full p-3 pl-2 text-xs md:text-[15px]"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="flex border items-center bg-black hover:border-white font-medium rounded-md border-gray-600 focus:outline-none focus:border-white">
              <input
                className="bg-black border font-medium border-gray-600 focus:outline-none focus:border-white rounded-md w-full p-3 pl-2 text-xs md:text-[15px]"
                type="password"
                placeholder="Enter password"
              />
              {/* <span className="pr-2">
                <BsEyeFill size={16} />
              </span> */}
            </div>
          </form>
          <button className="text-sm h-10 text-black bg-white w-full rounded-md py-2 mt-2 font-medium hover:bg-black hover:text-white">
            Sign in
          </button>
          <h1 className="text-[14px] text-gray-200 font-medium mt-3">
            <a href="#">Sign in using magic link</a>
          </h1>
          <h1 className="flex items-center">
            <hr className="w-full  mr-1" />
            <span className="text-[14px] pb-1">or</span>
            <hr className=" w-full ml-1" />
          </h1>
          <button className="h-10 text-sm border border-gray-400 text-gray-200 w-full rounded-md py-2 mt-2 font-medium hover:text-white">
            Single sign-on (sso)
          </button>
          <h1 className="max-w-sm mt-9 text-xs font-medium">
            You acknowledge that you read and agree, to our <br />{" "}
            <a className="underline" href="#">
              Terms of service{" "}
            </a>
            and
            <a className="underline" href="#">
              {" "}
              Privacy policy
            </a>
          </h1>
        </div>
        <div className="md:flex hidden justify-end my-14 items-end h-auto">
          <img className="rounded-full max-w-md" src="hme.png" alt="" />
        </div>
      </div>
      <div className="flex items-start justify-start">
        <img className="md:h-32 h-20" src="3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Login;
