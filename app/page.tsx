"use client";
import React, { useState } from "react";
import Left from "@/components/page-components/headline/left-sec/page";
import Center from "@/components/page-components/headline/center-sec/page";
import Right from "@/components/page-components/headline/right-sec/page";
import Image from "next/image";

const HomePage = () => {
  const [showAd, setShowAd] = useState(true);

  return (
    <div className="w-full h-full bg-white text-black ">
      {/* Banner Section */}
      <section className="Banner container mx-auto py-8 ">
        {/* Advertisement Section */}
        {showAd && (
          <div className="relative w-full -z-6">
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
            <div className="relative w-full 2xl:h-[150px] h-[100px] bg-gray-200">
              <Image
                src="/P2e Banner.jpg"
                alt="banner 1"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </section>
      {/* Section Headlines */}
      <section className="Headlines container mx-auto  px-4">
        <h1 className="text-3xl font-bold text-main ">Headliness</h1>
        <div className="w-full h-[1px] my-4 bg-gray-300"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">
          {/* Left Section */}
          <div className="lg:col-span-3 order-3 lg:order-1">
            <Left />
          </div>

          {/* Center Section */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Center />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3 order-2 lg:order-3">
            <Right />
          </div>
        </div>
      </section>
      <section className="Banner container mx-auto py-8 px-4">
        {/* Advertisement Section */}
        {showAd && (
          <div className="relative w-full z-0">
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
            <div className="relative w-full 2xl:h-[150px] h-[100px] bg-gray-200">
              <Image
                src="/P2e Banner.jpg"
                alt="banner 1"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </section>

      <section className="Headlines container mx-auto  px-4">
        <h1 className="text-3xl font-bold text-main ">Berita Utama</h1>
        <div className="w-full h-[1px] my-4 bg-gray-300"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">
          {/* Left Section */}
          <div className="lg:col-span-3 order-3 lg:order-1"></div>

          {/* Center Section */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Center />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3 order-2 lg:order-3">
            <Right />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
