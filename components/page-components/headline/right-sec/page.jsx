import React, { useState } from "react";
import Link from "next/link";
import popularNews from "@/../../data/popularNews";
import editorChoice from "@/../../data/editorChoice";
import Image from "next/image";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return <>{words.slice(0, wordLimit).join(" ")}...</>;
  }
  return text;
};

// Fungsi untuk mengurutkan berdasarkan tanggal terbaru
const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

const Right = () => {
  // Urutkan popularNews dan editorChoice berdasarkan tanggal
  const sortedPopularNews = [...popularNews].sort(sortByDate);
  const sortedEditorChoice = [...editorChoice].sort(sortByDate);

   const [showAd, setShowAd] = useState(true);

  return (
    <div className="lg:col-span-3">
   {/* Advertisement Section */}
           {showAd && (
             <div className="relative w-full h-[430px] ">
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
      {/* Popular News */}
      <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-main">
        Popular News
      </h2>
      <div className="space-y-1 divide-y divide-gray-300">
        {sortedPopularNews.map((news) => (
          <div key={`${news.id}-${news.type}`} className="flex flex-col space-y-4 py-4">
            <div className="flex justify-start gap-4">
              <div className="relative 2xl:w-[170px] 2xl:h-[100px] w-[200px] h-[100px]">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-between items-start">
                <Link href={`/news/${news.slug}`}>
                  <h3 className="2xl:text-sm text-sm font-bold hover:underline cursor-pointer">
                    {truncateText(news.title, 11)}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600">{news.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editor Choice */}
      <h2 className="text-2xl font-bold border-b pb-2 mb-4 mt-5 text-main">
        Editor Choice
      </h2>
      <div className="space-y-1 divide-y divide-gray-300">
        {sortedEditorChoice.map((news) => (
          <div key={`${news.id}-${news.type}`} className="flex flex-col space-y-4 py-4">
            <div className="flex justify-start gap-4">
              <div className="relative 2xl:w-[170px] 2xl:h-[100px] w-[200px] h-[100px]">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-between items-start">
                <Link href={`/news/${news.slug}`}>
                  <h3 className="2xl:text-sm text-sm font-bold hover:underline cursor-pointer">
                    {truncateText(news.title, 11)}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600">{news.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
