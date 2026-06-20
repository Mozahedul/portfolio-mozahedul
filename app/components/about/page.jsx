"use client";

import { useEffect } from "react";
import { GiElectric, GiCompass } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import AOS from "aos";
// import { inter } from "@/utils/google-fonts/fonts";
import "aos/dist/aos.css";

const AboutLeftSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="true"
      data-aos-anchor-placement="center-bottom"
    >
      {/* About me = button, title, & subtitle */}
      <div>
        <button
          type="button"
          className="send-message flex items-center justify-center gap-[2px] text-purple-200 cursor-default"
          aria-label="Button for about me"
        >
          <span>About me</span>
        </button>
        {/* TITLE */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-300">
          I build things for the <span className="text-purple-700">web</span> &{" "}
          <span>inbox</span>
        </h3>

        {/* SUBTITLE */}
        <div className="mt-6 font-medium leading-7 tracking-wide text-gray-400">
          <p className="about-paragraph text-gray-400 mt-2 text-sm">
            <span className="w-[1px] h-full bg-[#a36aff] bg-opacity-20 rounded-full" />
            <span>
              A passionate{" "}
              <span className="text-cyan-500 font-medium">
                Full Stack Developer{" "}
              </span>
              specializing in the MERN stack - building everything from scalable
              APIs to pixel perfect UIs. I also craft{" "}
              <span className="text-cyan-500 font-medium">
                high-converting email templates
              </span>{" "}
              that render flawlessly across every client.
            </span>
          </p>
        </div>
      </div>

      {/* VERTICAL STEPPER */}
      <div>
        <h3 className="text-xs uppercase font-extralight text-cyan-200 text-opacity-25">
          My Journey
        </h3>
        <div className="mt-3">
          <div className="journey">
            {/* Dot */}
            <div className="flex-shrink-0 w-4 h-4 border-2 border-purple-600 bg-[#060813] rounded-full z-10" />
            <div>
              <p className="text-cyan-100 text-xs text-opacity-30">2019</p>
              <h3 className="text-gray-400 text-sm font-bold">
                Started web development
              </h3>
              <p className="text-xs text-cyan-300 text-opacity-40 font-extralight mt-[2px]">
                Fell in love with HTML & CSS. Built first portfolio.
              </p>
            </div>
          </div>
          <div className="journey">
            {/* Dot */}
            <div className="flex-shrink-0 w-4 h-4 border-2 border-purple-600 bg-[#060813] rounded-full z-10" />
            <div>
              <p className="text-cyan-100 text-xs text-opacity-30">2020</p>
              <h3 className="text-gray-400 text-sm font-bold">
                Went full stack with MERN
              </h3>
              <p className="text-xs text-cyan-300 text-opacity-40 font-extralight mt-[2px]">
                Built real-world apps with React, Nodejs, Next.js & MongoDB.
              </p>
            </div>
          </div>
          <div className="journey">
            {/* Dot */}
            <div className="flex-shrink-0 w-4 h-4 border-2 border-purple-600 bg-[#060813] rounded-full z-10" />
            <div>
              <p className="text-cyan-100 text-xs text-opacity-30">2022</p>
              <h3 className="text-gray-400 text-sm font-bold">
                Specialized in email development
              </h3>
              <p className="text-xs text-cyan-300 text-opacity-40 font-extralight mt-[2px]">
                Delivered 60+ pixel-perfect email template globally.
              </p>
            </div>
          </div>
          <div className="journey">
            {/* Dot */}
            <div className="flex-shrink-0 w-4 h-4 border-2 border-purple-600 bg-[#060813] rounded-full z-10" />
            <div>
              <p className="text-cyan-100 text-xs text-opacity-30">Now</p>
              <h3 className="text-gray-400 text-sm font-bold">
                Freelancing worldwide
              </h3>
              <p className="text-xs text-cyan-300 text-opacity-40 font-extralight mt-[2px]">
                Open to new projects. 100% client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PERFORMACE SECTION = 3 COLUMNS */}
      <div className="flex flex-wrap gap-3 mt-8">
        <div className="flex gap-3 items-center bg-[#0D1520] px-2 py-1 border-[1px] border-cyan-800 border-opacity-15 rounded-lg">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-10 h-10 text-center inline-block rounded-xl p-2"
          >
            <GiElectric className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
              Performance
            </h2>
            <p className="text-gray-500 text-xs leading-4 mt-[2px]">
              Fast, optimized and reliable solutions.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center bg-[#0D1520] px-3 py-2 border-[1px] border-cyan-800 border-opacity-15 rounded-lg">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-10 h-10 text-center inline-block rounded-xl p-2"
          >
            <GiCompass className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
              Precision
            </h2>
            <p className="text-gray-500 text-xs leading-4 mt-[2px]">
              Pixel-perfect designs and clean code.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center bg-[#0D1520] px-3 py-2 border-[1px] border-cyan-800 border-opacity-15 rounded-lg">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-10 h-10 text-center inline-block rounded-xl p-2"
          >
            <FaHeart className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
              Purpose
            </h2>
            <p className="text-gray-500 text-xs leading-4 mt-[2px]">
              Building products that solve real problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeftSection;
