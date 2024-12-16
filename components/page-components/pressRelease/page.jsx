"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import pressReleaseData from "@/data/pressRelease";

const PressReleaseSect = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Index untuk slider desktop
  const [visibleItems, setVisibleItems] = useState(2); // Jumlah item untuk mobile

  // Slider otomatis untuk desktop setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= Math.ceil(pressReleaseData.length / 4)
          ? 0
          : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval); // Membersihkan interval saat unmount
  }, []);

  // Fungsi untuk menampilkan lebih banyak item pada mobile
  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <div className="container mx-auto p-4 rounded-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-bold mb-4">Press Releases</h2>

      {/* Slider untuk Desktop */}
      <div className="hidden lg:block relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {pressReleaseData.map((item, index) => (
            <Link
              key={index}
              href={`/news/${item.slug}`}
              className="block flex-none w-1/4 px-2"
            >
              <div className="bg-white border border-gray-200 rounded-lg  overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Grid untuk Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
        {pressReleaseData.slice(0, visibleItems).map((item, index) => (
          <Link
            key={index}
            href={`/news/${item.slug}`}
            className="block overflow-hidden"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol "Load More" untuk Mobile */}
      {visibleItems < pressReleaseData.length && (
        <button
          onClick={loadMoreItems}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 block lg:hidden mx-auto"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default PressReleaseSect;
