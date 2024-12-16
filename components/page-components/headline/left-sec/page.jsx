"use client";

import React, { useState } from "react";
import Image from "next/image";
import TradingViewWidgetSh from "@/components/tradingView/TradingViewWidgedSh";

const Left = () => {
  const [showAd, setShowAd] = useState(true);

  return (
    <div className="lg:col-span-3 2xl:border-r 2xl:block hidden border-gray-300 pr-4">
      <div>
        <TradingViewWidgetSh />

        {/* Advertisement Section */}
        {showAd && (
          <div className="relative w-full h-[500px] mt-10">
            {/* Label Advertisement with Close Button */}
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded flex items-center gap-2 z-10">
              <span>Ads</span>
              <button
                onClick={() => setShowAd(false)}
                className="text-white hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            {/* Gambar Advertisement */}
            <Image
              src="/Kinara1.webp"
              alt="Kinara Advertisement"
              className="rounded-lg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Left;
