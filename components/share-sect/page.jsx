"use client";
import { useParams } from "next/navigation";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import popularNews from "@/data/popularNews";
import headlines from "@/data/headline";
import editorChoice from "@/data/editorChoice";
import additionalNews from "@/data/additionalNews";
import academy from "@/data/education";

const share = () => {
const { slug } = useParams();

const allArticles = [
    ...popularNews,
    ...headlines,
    ...additionalNews,
    ...editorChoice,
    ...academy,
  ];

  const newsItem = allArticles.find((article) => article.slug === slug);

  const shareUrl = `https://yourwebsite.com/news/${newsItem.slug}`;
  const encodedTitle = encodeURIComponent(newsItem.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="mt-8">
      <h3 className="2xl:text-[16px] text-[12px] font-bold mb-2">
        Share this article:
      </h3>
      <div className="flex items-center gap-4">
        <a
          href={`https://twitter.com/share?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-black transition duration-300 group"
        >
          <FaXTwitter className="text-black group-hover:text-white" size={20} />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-800 transition duration-300 group"
        >
          <FaFacebookF className="text-white" size={20} />
        </a>
        <a
          href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 transition duration-300 group"
        >
          <FaTelegramPlane className="text-white" size={20} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-700 transition duration-300 group"
        >
          <FaWhatsapp className="text-white" size={20} />
        </a>
        <button
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-gray-500 transition duration-300 group"
        >
          <MdContentCopy
            className="text-black group-hover:text-white"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};

export default share;
