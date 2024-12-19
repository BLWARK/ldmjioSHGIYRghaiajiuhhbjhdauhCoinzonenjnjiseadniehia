"use client";

import React, { useState } from "react";
import events from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const EventPage = () => {
  const [filter, setFilter] = useState("all"); // State untuk filter

  // Filter events berdasarkan tags
  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) =>
          event.tags.some((tag) => tag.toLowerCase() === filter)
        );

  return (
    <div className="container flex flex-col w-full mx-auto py-20 text-black">
      <h1 className="2xl:text-3xl text-xl font-bold mb-6">All Events</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "upcoming"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setFilter("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "ongoing"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setFilter("ongoing")}
        >
          Ongoing
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "complete"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setFilter("complete")}
        >
          Complete
        </button>
      </div>

      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            {/* Event Image */}
            <div className="relative w-full h-[200px]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>
            {/* Event Content */}
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {event.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 text-xs rounded ${
                      tag.toLowerCase() === "upcoming"
                        ? "bg-orange-200 text-orange-700"
                        : tag.toLowerCase() === "complete"
                        ? "bg-green-200 text-green-700"
                        : tag.toLowerCase() === "ongoing"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1 mt-5 text-black">
                <h2 className="text-lg font-bold mb-2">{event.title}</h2>
                <p className="text-[12px] text-gray-600 mb-2">
                  <span className="font-semibold">{event.date}</span> (
                  {event.timezone})
                </p>
                <p className="text-[12px] text-gray-600 mb-2">
                  {event.location}
                </p>
                <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-4">
                  <span>{event.price}</span>
                  <span>{event.type}</span>
                </div>
                <div className="flex justify-start items-center gap-2 text-main">
                  <MdOutlineRemoveRedEye />
                  <Link
                    href={event.link}
                    className="text-blue-600 hover:underline text-[14px]"
                  >
                    View Event Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
