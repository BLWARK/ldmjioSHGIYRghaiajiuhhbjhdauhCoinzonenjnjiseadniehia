"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import headlines from "@/../../data/headline";
import additionalNews from "@/../../data/additionalNews";
import popularNews from "@/../../data/popularNews";
import editorChoice from "@/../../data/editorChoice";

// Gabungkan semua artikel
const allArticles = [
  ...headlines,
  ...additionalNews,
  ...popularNews,
  ...editorChoice,
];

// Filter berita berdasarkan kategori "business"
const businessArticles = allArticles.filter((article) =>
  article.category?.includes("business")
);

const BusinessSect = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Jumlah berita yang ditampilkan

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 4); // Tambahkan 4 item setiap kali tombol diklik
  };

  // Fungsi untuk membatasi jumlah karakter
  const truncateText = (text, maxChars) => {
    if (text.length > maxChars) {
      return `${text.slice(0, maxChars)}...`;
    }
    return text;
  };

  // Fungsi untuk membatasi jumlah kata
  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return `${words.slice(0, maxWords).join(" ")}...`;
    }
    return text;
  };

  return (
    <div className="container mx-auto py-4  text-black">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {businessArticles.slice(0, visibleItems).map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.slug}`}
            className="block overflow-hidden bg-white border border-gray-300 rounded-lg shadow "
          >
            {/* Gambar */}
            <div className="relative w-full h-40">
              <Image
                src={article.image || "/placeholder.jpg"}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg "
              />
            </div>

            {/* Konten */}
            <div className="p-4">
              <h3
                className="text-lg font-semibold mb-2 hover:underline cursor-pointer "
                title={article.title} // Tooltip untuk menampilkan teks lengkap saat hover
              >
                {truncateWords(article.title, 15)} {/* Maksimal 10 kata */}
                {/* {truncateText(article.title, 50)}  // Maksimal 50 karakter */}
              </h3>
              <p className="2xl:text-sm text-xs text-gray-600">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol "See More" */}
      {/* {visibleItems < businessArticles.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={loadMoreItems}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            See More
          </button>
        </div>
      )} */}
    </div>
  );
};

export default BusinessSect;
