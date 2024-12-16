"use client";
import React, { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import HamburgerMenu from "react-hamburger-menu"; // Import Hamburger React
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu mobile
  const [openDropdown, setOpenDropdown] = useState(null); // State untuk kontrol dropdown

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-main flex justify-center items-center text-white 2xl:h-[150px] h-[80px]">
        <div className="w-full flex justify-between items-center py-4 px-6 md:px-8 2xl:px-50 xl:px-48 lg:px-48">
        <div className="lg:hidden flex items-center">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)} // Toggle menu
              width={30}
              height={20}
              strokeWidth={3}
              rotate={0}
              color="white"
              borderRadius={5}
              animationDuration={0.5}
            />
          </div>
          <a href="/">
            <div className="2xl:block hidden text-2xl font-bold">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={300}
                height={300}
                priority={true}
                className="object-contain 2xl:object-cover"
              />
            </div>
             {/* Mobile Hamburger */}
          </a>
             {/* Logo */}
             <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority={true}
              className="object-contain"
            />
          </div>
          {/* Desktop Subscribe Section */}
          <div className="hidden lg:flex flex-col items-start gap-2">
            <span className="font-semibold text-[32px]">Subscribe CoinZone</span>
            <span className="text-sm">Get exclusive content just $200/month</span>
            <FiArrowRight size={24} className="mt-4" />
          </div>
         
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-black text-white z-10">
        <div className="flex justify-between items-center py-3 px-6 md:px-8 2xl:px-48 xl:px-48 lg:px-48">
          {/* Left Navigation Links */}
          <div className="flex space-x-[90px] px-5 text-sm md:text-base">
            <div className="relative group">
              <button className="flex items-center space-x-1 focus:outline-none gap-2">
                <a href="/">
                <span>News</span>
                </a>
                <FiChevronDown size={16} />
              </button>
              <div className="text-[14px] hidden group-hover:block absolute bg-main text-white shadow-lg py-6 px-4 w-[200px] rounded z-10 space-y-5 flex-col justify-start items-center">
                <a href="/category/crypto" className="block hover:text-blue-500">
                  Crypto News
                </a>
                <a href="/category/business" className="block hover:text-blue-500">
                  Business
                </a>
                <a href="#" className="block hover:text-blue-500">
                  Technology
                </a>
                <a href="#" className="block hover:text-blue-500">
                  NFT
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 focus:outline-none gap-2">
                <span>Business</span>
                <FiChevronDown size={16} />
              </button>
              <div className="hidden group-hover:block absolute bg-white text-black shadow-lg py-2 px-4 rounded z-10">
                <a href="#" className="block hover:text-blue-500">
                  Sub-item 1
                </a>
                <a href="#" className="block hover:text-blue-500">
                  Sub-item 2
                </a>
              </div>
            </div>
            <button className="flex items-center space-x-1 gap-2">
              <span>Event</span>
              <FiChevronDown size={16} />
            </button>
            <button className="flex items-center space-x-1 gap-2">
              <span>Video</span>
              <FiChevronDown size={16} />
            </button>
            <div className="relative group">
              
              <a href="/advertising" className="flex items-center space-x-1 focus:outline-none gap-2">
                <span>Advertisment</span>
                <FiChevronDown size={16} />
              </a>
              <div className="hidden group-hover:block absolute bg-main text-white shadow-lg py-6 px-4 w-[200px] rounded z-10 space-y-5 flex-col justify-start items-center ">
                <a href="#" className="block hover:text-blue-500">
                  Press Release
                </a>
                <a href="#" className="block hover:text-blue-500">
                  Advertising
                </a>
              </div>
            </div>
          </div>

          {/* Right Call-to-Action */}
          <div className="hidden md:block">
            <a
              href="#"
              className="text-sm md:text-base text-white flex items-center space-x-2 hover:text-blue-400"
            >
              <span>Join With Us</span>
              <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
         className={`fixed top-0 left-0 h-screen w-[300px] bg-main text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-400">
          <span className="text-lg font-bold">Menu</span>
          <button
            className="text-xl font-bold hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col mt-4 space-y-4 px-4">
          <li>
            <button
              className="flex items-center justify-between w-full hover:text-blue-400"
              onClick={() => toggleDropdown("news")}
            >
              <span>News</span>
              <FiChevronDown />
            </button>
            {openDropdown === "news" && (
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Sub-item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Sub-item 2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="flex items-center justify-between w-full hover:text-blue-400"
              onClick={() => toggleDropdown("business")}
            >
              <span>Business</span>
              <FiChevronDown />
            </button>
            {openDropdown === "business" && (
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Sub-item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Sub-item 2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Opinion
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Event
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Video
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
