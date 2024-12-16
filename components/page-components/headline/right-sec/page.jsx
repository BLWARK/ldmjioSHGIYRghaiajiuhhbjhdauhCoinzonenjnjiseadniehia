import React from "react";
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

const right = () => {
  return (
    <div className="lg:col-span-3">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-main">
        Popular News
      </h2>
      <div className="space-y-1 divide-y divide-gray-300">
        {popularNews.map((news) => (
          <div key={news.id} className="flex flex-col space-y-4 py-4">
           

            <div className="flex justify-start  gap-4">
            <div className="relative 2xl:w-[170px] 2xl:h-[100px] w-[200px] h-[100px]">
              <Image
                src={news.image}
                alt={news.title}
                fill
                style={{ objectFit: "cover" }} // Gambar mengisi wrapper
                className="rounded-lg"
              />
            </div>
            <div className="w-[70%] flex flex-col justify-between items-start">
            <Link href={`/news/${news.slug}`}>
                <h3 className="2xl:text-sm text-sm font-bold hover:underline cursor-pointer">
                  {truncateText(news.title, 11)} {/* Batasi hingga 10 kata */}
                </h3>
              </Link>
              <p className="text-sm text-gray-600">{news.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editor Section */}
      <h2 className="text-2xl font-bold border-b pb-2 mb-4 mt-5 text-main">
        Editor Choice
      </h2>
      <div className="space-y-1 divide-y divide-gray-300">
        {editorChoice.map((news) => (
          <div key={news.id} className="flex flex-col space-y-4 py-4">
           

            <div className="flex justify-start  gap-4">
            <div className="relative 2xl:w-[170px] 2xl:h-[100px] w-[200px] h-[100px]">
              <Image
                src={news.image}
                alt={news.title}
                fill
                style={{ objectFit: "cover" }} // Gambar mengisi wrapper
                className="rounded-lg"
              />
            </div>
            <div className="w-[70%] flex flex-col justify-between items-start">
            <Link href={`/news/${news.slug}`}>
                <h3 className="2xl:text-sm text-sm font-bold hover:underline cursor-pointer">
                  {truncateText(news.title, 11)} {/* Batasi hingga 10 kata */}
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

export default right;
