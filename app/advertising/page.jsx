"use client";
import React, { useState } from "react";
import adsData from "../../data/adsData"; // Import data iklan

const Advertising = () => {
  const [showPopup, setShowPopup] = useState(false); // State untuk kontrol popup
  const [selectedAd, setSelectedAd] = useState(null); // State untuk data iklan yang dipilih

  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedAd(null);
  };

  return (
    <div className=" w-full flex justify-start items-start text-black py-8  relative">
      <div className="w-full flex flex-col justify-start items-start">
        <h1 className="text-3xl font-bold mb-4 text-center">All Ads Type</h1>
        <ul className="text-sm mb-6 space-y-2">
          <li>
            All the Banner ads are valid till 1 month from the date of display.
            However, the term can be extended by quick renewal.
          </li>
          <li>
            All Ads also published on social media, aggregator, and newsletter.
          </li>
          <li>Banner Ads can be: Gif Animation, Flash, or Static.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adsData.map((ad, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <h2 className="text-xl font-bold mb-2">{ad.title}</h2>
              <p className="text-gray-600 mb-4">Size - {ad.size}</p>
              <p className="text-2xl font-bold mb-4">{ad.price}</p>
              <button
                onClick={() => handleViewDetails(ad)}
                className="text-blue-500 text-sm hover:underline mb-6"
              >
                {ad.details}
              </button>
              <div className="flex space-x-4 text-sm">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                  <span>Pay with IDR</span>
                </button>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                  <span>Pay by Crypto</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && selectedAd && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg relative shadow-lg animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            {/* Content */}
            <h2 className="text-2xl font-bold mb-4">{selectedAd.title}</h2>
            <p className="text-gray-600 mb-4">Size: {selectedAd.size}</p>
            <p className="text-lg font-bold mb-4">Price: {selectedAd.price}</p>
            <p className="text-sm text-gray-500">
              This is a placeholder description for the ad. You can replace this
              text with actual details or additional information.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertising;
