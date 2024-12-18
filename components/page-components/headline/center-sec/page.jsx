"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import headlines from "@/../../data/headline";
import additionalNews from "@/../../data/additionalNews";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return <>{words.slice(0, wordLimit).join(" ")}...</>;
  }
  return text;
};

const Center = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sort headlines by id in descending order
  const sortedHeadlines = [...headlines].sort((a, b) => b.id - a.id);

  // Sort additional news by date in descending order
  const sortedAdditionalNews = [...additionalNews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Durasi jeda otomatis dalam milidetik
  const autoScrollInterval = 5000;

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sortedHeadlines.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fungsi untuk pindah ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sortedHeadlines.length - 1 : prevIndex - 1
    );
  };

  // Efek untuk mengatur auto-scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);

  return (
    <div className="lg:col-span-6 2xl:border-r border-gray-300 2xl:pr-4 pr-0">
      {/* Slider Headline */}
      <div className="relative w-full 2xl:h-[400px] h-[250px] overflow-hidden mb-6">
        {sortedHeadlines.map((headline, index) => (
          <div
            key={headline.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={headline.image}
                alt={headline.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              <Link href={`/news/${headline.slug}`}>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-lg text-white 2xl:p-5 p-2 px-3 gap-4 flex flex-col">
                  <h2 className="2xl:text-2xl text-[14px] font-bold">{headline.title}</h2>
                  <p className="text-[12px] text-gray-300">{headline.date}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}

        {/* Panah Navigasi */}
        <button
          className="2xl:block hidden absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-20"
          onClick={prevSlide}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="2xl:block hidden absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-20"
          onClick={nextSlide}
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Additional News */}
      <div className="space-y-4 divide-y divide-gray-300">
        {sortedAdditionalNews.map((news) => (
          <div key={news.id} className="py-4 flex gap-4">
            <div className="relative 2xl:w-[250px] 2xl:h-[150px] w-[200px] h-[100px]">
              <Image
                src={news.image}
                alt={news.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between w-[70%]">
              <Link href={`/news/${news.slug}`}>
                <h3 className="2xl:text-lg text-sm font-bold hover:underline cursor-pointer">
                  {truncateText(news.title, 9)}
                </h3>
              </Link>
              <p className="text-sm text-gray-600">{news.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center flex justify-start items-start">
        <Link href="/all-news">
          <button className="px-6 py-2 border-main border text-main hover:text-white rounded hover:bg-main transition">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Center;
