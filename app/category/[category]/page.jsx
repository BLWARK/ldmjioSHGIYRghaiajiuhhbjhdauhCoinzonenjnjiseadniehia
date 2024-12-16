"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Right from "@/components/page-components/headline/right-sec/page"
import headlines from "../../../data/headline";
import additionalNews from "../../../data/additionalNews";
import popularNews from "../../../data/popularNews";
import editorChoice from "../../../data/editorChoice"

// Gabungkan semua data artikel
const allArticles = [...headlines, ...additionalNews, ...popularNews, ...editorChoice];

const CategoryPage = () => {
  const { category } = useParams(); // Ambil parameter kategori dari URL
  const filteredArticles = allArticles.filter((article) =>
    article.category?.some((cat) => cat.toLowerCase() === category.toLowerCase())
  );
  


  


  if (filteredArticles.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-black">
        <h1 className="text-3xl font-bold">No articles found for {category}</h1>
      </div>
    );
  }

  return (
    <div className="container 2xl:flex flex-row w-full mx-auto py-8  text-black">
        <div className="flex flex-col 2xl:w-[90%] w-full  2xl:border-r  divide-gray-300">
      <h1 className="2xl:text-3xl text-xl font-bold mb-6 capitalize">
        Articles in {category}
      </h1>
      <div className="flex flex-col 2xl:w-[95%] w-full   gap-6">
        {filteredArticles.map((article) => (
          <div key={`${article.type}-${article.id}`} className="p-4 border w-full rounded-lg flex items-start gap-4">
            <div className="relative 2xl:w-[300px] 2xl:h-[200px] w-[150px] h-[100px] flex-shrink-0">
              <Image
                src={article.image || "/placeholder.jpg"}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
                <Link href={`/news/${article.slug}`}
                className="text-black hover:underline inline-block">
              <h3 className="2xl:text-lg text-sm font-semibold">{article.title}</h3>
              </Link>
              <p className="text-xs text-gray-600">{article.date}</p>
           
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <div className="2xl:w-[50%] w-full 2xl:pl-16 ">
      <Right/>
      </div>
    </div>
  );
};

export default CategoryPage;
