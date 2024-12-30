"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5"; // Import ikon close

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Sembunyikan banner
  };

  const handleClick = () => {
    alert("Sticky Banner Clicked!");
  };

  if (!isVisible) return null; // Jika tidak terlihat, return null

  return (
    <>
      {/* Wrapper Sticky Banner */}
      <div className="fixed bottom-4 left-4 w-28 h-28 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 z-50 overflow-hidden bg-transparent">
        {/* Gambar */}
        <Image
          src="/IRIE.webp" // Pastikan path gambar benar
          alt="Sticky Banner"
          fill
          style={{ objectFit: "cover" }}
          onClick={handleClick}
          className="z-[50] rounded-full border-none outline-none"
        />
      </div>

      {/* Tombol Close di Luar Gambar */}
      <button
        onClick={handleClose}
        className="fixed bottom-[100px] left-[105px] bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition z-[60]"
      >
        <IoClose size={18} />
      </button>
    </>
  );
};

export default StickyBanner;
