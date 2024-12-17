"use client";
import React, { useState, useEffect, useRef } from "react";
import storyData from "@/data/storyData";
import { IoClose } from "react-icons/io5"; // React Icons
import { IoChevronForward, IoChevronBack } from "react-icons/io5"; // Arrow icons
import Image from "next/image";

const StorySect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [contentIndex, setContentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  const openStory = (story) => {
    setCurrentStory(story);
    setContentIndex(0);
    setProgress(0);
    setIsOpen(true);
  };

  const startProgressAnimation = (duration) => {
    startTimeRef.current = null;

    // Start the progress animation
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage < 100) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        // When progress reaches 100%, move to next content
        if (contentIndex < 2) {  // Maximum 3 contents, contentIndex from 0 to 2
          setContentIndex((prev) => prev + 1);
          setProgress(0);
        } else {
          // Close the modal after the 3rd content
          setIsOpen(false); // Close modal after the last content
        }
      }
    };

    intervalRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Reset progress and start animation for new content
    if (currentStory && currentStory.content[contentIndex]) {
      setProgress(0);
      startProgressAnimation(currentStory.content[contentIndex].duration);
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (intervalRef.current) cancelAnimationFrame(intervalRef.current);
    };
  }, [contentIndex, currentStory]);  // Trigger when contentIndex or currentStory changes

  // Move to previous content
  const prevContent = () => {
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1);
    }
  };

  // Move to next content
  const nextContent = () => {
    if (contentIndex < 2) { // Max 3 contents
      setContentIndex(contentIndex + 1);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {storyData.map((stories, colIndex) => (
        <div key={colIndex} className="cursor-pointer">
         
          <Image
            src={stories[0].thumbnail}
            alt={`Story ${colIndex}`}
            width={300}
            height={200}
            className="rounded-lg"
            style={{ objectFit: "cover" }}
            onClick={() => openStory(stories[0])}
          />
        </div>
      ))}

      {/* Popup Modal */}
      {isOpen && currentStory && currentStory.content && (
        <div className="fixed inset-0 flex justify-center items-center bg-main 2xl:p-0 px-5  z-50">
             {/* Close Button */}
             <button
              className="absolute 2xl:block hidden top-2  right-4 text-white text-3xl z-10"
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>
           
          <div className="w-[600px] h-[800px] flex justify-center items-center rounded relative overflow-hidden">
            
            {/* Progress Bars */}
            <div className="absolute 2xl:top-2 top-6 left-0 w-full flex space-x-1  z-10">
              {currentStory.content.slice(0, 3).map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 bg-gray-400 flex-1 rounded overflow-hidden"
                >
                  <div
                    className="h-full bg-white"
                    style={{
                      width:
                        idx < contentIndex
                          ? "100%"
                          : idx === contentIndex
                          ? `${progress}%`
                          : "0%",
                    }}
                  ></div>
                </div>
              ))}
            </div>

           

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-0 z-10 flex items-center justify-center">
              <button
                className="text-white text-3xl p-2  bg-opacity-50 rounded-full"
                onClick={prevContent}
                disabled={contentIndex === 0} // Disable if on first content
              >
                <IoChevronBack />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 z-10 flex items-center justify-center">
              <button
                className="text-white text-3xl p-2  bg-opacity-50 rounded-full"
                onClick={nextContent}
                disabled={contentIndex === 2} // Disable if on last content
              >
                <IoChevronForward />
              </button>
            </div>

              {/* Close Button */}
              <button
              className="absolute 2xl:hidden block top-[190px] right-4 text-white text-3xl z-10"
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            {/* Konten Story */}
            <div className="relative w-full h-full"> {/* mt-12 untuk memberi ruang untuk progress bar dan tombol */}
              {/* Pastikan contentIndex valid dan memiliki gambar */}
              {currentStory.content[contentIndex] && currentStory.content[contentIndex].src ? (
                <Image
                  src={currentStory.content[contentIndex].src}
                  alt={`Content ${contentIndex + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <div className="text-white text-center">No content available</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorySect;
