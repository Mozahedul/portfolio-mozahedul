"use client";

import React, { useEffect } from "react";
import { IoLayers } from "react-icons/io5";
import { LuDroplet } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import aosFadeUp from "@/utils/animation/aosFadeUp";

const AboutRightSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      className="bg-[#0D1520] relative p-3 md:p-6 flex items-center flex-col rounded-xl border-[1px] border-slate-500 border-opacity-20"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="true"
      data-aos-anchor-placement="center-bottom"
    >
      {/* 3 dots */}
      <div className="flex gap-[6px] absolute left-3 top-3 w-full">
        <span className="w-[10px] h-[10px] bg-red-600 bg-opacity-50 inline-block rounded-full" />
        <span className="w-[10px] h-[10px] bg-orange-600 bg-opacity-50 inline-block rounded-full" />
        <span className="w-[10px] h-[10px] bg-green-600 bg-opacity-50 inline-block rounded-full" />
      </div>
      {/* About me Header */}
      {/* profile image + title + subtitle */}

      <div className="relative" {...aosFadeUp}>
        {/* Dot for active status */}
        <div
          className="w-4 h-4 bg-green-400 before:bg-blue-400 rounded-full absolute right-[-6px] top-1/3 animate-bounce border-2 border-[#0D1520] "
          {...aosFadeUp}
        />
        <Image
          src="/profile-img.jpg"
          width="90"
          height="90"
          alt="Profile section"
          className="rounded-full border-2 border-purple-600 p-1 "
        />
      </div>

      <h3
        className="text-gray-300 mt-2 text-lg font-bold capitalize text-center"
        {...aosFadeUp}
      >
        Mozahedul Islam
      </h3>
      <p
        className="text-cyan-200 text-opacity-20 text-sm mt-1 text-center border-b-[1px] border-gray-300 border-opacity-10 w-full pb-6"
        {...aosFadeUp}
      >
        <span>MERN Stack Developer</span>
        <br />
        <span>& Email Template Developer</span>
      </p>

      {/* specialize */}
      <div className="w-full mt-4" {...aosFadeUp}>
        <h2 className="text-xs tracking-wider uppercase font-extralight text-gray-600 text-left">
          What I specialize in
        </h2>
      </div>
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 border-b-[1px] border-gray-300 border-opacity-10 pb-6"
        {...aosFadeUp}
      >
        {/* Full stack */}
        <div className="flex gap-3 items-center bg-[#0D1520] px-3 py-2 border-[1px] border-cyan-800 border-opacity-15 rounded-lg">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-10 h-10 text-center inline-block rounded-xl p-2"
          >
            <IoLayers className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
              Full Stack Web Apps
            </h2>
            <p className="text-gray-600 text-xs leading-4 mt-[2px]">
              MERN development
            </p>
          </div>
        </div>

        {/* Responsive UI / UX */}
        <div className="flex gap-3 items-center bg-[#0D1520] px-3 py-2 border-[1px] border-cyan-800 border-opacity-15 rounded-lg">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-10 h-10 text-center inline-block rounded-xl p-2"
          >
            <IoLayers className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
              Responsive UI / UX
            </h2>
            <p className="text-gray-600 text-xs leading-4 mt-[2px]">
              All device supported
            </p>
          </div>
        </div>

        {/* Email Template */}
        <div className="flex gap-3 items-center bg-[#0D1520] px-3 py-2 border-[1px] border-cyan-800 border-opacity-15 rounded-lg">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-10 h-10 text-center inline-block rounded-xl p-2"
          >
            <IoLayers className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
              Email Template Dev
            </h2>
            <p className="text-gray-600 text-xs leading-4 mt-[2px]">
              Compatible to all clients
            </p>
          </div>
        </div>
      </div>

      {/* Core stack */}
      <div
        className="mt-4 border-b-[1px] border-gray-300 border-opacity-10 w-full pb-6"
        {...aosFadeUp}
      >
        <h2 className="text-xs uppercase text-cyan-300 text-opacity-30 font-extralight">
          Core stack
        </h2>
        <div className="flex flex-wrap gap-2 items-start content-start w-full mt-2">
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-purple-400 border-opacity-30 text-purple-400 text-opacity-60 bg-purple-400 bg-opacity-10"
          >
            React.js
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-purple-400 border-opacity-30 text-purple-400 text-opacity-60 bg-purple-400 bg-opacity-10"
          >
            Node.js
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-purple-400 border-opacity-30 text-purple-400 text-opacity-60 bg-purple-400 bg-opacity-10"
          >
            MongoDB
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-green-400 border-opacity-30 text-green-400 text-opacity-60 bg-green-400 bg-opacity-10"
          >
            MJML
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-cyan-400 border-opacity-30 text-cyan-400 text-opacity-60 bg-cyan-400 bg-opacity-10"
          >
            Next.js
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-cyan-400 border-opacity-30 text-cyan-400 text-opacity-60 bg-cyan-400 bg-opacity-10"
          >
            TypeScript
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-gray-400 border-opacity-30 text-gray-400 text-opacity-60 bg-gray-400 bg-opacity-10"
          >
            Tailwind CSS
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-gray-400 border-opacity-30 text-gray-400 text-opacity-60 bg-gray-400 bg-opacity-10"
          >
            Express.js
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-sky-400 border-opacity-30 text-sky-400 text-opacity-60 bg-sky-400 bg-opacity-10"
          >
            Bootstrap
          </button>
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-full border-[1px] border-sky-400 border-opacity-30 text-sky-400 text-opacity-60 bg-sky-400 bg-opacity-10"
          >
            Material UI
          </button>
        </div>
      </div>

      {/* Fun fact section */}
      <div
        className="flex gap-3 items-start bg-[#0D1520] px-3 py-2 border-t-[1px] border-r-[1px] border-b-[1px] border-l-8 border-b-purple-800 border-r-purple-800 border-t-purple-800 border-l-purple-800 border-opacity-15 rounded-tr-xl rounded-br-xl mt-8"
        {...aosFadeUp}
      >
        <div className="text-purple-600">
          <LuDroplet size="32" />
        </div>
        <p className="text-gray-500 text-xs leading-6 mt-[2px] tracking-wide">
          I code at{" "}
          <span className="text-cyan-600 font-semibold">
            any hour of the day
          </span>{" "}
          - time never stops me. I work best in{" "}
          <span className="text-purple-600 font-semibold">
            complete silence,{" "}
          </span>{" "}
          with a glass of water by my side, diving into{" "}
          <span className="text-purple-600 font-semibold">
            long deep sessions
          </span>{" "}
          where I lose track of time. Whether solo or collaborating, I bring the
          same <span className="text-purple-600 font-semibold">full focus</span>{" "}
          every time
        </p>
      </div>
    </section>
  );
};

export default AboutRightSection;
