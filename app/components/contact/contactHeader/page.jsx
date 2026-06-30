"use client";

import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaGlobe, FaPhone, FaXTwitter } from "react-icons/fa6";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { inter } from "@/utils/google-fonts/fonts";
import "aos/dist/aos.css";
import aosFadeUp from "@/utils/animation/aosFadeUp";

const ContactHeader = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      id="contact"
      {...aosFadeUp}
      className={`flex flex-col justify-between ${inter.className} my-4 sm:my-6 md:my-10`}
    >
      <div>
        <p
          className="text-xs flex gap-2 items-center uppercase"
          aria-label="Button for sending message"
        >
          <span className="w-10 h-[1px] bg-purple-800 inline-block" />
          <span className="text-purple-400 font-extralight tracking-wide">
            Let's connect
          </span>
        </p>
        <h1 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-200">
          <span>Have an</span>
          <br />
          <span className="text-purple-600 text-transparent [-webkit-text-stroke:2px_#a855f7]">
            idea?
          </span>
          <br />
          <span>Let's talk.</span>
        </h1>
        <p className="font-md mt-6 text-left text-sm tracking-wide leading-7 text-gray-400">
          Whether it's a full-stack web app, a pixel-perfect email template, or
          just a conversation — I'm all ears. Every great project starts with a
          message.
        </p>
      </div>
      {/* Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-left mt-14 border-[1px] border-gray-600 border-opacity-30">
        {/* Email */}
        <div
          className="flex flex-col gap-1 md:border-r-[1px] border-b-[1px] border-gray-700 border-opacity-30 p-4"
          {...aosFadeUp}
        >
          <p className="text-gray-600 text-[10px] uppercase font-extralight tracking-wider">
            Email
          </p>
          <a
            href="mailto:mozahed001@gmail.com?subject=Project Inquiry"
            className="flex items-center gap-[6px] text-purple-300 text-xs no-underline"
          >
            <MdEmail className="shrink-0" />
            <span>mozahed001@gmail.com</span>
          </a>
        </div>

        {/* Mobile */}
        <div
          className="flex flex-col gap-1 border-b-[1px] border-gray-700 border-opacity-30 p-4"
          {...aosFadeUp}
        >
          <p className="text-gray-600 text-[10px] uppercase font-extralight tracking-wider">
            Mobile
          </p>
          <a
            href="tel:+8801738648749"
            className="flex items-center gap-[6px] text-xs"
          >
            <FaPhone className="text-purple-400 shrink-0 no-underline" />
            <span className="text-gray-300">+880-1738-648-749</span>
          </a>
        </div>

        {/* Blog */}
        <div
          className="flex flex-col gap-1 border-b-[1px] md:border-b-0 md:border-r-[1px] border-gray-700 border-opacity-30 p-4"
          {...aosFadeUp}
        >
          <p className="text-gray-600 text-[10px] uppercase font-extralight tracking-wider">
            Blog
          </p>
          <div className="flex items-center gap-[6px] text-purple-300 text-xs">
            <FaGlobe className="shrink-0" />
            <Link
              href="https://procodelearn.blogspot.com/"
              target="_blank"
              className="truncate"
            >
              https://procodelearn.blogspot.com/
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1 p-4" {...aosFadeUp}>
          <p className="text-gray-600 text-[10px] uppercase font-extralight tracking-wider">
            Location
          </p>
          <p className="flex items-center gap-[6px] text-purple-300 text-xs">
            <CiLocationOn className="text-purple-400 shrink-0" />
            <span className="text-gray-300">Bangladesh . Remote OK</span>
          </p>
        </div>

        {/* <div className="flex items-center my-4">
          <div
            className="bg-gradient-contact bg-opacity-30 text-gray-300 p-3 rounded-full"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <FaPhone />
          </div>
          <p
            className="flex flex-col ml-3"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <strong className="text-sm font-bold text-[#a36aff]">
              Mobile:
            </strong>
            <span className="text-xs text-gray-200 tracking-wide">
              {" "}
              +880-1738-648-749
            </span>
          </p>
        </div>
        <div className="flex items-center mt-4">
          <div
            className="bg-gradient-contact bg-opacity-30 text-gray-300 p-3 rounded-full"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <CgWebsite />
          </div>
          <p
            className="flex flex-col ml-3"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <strong className="text-sm font-bold text-[#a36aff]">
              Blog Website:
            </strong>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://procodelearn.blogspot.com/"
              className="text-[#ffac5e] text-xs tracking-wide"
              aria-label="The button navigates to the blog website"
            >
              https://procodelearn.blogspot.com/
            </Link>
          </p>
        </div> */}
      </div>

      {/* Social media */}
      <div className="mt-12">
        <h4 className="uppercase font-extralight text-xs text-gray-500 tracking-wider ">
          Find me on
        </h4>
        <div className="mt-3 flex items-center gap-2">
          <Link
            href="https://github.com/Mozahedul"
            target="_blank"
            className="p-[10px] bg-gray-900 inline-block text-gray-400"
          >
            <FiGithub size="18" />
          </Link>
          <Link
            href="https://github.com/Mozahedul"
            target="_blank"
            className="p-[10px] bg-gray-900 inline-block text-gray-400"
          >
            <FaLinkedinIn size="18" />
          </Link>
          <Link
            href="https://github.com/Mozahedul"
            target="_blank"
            className="p-[10px] bg-gray-900 inline-block text-gray-400"
          >
            <FaXTwitter size="18" />
          </Link>
          <Link
            href="https://github.com/Mozahedul"
            target="_blank"
            className="p-[10px] bg-gray-900 inline-block text-gray-400"
          >
            <FaFacebookF size="18" />
          </Link>
        </div>
      </div>

      {/* Personal response */}
      <div className="mt-10 flex gap-3 flex-start p-4 bg-[#22222C]">
        <div>
          <CiClock2
            size="32"
            className="text-purple-300 border-[1px] border-purple-300 border-opacity-40 p-1"
          />
        </div>
        <div>
          <h4 className="text-gray-200 font-semibold text-sm">
            Personal response guaranteed
          </h4>
          <p className="text-gray-400 text-xs mt-1 leading-4">
            Every message is read and replied to by me directly — no bots, no
            auto-replies. Usually within a few hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
