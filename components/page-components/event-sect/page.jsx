"use client";
import React from "react";
import events from "../../../data/events"; // Import data event
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
  const sortedEvents = sortEvents(events);

  return (
    <div className="container mx-auto 2xl:py-8">
      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedEvents.map((event) => (
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
              <div className="flex flex-col gap-1 mt-5">
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

      {/* View All Button */}
      <div className="mt-6 text-center flex justify-start items-start">
        <Link href="/all-events">
          <button className="text-[14px] border border-main rounded-lg px-6 py-4 hover:bg-main hover:text-white text-main">
            View all Upcoming Crypto Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventPage;
