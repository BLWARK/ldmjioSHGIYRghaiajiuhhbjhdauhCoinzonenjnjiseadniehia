"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import HamburgerMenu from "react-hamburger-menu"; // Import Hamburger React
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu mobile
  const [openDropdown, setOpenDropdown] = useState(null); // State untuk kontrol dropdown
  const pathname = usePathname();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const isActive = (path) => pathname === path;

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-main flex justify-center items-center text-white 2xl:h-[150px] h-[80px]">
        <div className="w-full flex justify-between items-center py-4 px-6 md:px-8 2xl:px-52 xl:px-12 lg:px-12">
          {/* Mobile Hamburger */}
          <div className="2xl:hidden xl:flex lg:flex md:flex flex items-center cursor-pointer">
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
          </a>
          {/* Logo */}

          <div className="flex-1  justify-center lg:justify-start 2xl:hidden xl:flex lg:flex md:flex flex">
            <a href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={150}
                height={150}
                priority={true}
                className="object-contain"
              />
            </a>
          </div>
          {/* Desktop Subscribe Section */}
          <div className="hidden 2xl:flex xl:hidden lg:hidden md:hidden flex-col items-start gap-2 px-6">
            <span className="font-semibold text-[28px]">
              Subscribe CoinZone
            </span>
            <span className="text-sm">
              Get exclusive content just $200/month
            </span>
            <FiArrowRight size={24} className="mt-4" />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden 2xl:block xl:hidden lg:hidden bg-black text-white z-10">
        <div className="flex justify-between items-center py-3 px-8 md:px-8 2xl:px-48 xl:px-48 lg:px-48">
          {/* Left Navigation Links */}
          <div className="flex 2xl:space-x-[90px] xl:space-x-[40px] lg:space-x-[40px] 2xl:px-8 xl:px-4 lg:px-4 text-sm md:text-base">
            <div className="relative group">
              <button className="flex items-center space-x-1 focus:outline-none gap-2 hover:text-blue-400">
                <a
                  href="/"
                  className={`${
                    isActive("/")
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400"
                  }`}
                >
                  <span className="flex justify-center items-center gap-4">
                    News <FiChevronDown size={16} />
                  </span>
                </a>
              </button>
              <div className="text-[14px] hidden group-hover:block absolute bg-main text-white shadow-lg py-6 px-4 w-[200px] rounded z-10 space-y-5 flex-col justify-start items-center">
                <a
                  href="/category/crypto"
                  className="block hover:text-blue-500"
                >
                  Crypto News
                </a>
                <a
                  href="/category/business"
                  className="block hover:text-blue-500"
                >
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
              <button className="flex items-center space-x-1 focus:outline-none gap-2 hover:text-blue-400">
                <a
                  href="/category/academy"
                  className={`${
                    isActive("/category/academy")
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400"
                  }`}
                >
                  <span>Academy</span>
                </a>
                {/* <FiChevronDown size={16} /> */}
              </button>
              {/* <div className="hidden group-hover:block absolute bg-white text-black shadow-lg py-2 px-4 rounded z-10">
                <a href="#" className="block hover:text-blue-500">
                  Sub-item 1
                </a>
                <a href="#" className="block hover:text-blue-500">
                  Sub-item 2
                </a>
              </div> */}
            </div>
            <button className="flex items-center space-x-1 gap-2 hover:text-blue-400">
              <a
                href="/all-events"
                className={`${
                  isActive("/all-events")
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
              >
                <span>Events</span>
                {/* <FiChevronDown size={16} /> */}
              </a>
            </button>
            <button className="flex items-center space-x-1 gap-2 hover:text-blue-400">
              <a href="/">
                <span>Video</span>
              </a>
              {/* <FiChevronDown size={16} /> */}
            </button>
            <div className="relative group hover:text-blue-400">
              <a
                href="/advertising"
                className={`${
                  isActive("/advertising")
                    ? "text-blue-400 font-semibold flex items-center space-x-1 focus:outline-none gap-2"
                    : "hover:text-blue-400"
                }`}
              >
                <span>Advertise</span>
                {/* <FiChevronDown size={16} /> */}
              </a>
              {/* <div className="hidden group-hover:block absolute bg-main text-white shadow-lg py-6 px-4 w-[200px] rounded z-10 space-y-5 flex-col justify-start items-center ">
                <a href="#" className="block hover:text-blue-500">
                  Press Release
                </a>
                <a href="#" className="block hover:text-blue-500">
                  Advertising
                </a>
              </div> */}
            </div>
          </div>

          {/* Right Call-to-Action */}
          <div className="hidden xl:block lg:block md:block">
            <a
              href="#"
              className="text-sm md:text-base text-white flex items-center space-x-2 pr-7 hover:text-blue-400"
            >
              <span>Join With Us</span>
              <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-main text-white z-50 transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        
        <div className="flex-1  justify-between items-center lg:justify-start 2xl:hidden xl:flex lg:flex md:flex flex">
        
            <a href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={150}
                height={150}
                priority={true}
                className="object-contain"
              />
            </a>
            <button
            className="text-xl font-bold hover:text-gray-300 flex justify-end items-end right-0 pr-6 "
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          </div>
        <div className="flex justify-between items-center p-4 border-b border-gray-400">
          <span className="text-lg font-bold">Menu</span>
         
        </div>
        <ul className="flex flex-col mt-4 space-y-4 px-4 gap-2">
          <li>
            <button
              className="flex items-center justify-between w-full hover:text-blue-400"
              onClick={() => toggleDropdown("news")}
            >
              <span>News</span>
              <FiChevronDown />
            </button>
            {openDropdown === "news" && (
              <ul className="pl-4 mt-4 space-y-4 text-sm mb-2 ">
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
                <li>
                  <a
                    href="/category/technology"
                    className="hover:text-blue-400"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a href="/category/NFT" className="hover:text-blue-400">
                    NFT
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/category/academy"
              className="flex items-center justify-between w-full hover:text-blue-400"
              // onClick={() => toggleDropdown("business")}
            >
              <span>Academy</span>
              {/* <FiChevronDown /> */}
            </a>
            {/* {openDropdown === "business" && (
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
            )} */}
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
            <a href="/advertising" className="hover:text-blue-400">
              Advertise
            </a>
          </li>
        </ul>
        <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden flex-col items-start gap-2 px-6 py-10 mt-5 border-t  border-gray-400">
          <span className="font-semibold text-[16px]">Subscribe CoinZone</span>
          <span className="text-xs">Get exclusive content just $200/month</span>
          <FiArrowRight size={24} className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
