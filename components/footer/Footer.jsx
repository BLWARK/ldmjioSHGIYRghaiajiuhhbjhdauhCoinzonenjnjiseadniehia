"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-full flex flex-col bg-main  ">
      <div className="h-full flex flex-col 2xl:flex-row xl:flex-row justify-start items-start">
        {/* Seksi 1 */}
        <div className="foot-sec1 p-5 2xl:px-60 2xl:py-5 w-full 2xl:w-[45%] flex flex-col justify-start items-start">
          <div className="Logo text-white font-bold text-[24px] 2xl:text-[32px]">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={200}
              height={290}
              priority={true}
              className="object-contain 2xl:object-cover"
            />
          </div>
          <div className="sub-judul py-5 2xl:py-2 text-gray-400 text-[14px] 2xl:text-[18px]">
            <p>Wisma Aria FI. 2 Room 204</p>
            <p>JI. HOS. Cokroaminoto No.81, Menteng, Central Jakarta 10310</p>
          </div>
        </div>

        {/* Seksi 3 */}
        <div className="foot-sec3 px-10 py-10 2xl:px-10 2xl:py-20 w-full 2xl:w-[35%] flex flex-col justify-start items-start gap-3">
          <div className="contact flex justify-start items-center gap-4">
            <div className="w-[20px] h-[5px] bg-secondary rounded-full"></div>
            <div className="contact font-bold text-white">Contact Us</div>
          </div>
          <div className="contact mt-5 flex justify-start items-center gap-4">
            <div className="w-[8px] h-[8px] bg-secondary rounded-full"></div>
            <div className="contact font-bold text-white">
              Phone : +62 81295095096
            </div>
          </div>
          <div className="contact mt-5 flex justify-start items-center gap-4">
            <div className="w-[8px] h-[8px] bg-secondary rounded-full"></div>
            <div className="contact font-bold text-white">
              Email : info@xyzgroup.co.id
            </div>
          </div>
        </div>

        {/* Seksi 4 */}
        <div className="foot-sec4 px-10 py-10 2xl:px-20 2xl:py-20 w-full 2xl:w-[25%] flex flex-col justify-start items-start gap-3">
          <div className="follow flex justify-start items-center gap-4">
        <div className="w-[20px] h-[5px] bg-secondary rounded-full"></div>
          <h3 className="text-md font-bold ">
            Follow Us{" "}
          </h3>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-blue-600 transition duration-300 group"
            >
              <FaFacebookF
                className="text-blue-600 group-hover:text-white transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-black transition duration-300 group"
            >
              <FaXTwitter
                className="text-black group-hover:text-white transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-pink-500 transition duration-300 group"
            >
              <FaInstagram
                className="text-pink-500 group-hover:text-white transition duration-300"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Garis Pemisah dan Copyright */}
      <div className="line w-full h-[1px] bg-gray-500 my-5"></div>
      <div className="py-2 flex justify-center items-center text-[12px] italic font-light text-white mb-4">
        <p>© Copyrights 2024 XYZ Creative Group All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
