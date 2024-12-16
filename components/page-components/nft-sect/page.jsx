"use client";
import React from "react";
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
  article.category?.includes("NFT")
);

const NftSection = () => {
  return (
    <div className="container mx-auto py-4  px-4 text-black">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayedArticles.map((article) => (
        <Link
          key={article.id}
          href={`/news/${article.slug}`}
          className="block overflow-hidden bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          {/* Gambar */}
          <div className="relative w-full h-40">
            <Image
              src={article.image || "/placeholder.jpg"}
              alt={article.title}
              layout="fill"
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
            />
          </div>

          {/* Konten */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 truncate">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600">{article.date}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
};

export default NftSection