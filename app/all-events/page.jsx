"use client";
import React, { useState } from "react";
import events from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";

// Fungsi untuk menentukan status event
const getEventStatus = (eventDate, eventEndTime) => {
  const now = new Date();
  const eventStart = new Date(eventDate);
  const eventEnd = eventEndTime ? new Date(eventEndTime) : eventStart;

  if (now > eventEnd) {
    return { status: "Complete", style: "bg-green-200 text-green-700" };
  } else if (now >= eventStart && now <= eventEnd) {
    return { status: "Ongoing", style: "bg-blue-200 text-blue-700" };
  } else {
    return { status: "Upcoming", style: "bg-orange-200 text-orange-700" };
  }
};

// Fungsi untuk mengurutkan event berdasarkan status dan tanggal
const sortEvents = (events) => {
  return events
    .map((event) => {
      const { status, style } = getEventStatus(event.date, event.endDate);
      return { ...event, status, style };
    })
    .sort((a, b) => {
      // Urutkan berdasarkan status
      const statusOrder = { Upcoming: 1, Ongoing: 2, Complete: 3 };
      if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
      }
      // Jika status sama, urutkan berdasarkan tanggal
      return new Date(a.date) - new Date(b.date);
    });
};

const EventPage = () => {
  const [filter, setFilter] = useState("all"); // State untuk filter

  // Mengurutkan event terlebih dahulu
  const sortedEvents = sortEvents(events);

  // Filter event berdasarkan status
  const filteredEvents =
    filter === "all"
      ? sortedEvents
      : sortedEvents.filter((event) => event.status.toLowerCase() === filter);

  return (
    <div className="container flex flex-col w-full mx-auto 2xl:py-20 py-5 px-2 text-black">
      <h1 className="2xl:text-3xl text-xl font-bold mb-6">All Events</h1>

      {/* Filter Dropdown */}
      <div className="relative mb-6 w-full max-w-xs">
        <select
          className="w-full px-4 py-2 border rounded bg-white text-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="complete">Complete</option>
        </select>
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
              {/* Status Event */}
              <div className="mb-2">
                <span
                  className={`px-2 py-1 text-xs rounded ${event.style}`}
                >
                  {event.status}
                </span>
              </div>

              {/* Detail Event */}
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
