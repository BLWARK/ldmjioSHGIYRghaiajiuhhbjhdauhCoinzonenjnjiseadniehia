"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Right from "@/components/page-components/headline/right-sec/page"; // Pastikan path ini sesuai
import headlines from "../../data/headline";
import additionalNews from "../../data/additionalNews";
import popularNews from "../../data/popularNews";
import editorChoice from "../../data/editorChoice";

// Gabungkan semua data artikel
const allArticles = [...headlines, ...additionalNews, ...popularNews, ...editorChoice];

// Sort artikel berdasarkan tanggal terbaru
const sortedArticles = allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

// Konfigurasi Pagination
const ARTICLES_PER_PAGE = 10; // Jumlah artikel per halaman (kecuali halaman pertama)

const AllNewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung total halaman
  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);

  // Ambil artikel untuk halaman saat ini
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE + (currentPage === 1 ? 0 : 5);
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = sortedArticles.slice(startIndex, endIndex);

  // Fungsi untuk berpindah halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container 2xl:flex flex-row w-full mx-auto py-8 text-black">
      {/* Bagian Artikel */}
      <div className="flex flex-col 2xl:w-[90%] w-full 2xl:border-r divide-gray-300">
        <h1 className="2xl:text-3xl text-xl font-bold mb-6">All News</h1>

        {/* Halaman Pertama: 5 Berita Terbaru dengan Gambar */}
        {currentPage === 1 && (
          <div className="flex flex-col gap-6 mb-6">
            {sortedArticles.slice(0, 5).map((article) => (
              <div
                key={`${article.type}-${article.id}`}
                className="p-4 border w-full rounded-lg flex items-start gap-4"
              >
                <div className="relative 2xl:w-[300px] 2xl:h-[200px] w-[150px] h-[100px] flex-shrink-0">
                  <Image
                    src={article.image || "/placeholder.jpg"}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <Link href={`/news/${article.slug}`} className="text-black hover:underline inline-block">
                    <h3 className="2xl:text-lg text-sm font-semibold">{article.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-600">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Artikel Tanpa Gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentArticles.map((article) => (
            <div key={`${article.type}-${article.id}`} className="p-4 border w-full rounded-lg">
              <Link href={`/news/${article.slug}`} className="text-black hover:underline inline-block">
                <h3 className="2xl:text-lg text-sm font-semibold">{article.title}</h3>
              </Link>
              <p className="text-xs text-gray-600 mt-2">{article.date}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Sidebar */}
      <div className="2xl:w-[50%] w-full 2xl:pl-16">
        <Right />
      </div>
    </div>
  );
};

export default AllNewsPage;
