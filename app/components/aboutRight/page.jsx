"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdDesignServices } from "react-icons/md";

const AboutRight = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="flex flex-col justify-between">
      <div
        className="bg-[#060813] border-[2px] border-[#9bc2f518] p-5 rounded-2xl flex"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <div className="mt-[2px]">
          <p className="mr-3 w-7 h-7 p-1 flex items-center justify-center bg-[#5e9eff34] rounded-full">
            <MdDesignServices className="text-[#5e9effe1] text-lg rounded-full" />
          </p>
        </div>
        <div>
          <h2 className="text-gray-200 font-bold text-xl tracking-wide capitalize m-0 p-0">
            UI/UX design
          </h2>
          <p className="text-gray-300 tracking-wide text-sm mt-2">
            Initially, I sketch the design with pencil or online whiteboard.
            Later I transform the design with Adobe XD, Adobe Photoshop, and
            Figma for stunning web projects.{" "}
          </p>
        </div>
      </div>
      <div
        className="bg-[#060813] border-[2px] border-[#9bc2f518] p-5 rounded-2xl flex"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <div className="mt-[2px]">
          <p className="mr-3 w-7 h-7 p-1 flex items-center justify-center bg-[#ff79a81c] rounded-full">
            <MdDesignServices className="text-[#ff79a8bb] text-lg rounded-full" />
          </p>
        </div>
        <div>
          <h2 className="text-gray-200 font-bold text-xl tracking-wide capitalize m-0 p-0">
            Website design
          </h2>
          <p className="text-gray-300 tracking-wide text-sm mt-2">
            I convert the UI or UX design to live design with code like HTML5,
            CSS3, JavaScript, React.js, Bootstrp, Material UI, Tailwind CSS.
          </p>
        </div>
      </div>
      <div
        className="bg-[#060813] border-[2px] border-[#9bc2f518] p-5 rounded-2xl flex"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <div className="mt-[2px]">
          <p className="mr-3 w-7 h-7 p-1 flex items-center justify-center bg-[#61ff5e18] rounded-full">
            <MdDesignServices className="text-[#61ff5ebd] text-lg rounded-full" />
          </p>
        </div>
        <div>
          <h2 className="text-gray-200 font-bold text-xl tracking-wide capitalize m-0 p-0">
            Website development
          </h2>
          <p className="text-gray-300 tracking-wide text-sm mt-2">
            Initially, I sketch the design with pencil or online whiteboard.
            Later I transform the design with Adobe XD, Adobe Photoshop, and
            Figma for stunning web projects.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutRight;
