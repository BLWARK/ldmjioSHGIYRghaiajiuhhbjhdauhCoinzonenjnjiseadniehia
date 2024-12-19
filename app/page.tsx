"use client";
import React, { useState } from "react";
import Link from "next/link";
import Left from "@/components/page-components/headline/left-sec/page";
import Center from "@/components/page-components/headline/center-sec/page";
import Right from "@/components/page-components/headline/right-sec/page";
import PressRelease from "@/components/page-components/pressRelease/page";
import BusinessSect from "@/components/page-components/busines-sect/page";
import Story from "@/components/page-components/story-sect/page";
import TechnologySect from "@/components/page-components/technology-sect/page";
import EducationSect from "@/components/page-components/education-sect/page";
import Event from "@/components/page-components/event-sect/page";
import SubscriptionSect from "@/components/page-components/subscribe-sect/page"
import Image from "next/image";

const HomePage = () => {
  const [showAd, setShowAd] = useState(true);

  return (
    <div className="w-full h-full  text-black ">
      {/* Section Advertisment */}
      <section className="Ads container mx-auto py-8 ">
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
            <div className="relative w-full 2xl:h-[150px] h-[100px] bg-gray-200 ">
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
      <section className="Headlines container mx-auto ">
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
      <PressRelease />
      {/* Section advertisment2 */}
      <section className="Ads2 container mx-auto py-8 ">
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

      {/* Section Story */}
      <section className="Story-sect container mx-auto my-10 ">
        <h1 className="2xl:text-3xl text-2xl font-bold text-main ">Story</h1>
        <div className="w-full h-[1px]  my-4 bg-gray-300"></div>
        <Story />
      </section>

      {/* Section Event */}
      <section className="technology-sect container mx-auto mt-10 ">
        <h1 className="2xl:text-3xl text-2xl  font-bold text-main ">Upcoming Events</h1>
        {/* View All Button */}

        <div className="w-full h-[1px]  my-4 bg-gray-300"></div>
        <Event />
      </section>

      {/* Section Academy */}
      <section className="technology-sect container mx-auto mt-10 ">
        <div className="flex justify-between items-center">
          <h1 className="2xl:text-3xl text-2xl font-bold text-main ">
            Academy
          </h1>
          {/* View All Button */}
          <div className=" text-center flex justify-start items-start">
            <Link href="/category/academy">
              <button className="px-6 py-2 text-sm border-main border text-main hover:text-white rounded hover:bg-main transition">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px]  my-4 bg-gray-300"></div>
        <EducationSect />
      </section>

      {/* Section Bussines */}
      <section className="business-sect container mx-auto my-10 ">
        <div className="flex justify-between items-center">
          <h1 className="2xl:text-3xl text-2xl font-bold text-main ">
            Business
          </h1>
          <div className="text-center flex justify-start items-start">
            <Link href="/category/business">
              <button className="px-6 py-2 text-sm border-main border text-main hover:text-white rounded hover:bg-main transition">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px]  my-4 bg-gray-300"></div>
        <BusinessSect />
      </section>

      {/* Section technology */}
      <section className="technology-sect container mx-auto ">
        <div className="flex justify-between items-center">
          <h1 className="2xl:text-3xl text-2xl font-bold text-main ">
            Technology
          </h1>
          <div className=" text-center flex justify-start items-start">
            <Link href="/category/technology">
              <button className="px-6 py-2 text-sm border-main border text-main hover:text-white rounded hover:bg-main transition">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px]  my-4 bg-gray-300"></div>
        <TechnologySect />
      </section>

      {/* Section Subs */}
      <section className="technology-sect container mx-auto py-10 mb-10 ">
       
        <div className="w-full h-[1px]  my-4 bg-gray-300"></div>
        <SubscriptionSect />
      </section>
    </div>
  );
};

export default HomePage;
