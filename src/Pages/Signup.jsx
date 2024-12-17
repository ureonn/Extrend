import React from "react";

const Signup = () => {
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
              Have an account?{" "}
            </a>
            Login
          </label>
          <form className="space-y-2" action="">
            <div className="flex border items-center bg-black hover:border-white font-medium rounded-md border-gray-600 focus:outline-none focus:border-white">
              <input
                className="bg-black border font-medium border-gray-600 focus:outline-none focus:border-white rounded-md w-full p-3 pl-2 text-xs md:text-[15px]"
                type="name"
                placeholder="First name"
              />
            </div>
            <div className="flex border items-center bg-black hover:border-white font-medium rounded-md border-gray-600 focus:outline-none focus:border-white">
              <input
                className="bg-black border font-medium border-gray-600 focus:outline-none focus:border-white rounded-md w-full p-3 pl-2 text-xs md:text-[15px]"
                type="name"
                placeholder="Last name"
              />
            </div>
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
                placeholder="Create password"
              />
            </div>
          </form>
          <button className="text-sm h-10 text-black bg-white w-full rounded-md py-2 mt-4 font-medium hover:bg-black hover:text-white">
            Sign up
          </button>
        </div>
        <div className="md:flex hidden justify-end my-14 items-end h-auto">
          <img className="rounded-full max-w-md" src="hme.jpg" alt="" />
        </div>
      </div>
      <div className="flex items-start justify-start">
        <img className="md:h-44 h-20" src="3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Signup;
