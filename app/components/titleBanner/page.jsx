"use client";

import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineElectricalServices } from "react-icons/md";
import AOS from "aos";
import Link from "next/link";
import { inter } from "../../../utils/google-fonts/fonts";
import TypeWriter from "../cssFeatures/typingAnimation/page";
import "aos/dist/aos.css";
import SocialMedia from "@/app/sections/media/page";

const TitleHero = () => {
  const animatedText = [
    "Full-stack Developer.",
    "Email Developer",
    "MERN Stack Developer.",
    "Web Designer.",
    "Web Developer.",
    "Programmer.",
    "Blogger.",
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="true"
      data-aos-anchor-placement="center-bottom"
      className={`flex flex-col justify-center ${inter.className}`}
    >
      <p className="mb-6">
        <span className="text-sm text-green-500 border-[1px] border-green-800 border-opacity-20 bg-green-900 bg-opacity-10 py-1 px-2 rounded-lg inline-flex items-center gap-2">
          <span className="size-2 bg-green-400 rounded-full" />
          <span>Available for Work</span>
        </span>
      </p>
      <p className="text-xl text-gray-300 mb-1 font-semibold capitalize font-roboto">
        Hello, I'm
      </p>
      <h2 className="mt-1">
        <strong className="font-bold text-left text-3xl md:text-4xl lg:text-5xl text-gray-300 ">
          Mozahedul&nbsp;
        </strong>
        <strong className="font-bold text-left text-3xl md:text-4xl lg:text-5xl text-gray-300 textClip">
          Islam.
        </strong>
      </h2>
      <div className="mt-2 md:mt-3 text-left block text-gray-300">
        <TypeWriter animatedText={animatedText} />
      </div>
      <p className="text-sm mt-3 md:mt-6 font-normal text-gray-400 text-left mr-2 leading-6">
        I'm a{" "}
        <span className="text-purple-500">
          Full-Stack Developer & Email Developer
        </span>{" "}
        developing frontend and backend supported web application and responsive
        email templates that are compatible to major email clients.
      </p>
      <div className="mt-8 flex items-center gap-1 md:gap-3">
        <Link
          href="#work"
          aria-label="Navigate to work section"
          rel="noreferrer noopener"
        >
          <button
            type="button"
            className="hire-btn py-3 px-4 mr-3 flex items-center"
          >
            <FaEye className="inline text-lg mr-2" />
            <span>View My Work</span>
          </button>
        </Link>
        <Link
          href="https://fiver.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl"
        >
          {/* BUTTON BORDER SPINNING ANIMATION */}
          <button
            type="button"
            className="relative flex gap-2 items-center text-gray-300 px-4 py-3 text-sm hover:text-blue-400 transition-colors hover:transition-all border-2 border-slate-900 border-opacity-10 rounded-xl capitalize bg-transparent border-none cursor-pointer tracking-wider"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 180 46"
              preserveAspectRatio="none"
            >
              {/* base track */}
              <rect
                className="fill-none stroke-gray-900"
                strokeWidth="1.5"
                x="1"
                y="1"
                width="178"
                height="44"
                rx="7"
              />

              {/* animated dash */}
              <rect
                className="fill-none stroke-purple-400 animate-dash-move"
                strokeWidth="1.5"
                strokeDasharray="40 260"
                strokeDashoffset="0"
                strokeLinecap="round"
                x="1"
                y="1"
                width="178"
                height="44"
                rx="7"
              />
            </svg>
            <span>Hire me</span>
            <MdOutlineElectricalServices />
          </button>
        </Link>
      </div>
      {/* Social media icons */}
      <div className="relative mt-4">
        <p className="text-gray-400 text-sm my-3">Let's connect</p>
        <SocialMedia />
      </div>
    </section>
  );
};

export default TitleHero;
