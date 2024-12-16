"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image"
import authors from "@/../../data/authors";
import popularNews from "@/data/popularNews";
import headlines from "@/data/headline";
import editorChoice from "@/data/editorChoice";
import additionalNews from "@/data/additionalNews";
import academy from "@/data/education";


const author = () => {
    const { slug } = useParams();

    const allArticles = [
        ...popularNews,
        ...headlines,
        ...additionalNews,
        ...editorChoice,
        ...academy,
      ];
    
      const newsItem = allArticles.find((article) => article.slug === slug);
    

    const articleAuthors = newsItem.authorIds.map((authorId) =>
        authors.find((author) => author.id === authorId)
      );
  return (
    <div className="author">
    <div className="flex flex-wrap gap-4">
      {articleAuthors.map((author) => (
        <div key={author.id} className="flex items-center gap-4">
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            <Image
              src={author.photo}
              alt={author.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-gray-600">{author.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default author;