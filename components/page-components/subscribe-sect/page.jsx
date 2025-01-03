import React from "react";

const SubscriptionSect = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 mt-10">
      {/* Wrapper Kiri */}
      <div className="2xl:w-[50%] w-full p-5 flex flex-col ">
      <h2 className="text-3xl font-bold ">Newsletter Subscribed</h2>
        <p className="text-sm mt-2">
          Get dialed in every Tuesday & Friday with quick updates on the world of crypto
        </p>

        <div className="flex flex-wrap w-full bg-gray-100 py-6  items-start justify-between mt-5">
        <div className="flex flex-col items-start lg:w-1/4 w-1/2 mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold">2M+</h2>
          <p className="2xl:text-sm text-xs text-gray-600 text-start">Active Monthly Users </p>
        </div>
        <div className="flex flex-col items-start lg:w-1/4 w-1/2 mb-4 lg:mb-0 ">
          <h2 className="text-2xl font-bold">250+</h2>
          <p className="2xl:text-sm text-xs text-gray-600 text-start">Guides and Reviews Articles</p>
        </div>
        <div className="flex flex-col items-start lg:w-1/4 w-1/2 mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold">8</h2>
          <p className="2xl:text-sm text-xs text-gray-600 text-start">Years on the Market</p>
        </div>
        <div className="flex flex-col items-start lg:w-1/4 w-1/2">
          <h2 className="text-2xl font-bold">70</h2>
          <p className="2xl:text-sm text-xs text-gray-600 text-start">International Team Authors</p>
        </div>
      </div>
        </div>


      {/* Wrapper Kanan */}
      <div className=" 2xl:w-[50%] w-full bg-main text-white 2xl:p-12 p-10 flex flex-col justify-between rounded-lg">
      
        <h2 className="text-md font-bold  mb-4">Enter your email for our free Newsletter</h2>
        <div className="flex flex-col 2xl:flex-row 2xl:gap-0 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-4 2xl:w-full  rounded-md  2xl:rounded-none 2xl:text-md text-sm 2xl:rounded-l-md text-black"
          />
          <button className="bg-blue-300 px-6 py-4 rounded-md  2xl:rounded-none 2xl:text-md text-sm 2xl:rounded-r-md text-white hover:bg-purple-700">
            Sign Up
          </button>
        </div>
        <p className="text-xs mt-4 italic">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
          apply.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionSect;
