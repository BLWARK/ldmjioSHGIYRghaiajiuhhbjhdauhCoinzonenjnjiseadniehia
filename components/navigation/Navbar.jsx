"use client";
import React, { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import HamburgerMenu from "react-hamburger-menu"; // Import react-hamburger-menu
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu mobile
  const [openDropdown, setOpenDropdown] = useState(null); // State untuk dropdown menu

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-main flex justify-center items-center text-white 2xl:h-[180px] h-[80px]">
        <div className="w-full flex justify-between items-center py-4 px-6 md:px-8 2xl:px-48 xl:px-48 lg:px-48">
          {/* Logo */}
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
            <div className="2xl:hidden block text-2xl font-bold">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={150}
                height={150}
                priority={true}
                className="object-contain"
              />
            </div>
          </a>

          {/* Desktop Subscribe */}
          <div className="hidden lg:flex flex-col items-start gap-2">
            <span className="font-semibold text-[32px]">Subscribe CoinZone</span>
            <span className="text-sm">Get exclusive content just $200/month</span>
            <FiArrowRight size={24} className="mt-4" />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
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
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-black text-white">
        <div className="flex justify-between items-center py-3 px-6 md:px-8 2xl:px-48 xl:px-48 lg:px-48">
          {/* Links */}
          <div className="flex space-x-[90px] text-sm md:text-base">
            <div className="relative group">
              <button className="flex items-center space-x-1 focus:outline-none gap-2">
                <a href="/">News</a>
                <FiChevronDown size={16} />
              </button>
              <div className="hidden group-hover:block absolute bg-main text-white shadow-lg py-6 px-4 w-[200px] rounded z-10 space-y-5">
                <a href="/category/crypto" className="block hover:text-blue-500">
                  Crypto News
                </a>
                <a href="/category/business" className="block hover:text-blue-500">
                  Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-main text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
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
                  <a href="/category/crypto" className="hover:text-blue-400">
                    Crypto News
                  </a>
                </li>
                <li>
                  <a href="/category/business" className="hover:text-blue-400">
                    Business
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
