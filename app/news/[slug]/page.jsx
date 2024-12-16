"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Author from "@/components/author/page"
import Share from "@/components/share-sect/page"
import Follow from "@/components/follow/page"
import Right from "@/components/page-components/headline/right-sec/page"
import popularNews from "../../../data/popularNews";
import headlines from "../../../data/headline";
import editorChoice from "@/data/editorChoice";
import additionalNews from "@/data/additionalNews";
import DOMPurify from "dompurify";


const NewsDetail = () => {
  const [sanitizedContent, setSanitizedContent] = useState(null);
  const { slug } = useParams();

  const allArticles = [
    ...popularNews,
    ...headlines,
    ...additionalNews,
    ...editorChoice,
  ];

  const newsItem = allArticles.find((article) => article.slug === slug);

  if (!newsItem) {
    return <div>Berita tidak ditemukan!</div>;
  }

  useEffect(() => {
    if (newsItem.content) {
      setSanitizedContent(DOMPurify.sanitize(newsItem.content));
    }
  }, [newsItem.content]);

  


  return (
    <div className="container mx-auto py-8  text-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Konten Utama */}
        <div className="lg:col-span-8 border-r border-gray-300 pr-6">
          <div className="flex flex-col">
            <h1 className="2xl:text-[42px] text-[24px] font-bold ">
              {newsItem.title}
            </h1>
            <div className="py-4">
              <div className="flex flex-wrap gap-2">
                {newsItem.tags.map((tag, index) => (
                  <a
                    key={index}
                    href={`/tags/${tag}`}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Author Section */}
            <div className="wrap-author-date w-full 2xl:justify-between flex 2xl:flex-row flex-col 2xl:items-center justify-start items-start py-4">
              <Author/>
             
              <div className="date-wrap flex flex-col 2xl:justify-end 2xl:items-end justify-start items-start 2xl:mt-0 mt-5 gap-1">
                <p className="text-[12px] text-gray-600">Last Updated:</p>
                <p className="text-[16px] font-bold text-black ">
                  {newsItem.date}
                </p>
              </div>
            </div>

            <div className="relative w-full 2xl:h-[500px] h-[250px] rounded-lg overflow-hidden mb-6">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            <p
              className="text-[16px] leading-7 text-gray-800 aa"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />

            {/* Share Section */}
            <Share/>
           

            {/* Follow Social Media */}
           <Follow/>
          </div>
        </div>

        {/* Sidebar Berita Populer */}
        <Right/>
       
      </div>
    </div>
  );
};

export default NewsDetail;
