"use client";
import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Plan = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto 2xl:px-6 px-3 py-10 2xl:w-[70%] w-full text-black">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-main">
        Upgrade Your Plan
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Choose the best plan that suits your needs and enjoy premium benefits.
      </p>

      {/* Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free Plan */}
        
        <div className="p-6 border rounded-lg shadow-md flex justify-between flex-col">
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Free Plan</h2>
          <p className="text-gray-700 mb-4">
            Basic access with limited features, perfect for beginners.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500" />
              Access to basic articles
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500" />
              Community support
            </li>
          </ul>
          </div>
          <div className="">
          <button
            className="w-full py-4 px-4  border-2   mb-4 rounded-md text-main font-medium hover:bg-main hover:text-white transition"
            disabled
          >
            Current Plan
          </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="p-6 h-[700px] border rounded-lg shadow-md bg-main text-white flex flex-col justify-between">
            <div className="">
          <h2 className="text-2xl font-semibold ">Premium Plan</h2>
          <p className="text-white font-bold text-3xl py-5">Rp 1.500.000/month</p>
          <p className="text-white mb-4">
            Enjoy unlimited access to premium content and exclusive features.
          </p>
          <ul className="mb-6 space-y-2">
          <li className="flex items-center gap-2">
              <FiCheck className="text-yellow-300" />
              Analitic Markets from CryptoHell
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-yellow-300" />
              Prediction Price
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-yellow-300" />
              Unlimited access to premium articles
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-yellow-300" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-yellow-300" />
              Exclusive member community
            </li>
          </ul>
          </div>
          <div className="">
          <button
            onClick={() => router.push("/payment")}
            className="w-full py-4 px-4 mb-5 bg-yellow-400 bottom-0 text-black font-medium rounded-md hover:bg-yellow-300 transition"
          >
            Subscribe Now 
          </button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">Have questions about our plans?</p>
        <a
          href="/contact"
          className="text-main font-medium hover:underline inline-flex items-center mt-2"
        >
          Contact Us <FiArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Plan;
