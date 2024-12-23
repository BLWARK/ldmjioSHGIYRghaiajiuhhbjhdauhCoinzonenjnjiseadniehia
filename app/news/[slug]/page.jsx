"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "@/components/author/page";
import Share from "@/components/share-sect/page";
import Follow from "@/components/follow/page";
import Right from "@/components/page-components/headline/right-sec/page";
import popularNews from "../../../data/popularNews";
import headlines from "../../../data/headline";
import editorChoice from "@/data/editorChoice";
import additionalNews from "@/data/additionalNews";
import DOMPurify from "dompurify";
import academy from "@/data/education";

const NewsDetail = () => {
  const [sanitizedContent, setSanitizedContent] = useState(null);
  const { slug } = useParams();

  const allArticles = [
    ...popularNews,
    ...headlines,
    ...additionalNews,
    ...editorChoice,
    ...academy,
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

  // Sort and select the latest 6 articles for the "More News" section
  const latestArticles = allArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 9);

  return (
    <div className="container mx-auto 2xl:py-8 py-2 text-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Konten Utama */}
        <div className="konten-utama lg:col-span-8 2xl:border-r border-gray-300 2xl:pr-6 pr-0">
          <div className="flex flex-col">
            <h1 className="2xl:text-[42px] text-[24px] font-bold ">{newsItem.title}</h1>
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
              <Author />
              <div className="date-wrap flex flex-col 2xl:justify-end 2xl:items-end justify-start items-start 2xl:mt-0 mt-5 gap-1">
                <p className="text-[12px] text-gray-600">Last Updated:</p>
                <p className="text-[16px] font-bold text-black ">{newsItem.date}</p>
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
              className="text-[16px] leading-7 text-gray-800"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />

            {/* Share Section */}
            <Share />

            {/* Follow Social Media */}
            <Follow />

            {/* More News Section */}
            <div className="more-news mt-10">
              <h2 className="text-[24px] font-bold mb-6">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestArticles.map((article) => (
                  <div key={`${article.type}-${article.id}-${article.slug}`} className="border rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-full h-[170px]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-4">
                    <Link
                        href={`/news/${article.slug}`}
                        className="text-black hover:underline text-sm"
                      >
                      <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                      </Link>
                      <p className="text-[12px] text-gray-600 mb-4">{article.date}</p>
                     
                      
                      
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-6 text-center flex justify-start items-start">
                <Link href="/all-news">
                  <button className="px-6 py-3 border border-main text-main hover:bg-main hover:text-white rounded-md transition">
                    View All News
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Berita Populer */}
        <Right />
      </div>
    </div>
  );
};

export default NewsDetail;
