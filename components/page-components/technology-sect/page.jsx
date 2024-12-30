"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import headlines from "@/../../data/headline";
import additionalNews from "@/../../data/additionalNews";
import popularNews from "@/../../data/popularNews";
import editorChoice from "@/../../data/editorChoice";

// Gabungkan semua artikel
const allArticles = [...headlines, ...additionalNews, ...popularNews, ...editorChoice];

// Filter berita berdasarkan kategori "technology"
const technologyArticles = allArticles.filter((article) =>
  article.category?.includes("technology")
);

// Fungsi untuk membatasi jumlah kata
const truncateWords = (text, maxWords) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return `${words.slice(0, maxWords).join(" ")}...`;
  }
  return text;
};

const TechnologySect = () => {
  // State untuk mengontrol jumlah berita yang ditampilkan
  const [visibleItems, setVisibleItems] = useState(4); // Default: 4 berita

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 4); // Tambahkan 4 berita lagi
  };

  return (
    <div className="container mx-auto py-4 text-black">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologyArticles.slice(0, visibleItems).map((article) => (
          <Link
            key={`${article.id}-${article.type}`}
            href={`/news/${article.slug}`}
            className="block overflow-hidden bg-white border border-gray-300 rounded-lg"
          >
            {/* Gambar */}
            <div className="relative w-full h-40">
              <Image
                src={article.image || "/placeholder.jpg"}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>

            {/* Konten */}
            <div className="p-4">
              <h3
                className="text-lg font-semibold mb-2 hover:underline cursor-pointer"
                title={article.title}
              >
                {truncateWords(article.title, 10)} {/* Maksimal 10 kata */}
              </h3>
              <p className="2xl:text-sm text-xs text-gray-600">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>

     
    </div>
  );
};

export default TechnologySect;
