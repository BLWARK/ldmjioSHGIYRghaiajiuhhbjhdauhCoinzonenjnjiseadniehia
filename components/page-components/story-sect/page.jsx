"use client";
import React, { useState, useEffect, useRef } from "react";
import storyData from "@/data/storyData";
import { IoClose, IoPlay } from "react-icons/io5";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Image from "next/image";

const StorySect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [contentIndex, setContentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef(null);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);

  const openStory = (story) => {
    setCurrentStory(story);
    setContentIndex(0);
    setProgress(0);
    setIsOpen(true);
  };

  const startProgressAnimation = (duration) => {
    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage < 100) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        if (contentIndex < currentStory.content.length - 1) {
          setContentIndex((prev) => prev + 1);
          setProgress(0);
        } else {
          setIsOpen(false);
        }
      }
    };

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (currentStory && currentStory.content[contentIndex]) {
      if (currentStory.content[contentIndex].type === "video" && videoRef.current) {
        const handleLoadedMetadata = () => {
          const duration = videoRef.current.duration * 1000; // Durasi dalam milidetik
          setVideoDuration(duration);
          startProgressAnimation(duration);
        };

        videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
          videoRef.current?.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
      } else {
        startProgressAnimation(currentStory.content[contentIndex].duration);
      }
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [contentIndex, currentStory]);

  const prevContent = () => {
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1);
    }
  };

  const nextContent = () => {
    if (contentIndex < currentStory.content.length - 1) {
      setContentIndex(contentIndex + 1);
    }
  };

  return (
    <div className="2xl:py-4">
      {/* Horizontal Scrolling Thumbnails for Mobile */}
      <div className="flex lg:hidden overflow-x-auto space-x-4 py-2 px-2">
        {storyData.map((stories, colIndex) => (
          <div
            key={colIndex}
            className="relative min-w-[200px] h-full flex-shrink-0 cursor-pointer"
            onClick={() => openStory(stories[0])}
          >
            <Image
              src={stories[0].thumbnail}
              alt={`Story ${colIndex}`}
              width={200}
              height={250}
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
              <IoPlay className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Grid Layout */}
      <div className="hidden lg:grid grid-cols-5 gap-4">
        {storyData.map((stories, colIndex) => (
          <div
            key={colIndex}
            className="relative w-[280px] h-full cursor-pointer"
            onClick={() => openStory(stories[0])}
          >
            <Image
              src={stories[0].thumbnail}
              alt={`Story ${colIndex}`}
              width={280}
              height={400}
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-lg">
              <IoPlay className="text-white text-5xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isOpen && currentStory && currentStory.content && (
        <div className="fixed inset-0 flex justify-center items-center p-3 bg-main bg-opacity-90 z-50">
          {/* Close Button */}
          <button
            className="absolute top-[10px] right-4 text-white text-3xl z-10"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>

          <div className="w-[600px] h-[900px] flex justify-center items-center rounded relative overflow-hidden">
            {/* Progress Bars */}
            <div className="absolute -top-[1px] left-0 w-full flex space-x-1 z-10">
              {currentStory.content.map((_, idx) => (
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
            <button
              className="absolute top-1/2 left-2 text-white text-3xl z-20 bg-black bg-opacity-50 rounded-full"
              onClick={prevContent}
            >
              <IoChevronBack />
            </button>
            <button
              className="absolute top-1/2 right-2 text-white text-3xl z-20 bg-black bg-opacity-50 rounded-full"
              onClick={nextContent}
            >
              <IoChevronForward />
            </button>

            {/* Content Display */}
            <div className="relative w-full h-full">
              {currentStory.content[contentIndex]?.type === "video" ? (
                <video
                  ref={videoRef}
                  src={currentStory.content[contentIndex].src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={currentStory.content[contentIndex].src}
                  alt={`Content ${contentIndex + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorySect;
