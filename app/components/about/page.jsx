"use client";

import { BiSolidRightArrow } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import { inter } from "@/utils/google-fonts/fonts";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
    >
      <h3>
        <span className="text-2xl font-bold text-cyan-300">01. </span>{" "}
        <strong className="text-2xl text-gray-300">About Me</strong>
      </h3>
      <div className="mt-8 font-medium leading-7 tracking-wide text-gray-400">
        <span className="block">
          I am a professional full-stack developer with a strong understanding
          of the MERN stack (MongoDB, Express, React, and Node.js) and I am able
          to use these technologies to build scalable and performant web
          applications.
        </span>
        <span className="mt-7 block">
          I am able to work effectively with other developers and stakeholders,
          and I am currently looking for a new opportunity where I can use my
          skills and experience.
        </span>
        <span className="mt-7 block">
          I am confident that I can be a valuable asset to any team.
        </span>
        <span className="mt-4 block text-gray-400">
          Here is the list of languages and technologies I have been working
          with recently.
        </span>
        <div className="mt-5 grid gap-4 md:grid md:grid-cols-3">
          <ul className={inter.className}>
            <li className="flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> JavaScript
              (ES6+)
            </li>
            <li className="mt-3 flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> React.js
            </li>
            <li className="mt-3 flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> Node.js
            </li>
          </ul>
          <ul className={inter.className}>
            <li className="flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> Express.js
            </li>
            <li className="mt-3 flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> MongoDB
            </li>
            <li className="mt-3 flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> Tailwind CSS
            </li>
          </ul>
          <ul className={inter.className}>
            <li className="flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> MySQL
            </li>
            <li className="mt-3 flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> Material UI
            </li>
            <li className="mt-3 flex items-center text-xs font-semibold tracking-widest text-gray-400">
              <BiSolidRightArrow className="mr-2 text-cyan-300" /> Bootstrap
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
