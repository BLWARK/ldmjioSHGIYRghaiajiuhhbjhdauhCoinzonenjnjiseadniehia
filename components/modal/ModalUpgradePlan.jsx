"use client";
import React from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";

const ModalUpgradePlan = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-[500px] relative shadow-lg">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FiX size={24} />
        </button>

        {/* Judul Modal */}
        <h2 className="text-2xl font-bold mb-6 text-center text-main">
          Upgrade Plan
        </h2>

        {/* Konten Plan */}
        <div className="grid grid-cols-2 gap-6">
          {/* Plan Gratis */}
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center mb-2">Free Plan</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                Access to basic content
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                Limited access per month
              </li>
            </ul>
            <button className="w-full py-2 border rounded-md text-gray-600 hover:bg-gray-100">
              Current Plan
            </button>
          </div>

          {/* Plan Premium */}
          <div className="p-4 border rounded-lg shadow-md bg-main text-white">
            <h3 className="text-xl font-semibold text-center mb-2">Premium Plan</h3>
            <ul className="text-sm space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-white" />
                Access to premium content
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-white" />
                Unlimited access
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-white" />
                Priority support
              </li>
            </ul>
            <button className="w-full py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300">
              Subscribe Now - Rp 1.500.000/month
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpgradePlan;
