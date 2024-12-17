"use client";
import React, { useState } from "react";
import Image from "next/image";
import adsData from "../../data/adsData"; // Import data iklan
import pressReleaseAds from "../../data/pressReleaseAds";
import PaymentButton from "../../components/button/Payment"
import { BsEye } from "react-icons/bs";

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
    <div className=" w-full flex flex-col justify-start items-start text-black py-8 mb-20 relative">
      <div className="w-full flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-center text-main">All Ads Type</h1>
        <ul className="text-md mb-6 space-y-2">
          <li>
          All banner ads are valid for 1 month with an option for quick renewal, published on social media,l.
          </li>
          <li>
          aggregator platforms, and newsletters, and can be in GIF animation, Flash, or static format.
          </li>
          
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {adsData.map((ad, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <h2 className="text-[22px] font-medium mb-2 text-main">{ad.title}</h2>
              <p className="text-gray-600 mb-4 text-[14px]">Size - {ad.size}</p>
              <p className="text-2xl font-bold mb-4">{ad.price}</p>
              <button
                onClick={() => handleViewDetails(ad)}
                className="text-blue-500 text-sm hover:underline mb-6 flex gap-2 justify-center items-center l"
              >
              <span className="text-lg"> <BsEye/></span> {ad.details}
              </button>
             <PaymentButton/>
            </div>
          ))}
        </div>
      </div>
      {/* press Release */}
      <div className="w-full flex flex-col justify-start items-start mt-24">
        <h1 className="text-3xl font-bold mb-4 text-start text-main">Press Release/Guess Post/Sponsored Article</h1>
        <div className="">
        <p className="text-md">To effectively convey your message and announcements to the fintech community, utilizing Press Releases (PR), Guest Posts, and Sponsored Articles is the ideal solution..</p>
        <p className="text-md"> These methods ensure clarity, professionalism, and maximum outreach for your project.</p>
       </div>
        <ul className="text-md list-inside list-disc mb-6 space-y-2 mt-2 py-5">
          <p className="font-bold">
            NOTE:
            </p>
          <li className="mt-3">
          All articles must be 100% unique to maintain content integrity and SEO performance.
          </li>
          <li>Spammy or irrelevant links will not be accepted. Links must be directly relevant to the content and target audience.</li>
          <li>Articles will be published within 24 hours of payment confirmation. Articles may go live at any time during this window.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressReleaseAds.map((pr, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <h2 className="text-[24px] font-medium mb-2 text-main">{pr.title}</h2>
              
              <p className="text-3xl font-bold mb-4">{pr.price}</p>
            
              <PaymentButton/>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && selectedAd && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 2xl:p-0 p-5">
          <div className="bg-white w-[600px] 2xl:h-[650px] h-[550px] p-10 rounded-lg relative shadow-lg animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-6 text-black text-xl font-bold"
            >
              ✕
            </button>
            {/* Content */}
            <h2 className="text-2xl font-bold mb-4">{selectedAd.title}</h2>
            <p className="text-gray-600 mb-4">Size: {selectedAd.size}</p>
            <p className="text-lg font-bold">Price: {selectedAd.price}</p>
            <div className="relative w-full 2xl:h-[300px] h-[200px] mt-10">
              <Image
                src={selectedAd.image} // Ambil gambar dari properti 'image'
                alt={selectedAd.title}
                className="rounded-lg"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex justify-center items-center mt-10">
            <PaymentButton/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertising;
