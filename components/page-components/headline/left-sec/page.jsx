"use client";

import React, { useState } from "react";
import Image from "next/image";
import TradingViewWidgetSh from "@/components/tradingView/TradingViewWidgedSh";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
// Import data dari berbagai sumber
import headlines from "@/../../data/headline";
import popularNews from "@/../../data/popularNews";
import editorChoice from "@/../../data/editorChoice";
import additionalNews from "@/../../data/additionalNews";

// Gabungkan semua berita dan tambahkan kategori pada ID
const allNews = [
  ...headlines.map((item) => ({ ...item, uniqueId: `headline-${item.id}` })),
  ...popularNews.map((item) => ({ ...item, uniqueId: `popular-${item.id}` })),
  ...editorChoice.map((item) => ({ ...item, uniqueId: `editor-${item.id}` })),
  ...additionalNews.map((item) => ({...item, uniqueId: `additional-${item.id}`,})),
];

// Filter berita dengan tag "bitcoin" dan batasi hingga 5 berita
const bitcoinNews = allNews
  .filter((news) => news.tags?.some((tag) => tag.toLowerCase() === "bitcoin"))
  .slice(0, 5); // Ambil hanya 5 berita pertama

const Left = () => {
  const [showAd, setShowAd] = useState(true);

  return (
    <div className="h-full lg:col-span-3 2xl:border-r 2xl:block block border-gray-300 pr-4">
      {/* Trading View Widget */}
      <div>
        <div className="2xl:block hidden">
        <TradingViewWidgetSh  />
        </div>

        {/* Advertisement Section */}
        {showAd && (
          <div className="relative w-full h-[420px] mt-10">
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
            <div className="relative w-[340px] h-[400px] bg-black flex justify-center items-center">
              <Image
                src="/Kinara1.webp"
                alt="Kinara Advertisement"
                className="rounded-lg"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        )}

        {/* Bitcoin News List */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4 border-b pb-2 text-main">
            Bitcoin News
          </h2>
          <ul className="space-y-4">
            {bitcoinNews.length > 0 ? (
              bitcoinNews.map((news, index) => (
                <React.Fragment key={news.uniqueId}>
                  <li className="flex flex-col">
                    <a
                      href={`/news/${news.slug}`}
                      className="text-black font-semibold  hover:underline"
                    >
                      {news.title}
                    </a>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </li>
                  {/* Garis Pemisah kecuali item terakhir */}
                  {index < bitcoinNews.length - 1 && (
                    <hr className="border-t border-gray-300 mt-2" />
                  )}
                </React.Fragment>
              ))
            ) : (
              <li className="text-gray-500 text-sm">
                No Bitcoin news available.
              </li>
            )}
          </ul>
          {/* View All Button */}
          <div className="mt-6 text-center flex justify-start items-start">
            <Link href="/all-news">
              <button className=" py-3 flex justify-center items-center gap-2 text-main hover:text-black rounded  transition text-semibold">
                View All Bitcoin News
                <IoIosArrowRoundForward />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
