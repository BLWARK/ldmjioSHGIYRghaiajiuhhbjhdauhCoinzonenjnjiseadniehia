"use client";
import { useParams } from "next/navigation";
import Image from "next/image"; // Import komponen Image dari Next.js
import popularNews from "../../../data/popularNews";
import headlines from "../../../data/headline";
import additionalNews from "@/data/additionalNews";

const TagPage = () => {
  const { tag } = useParams(); // Ambil parameter tag dari URL
  const allArticles = [...popularNews, ...headlines, ...additionalNews]; // Gabungkan semua artikel

  // Filter artikel berdasarkan tag
  const filteredArticles = allArticles.filter((article) =>
    article.tags?.includes(tag) // Periksa apakah artikel memiliki tag
  );

  if (filteredArticles.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-black">
        <h1 className="text-2xl font-bold">No articles found for tag: {tag}</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 text-black">
      <h1 className="text-3xl font-bold mb-6">Articles Tagged: {tag}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div key={`${article.type}-${article.id}`} className="flex items-start p-4 border rounded-lg gap-4">
            {/* Gambar Artikel */}
            <div className="relative w-[150px] h-[100px] flex-shrink-0">
              <Image
                src={article.image || "/placeholder.jpg"} // Gunakan placeholder jika tidak ada gambar
                alt={article.title}
                fill
                style={{ objectFit: "cover" }} // Gambar memenuhi wrapper
                className="rounded-lg"
              />
            </div>
            {/* Detail Artikel */}
            <div>
              <h2 className="text-[16px] font-semibold">{article.title}</h2>
              <p className="text-[12px] text-gray-600">{article.date}</p>
              <a
                href={`/news/${article.slug}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagPage;
