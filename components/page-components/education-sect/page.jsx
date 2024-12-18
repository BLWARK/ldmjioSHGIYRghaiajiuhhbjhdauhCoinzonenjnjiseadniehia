"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Academy from "@/data/education";

const EducationSect = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + 4, Academy.length));
  };

  return (
    <div className="container mx-auto py-6   text-black">
     
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Academy.slice(0, visibleItems).map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.slug}`}
            className="block overflow-hidden bg-white border border-gray-300 rounded-lg shadow "
          >
            {/* Gambar */}
            <div className="relative w-full h-40">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>

            {/* Konten */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 truncate hover:underline">
                {item.title}
              </h3>
              <p className="2xl:text-sm text-xs text-gray-600">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol See More */}
      {visibleItems < Academy.length && (
        <button
          onClick={loadMoreItems}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 block mx-auto"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default EducationSect;
