"use client";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
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
import { FaPlay, FaPause } from "react-icons/fa";

const NewsDetail = () => {
  const [sanitizedContent, setSanitizedContent] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef(null); // Untuk mengontrol Speech API
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

  // Fungsi untuk memulai atau menghentikan pembacaan teks
  const toggleSpeech = () => {
    if (!window.speechSynthesis) {
      alert("Text-to-Speech tidak didukung di browser ini!");
      return;
    }
  
    if (isSpeaking) {
      // Jika sedang membaca, hentikan
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Bersihkan konten dari tag HTML
      const plainTextContent = newsItem.content.replace(/<\/?[^>]+(>|$)/g, ""); // Menghapus semua tag HTML
  
      const utterance = new SpeechSynthesisUtterance(plainTextContent);
      utterance.lang = "id-ID"; // Bahasa Indonesia
      utterance.rate = 1; // Kecepatan pembacaan normal
  
      speechRef.current = utterance;
  
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
  
      utterance.onend = () => {
        setIsSpeaking(false);
      };
    }
  };
  
  // Sort and select the latest 6 articles for the "More News" section
  const latestArticles = allArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="container mx-auto 2xl:py-8 py-2 text-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Konten Utama */}
        <div className="konten-utama lg:col-span-8 2xl:border-r border-gray-300 2xl:pr-6 pr-0">
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
            <div className="wrap-author-date w-full flex justify-between items-center py-4">
              <Author />
              <div className="date-wrap flex flex-col text-right gap-1">
                <p className="text-[12px] text-gray-600">Last Updated:</p>
                <p className="text-[16px] font-bold text-black ">
                  {newsItem.date}
                </p>
              </div>
            </div>

             {/* Tombol Text-to-Speech */}
             <div className="flex items-center gap-4 my-6">
              <button
                onClick={toggleSpeech}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-white ${
                  isSpeaking ? "bg-red-500" : "bg-green-500"
                } hover:opacity-80`}
              >
                {isSpeaking ? <FaPause /> : <FaPlay />}
                {isSpeaking ? "Stop Reading" : "Read Aloud"}
              </button>
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

            {/* Teks Berita */}
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
                  <div
                    key={`${article.type}-${article.id}-${article.slug}`}
                    className="border rounded-lg shadow-md overflow-hidden"
                  >
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
                        <h3 className="text-lg font-bold mb-2">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-[12px] text-gray-600 mb-4">
                        {article.date}
                      </p>
                    </div>
                  </div>
                ))}
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
