"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaPhp,
  FaLaravel,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVisualstudiocode,
  SiMui,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { inter } from "@/utils/google-fonts/fonts";

const SkillSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      className={`mt-16 md:mt-40 lg:mx-8 xl:mx-36 ${inter.className}`}
      id="skills"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-center text-2xl md:text-3xl font-bold leading-8 text-gray-300">
          <span className="text-cyan-400">02. </span>
          <span className="textClip">Coding Skills</span>
        </h2>
      </div>
      <div
        className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap3 lg:gap-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaHtml5 className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            HTML5
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaCss3Alt className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            CSS3
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <IoLogoJavascript className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            JavaScript
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaReact className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            React.js
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaNodeJs className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Node.js
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <SiExpress className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Express.js
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <SiMongodb className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            MongoDB
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <GrMysql className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            MySQL
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <SiTailwindcss className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Tailwind CSS
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaBootstrap className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Bootstrap
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <SiMui className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Material UI
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaGitAlt className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Git
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaGithub className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            GitHub
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <BiLogoTypescript className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            TypeScript
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <TbBrandNextjs className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Next.js
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <SiVisualstudiocode className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            VS Code
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaWordpress className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            WordPress
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaPhp className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            PHP
          </strong>
        </div>
        <div className="flex flex-col items-center flex-1 text-gray-400 bg-cardHover bg-opacity-30 p-5 rounded-lg">
          <FaLaravel className="text-5xl" />
          <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
            Laravel
          </strong>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
