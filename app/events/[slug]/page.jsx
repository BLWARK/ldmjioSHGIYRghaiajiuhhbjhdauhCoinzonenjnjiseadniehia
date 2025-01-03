"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import events from "../../../data/events";
import Link from "next/link";
import Image from "next/image";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

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

const EventDetails = () => {
  const [showAd, setShowAd] = useState(true);
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  // State untuk countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Status Event
  const eventStatus = event
    ? getEventStatus(event.date, event.endDate)
    : { status: "Unknown", style: "bg-gray-200 text-gray-700" };

  useEffect(() => {
    if (!event?.countdownDate) return;

    const targetDate = new Date(event.countdownDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  if (!event) {
    return <div className="text-center py-8">Event not found!</div>;
  }

  return (
    <div className="2xl:flex-row flex-col flex 2xl:py-8 2xl:mt-0 mt-4 mb-10 px-2 text-black">
      {/* Event Info */}
      <div className="flex flex-col gap-6 2xl:mt-5 mt-0">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{event.title}</h1>
         
        </div>

        {/* Left Content */}
        <div className="lg:w-[90%]">
          <div className="mb-4 space-y-4 text-gray-600">
          <span
            className={`px-3 py-1 rounded-lg text-sm font-medium  ${eventStatus.style}`}
          >
            {eventStatus.status}
          </span>
            <p className="flex items-center gap-2 2xl:text-[16px] text-[12px]">
              <IoLocationOutline className="text-blue-600 text-[18px]" />
              {event.location}
            </p>
            <p className="flex items-center gap-2 2xl:text-[16px] text-[12px]">
              <IoCalendarOutline className="text-blue-600" />
              {event.date} | {event.time}
            </p>
            <p className="flex items-center gap-2 2xl:text-[16px] text-[12px]">
              <IoPricetagOutline className="text-blue-600" />
              <strong>Price:</strong> {event.price} | <strong>Type:</strong>{" "}
              {event.type}
            </p>
            <p className="flex items-center gap-2 2xl:text-[16px] text-[12px]">
              <FaUsers className="text-blue-600" />
              <strong>Attendees:</strong> {event.attendees.length} People
            </p>
          </div>

          {/* Event Image */}
          <div className="w-full 2xl:h-[450px] h-[250px] relative mb-6">
            <Image
              src={event.image}
              alt={event.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          {/* Event Content */}
          <div className="prose 2xl:mb-6">
            <h2 className="font-bold text-xl mb-2">Event Summary</h2>
            <p>{event.content}</p>
          </div>
        </div>

        {/* Ticket and Register */}
        <div className="2xl:flex-row flex-col bg-blue-50 p-6 py-10 rounded-lg flex 2xl:justify-between justify-start items-start mb-6 gap-8 w-[90%]">
          <div>
            <h3 className="font-semibold text-main">
              Welcome! To join the event, please register
            </h3>
            <p className="text-gray-600 text-sm">
              Register and confirmation will be sent on your mail
            </p>
          </div>
          <button className="px-4 py-2 bg-main text-white rounded hover:bg-blue-700">
            Register Now
          </button>
        </div>
      </div>

        {/* Right Sidebar */}
        <div className="lg:w-[90%] flex flex-col justify-start items-start ">
        {/* Countdown */}
        <div className="bg-blue-50 p-4 rounded-lg text-center w-full">
            <h3 className="font-semibold text-lg mb-2 text-main">Event Starts In</h3>
            <div className="flex justify-center space-x-2 text-xl font-bold text-gray-700">
              <div className="flex flex-col text-white font-medium justify-center items-center   bg-main rounded-lg w-16 h-16">
                <span>{countdown.days}</span>
                <p className="text-xs text-white">Days</p>
              </div>
              <div className="flex flex-col text-white font-medium justify-center items-center  bg-main rounded-lg w-16 h-16">
                <span>{countdown.hours}</span>
                <p className="text-xs text-white">Hours</p>
              </div>
              <div className="flex flex-col text-white font-medium justify-center items-center  bg-main rounded-lg w-16 h-16">
                <span>{countdown.minutes}</span>
                <p className="text-xs text-white">Minutes</p>
              </div>
              <div className="flex flex-col text-white font-medium justify-center items-center  bg-main rounded-lg w-16 h-16">
                <span>{countdown.seconds}</span>
                <p className="text-xs text-white">Seconds</p>
              </div>
            </div>
          </div>
        
        <div className="w-full space-y-6 border p-6 shadow-md mt-5">
          
          

          {/* Organized By */}
          <div>
            <h3 className="font-semibold mb-2">Organized By</h3>
            <p className="text-sm text-gray-700">{event.organizedBy}</p>
          </div>

         

          {/* Location */}
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <Link
              href={event.coordinates}
              target="_blank"
              className="text-blue-600 hover:underline text-sm"
            >
              View Detailed Location
            </Link>
          </div>

          {/* Attendees */}
          <div>
            <h3 className="font-semibold mb-2">Attendees</h3>
            <ul className="list-disc ml-4 text-sm text-gray-700">
              {event.attendees.map((attendee, idx) => (
                <li key={idx}>{attendee}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Advertisement Section */}
                {showAd && (
                  <div className="relative w-full h-[440px] mt-10">
                    {/* Label Advertisement with Close Button */}
                    <div className="absolute top-2 right-2 bg-gray-400 bg-opacity-70 text-white text-xs px-3 py-1 rounded flex items-center gap-2 z-10">
                      <span>Ads</span>
                      <button
                        onClick={() => setShowAd(false)}
                        className="text-white hover:text-red-500 transition"
                      >
                        ✕
                      </button>
                    </div>
        
                    {/* Gambar Advertisement */}
                    <div className="relative w-full h-[400px] bg-gray-200 flex justify-center items-center">
                    <Image
                      src="/Kinara1.webp"
                      alt="Kinara Advertisement"
                      className="rounded-lg"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    </div>
                  </div>
                )}
                 {/* Advertisement Section */}
                 {showAd && (
                  <div className="relative w-full h-[160px] ">
                    {/* Label Advertisement with Close Button */}
                    <div className="absolute top-2 right-2 bg-gray-400 bg-opacity-70 text-white text-xs px-3 py-1 rounded flex items-center gap-2 z-10">
                      <span>Ads</span>
                      <button
                        onClick={() => setShowAd(false)}
                        className="text-white hover:text-red-500 transition"
                      >
                        ✕
                      </button>
                    </div>
        
                    {/* Gambar Advertisement */}
                    <div className="relative w-full h-[200px] bg-gray-200 flex justify-center items-center">
                    <Image
                      src="/Kinara1.webp"
                      alt="Kinara Advertisement"
                      className="rounded-lg"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    </div>
                  </div>
                )}
        </div>
        



      
    </div>
  );
};

export default EventDetails;
