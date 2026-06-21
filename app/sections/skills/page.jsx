"use client";

import React, { useEffect } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaCheck, FaNodeJs } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { FaHtml5, FaBootstrap, FaGithub, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import {
  SiMui,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { inter } from "@/utils/google-fonts/fonts";
import aosFadeUp from "@/utils/animation/aosFadeUp";
import aosZoomIn from "@/utils/animation/aosZoomIn";

const SkillSection = () => {
  const skills = [
    {
      icon: RiReactjsLine,
      title: "React.js",
      skillLevel: "Expert",
      SkillAchieved: 90,
    },
    {
      icon: TbBrandNextjs,
      title: "Next.js",
      skillLevel: "Advanced",
      SkillAchieved: 85,
    },
    {
      icon: FaNodeJs,
      title: "Node.js",
      skillLevel: "Advanced",
      SkillAchieved: 85,
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      skillLevel: "Advanced",
      SkillAchieved: 80,
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      skillLevel: "Advanced",
      SkillAchieved: 85,
    },
    {
      icon: SiTailwindcss,
      title: "Tailwind CSS",
      skillLevel: "Expert",
      SkillAchieved: 89,
    },
    {
      icon: SiExpress,
      title: "Express.js",
      skillLevel: "Expert",
      SkillAchieved: 92,
    },
    {
      icon: FaGitAlt,
      title: "Git",
      skillLevel: "Expert",
      SkillAchieved: 96,
    },
    {
      icon: FaGithub,
      title: "GitHub",
      skillLevel: "Expert",
      SkillAchieved: 95,
    },
    {
      icon: TbApi,
      title: "REST API",
      skillLevel: "Expert",
      SkillAchieved: 91,
    },
    {
      icon: FaBootstrap,
      title: "BootStrap",
      skillLevel: "Expert",
      SkillAchieved: 98,
    },
    {
      icon: SiMui,
      title: "Material UI",
      skillLevel: "Expert",
      SkillAchieved: 94,
    },
    {
      icon: FaHtml5,
      title: "HTML & CSS",
      skillLevel: "Expert",
      SkillAchieved: 99,
    },
  ];

  const emailClients = [
    {
      name: "GMail",
      percentage: 100,
      icon: FaCheck,
    },

    {
      name: "Outlook",
      percentage: 98,
      icon: FaCheck,
    },

    {
      name: "Apple Mail",
      percentage: 100,
      icon: FaCheck,
    },

    {
      name: "Yahoo Mail",
      percentage: 97,
      icon: FaCheck,
    },

    {
      name: "Other Mails",
      percentage: 95,
      icon: FaCheck,
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      className={`mt-8 relative px-4 sm:px-6 md:px-8 bg-[#040404] py-4 sm:py-6 md:py-8 ${inter.className} rounded-xl`}
      id="skills"
    >
      {/* skills header */}
      <div>
        <button
          type="button"
          className="text-xs border-[1px] border-cyan-300 border-opacity-20 rounded-full px-3 py-[2px] flex items-left justify-center gap-[2px] text-cyan-200 text-opacity-70 cursor-default mb-2"
          aria-label="Button for about me"
          {...aosFadeUp}
        >
          <span>Technical skills</span>
        </button>
        <h2 className="text-3xl font-bold text-gray-300" {...aosFadeUp}>
          <span>My tech </span>
          <span className="text-cyan-400">stack</span>
        </h2>
        <p
          className="text-cyan-200 text-xs tracking-wide text-opacity-40 mt-1"
          {...aosFadeUp}
        >
          Technologies and tools I used to bring ideas to life.
        </p>
      </div>

      {/* skill list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
        {/* Left Section */}
        <div>
          {/* Skills with icons + percentages */}
          <div>
            <h2
              className="text-xs text-cyan-300 text-opacity-30 uppercase font-extralight"
              {...aosFadeUp}
            >
              Frontend & Backend
            </h2>
            <div className="tech-stack mt-4">
              {/* React.js */}
              {skills?.map(skill => (
                <div
                  key={skill.icon}
                  className="relative flex flex-col gap-1 items-center bg-[#0D1520] rounded-xl border-[1px] border-gray-200 border-opacity-10 py-3 px-1 "
                  {...aosZoomIn}
                >
                  <button
                    type="button"
                    className="cursor-text absolute left-1/2 -translate-x-1/2 top-[-10px] text-[10px] text-gray-500 bg-gray-900 border-[1px] border-gray-700 border-opacity-15 py-[1px] px-2 rounded-full"
                  >
                    {skill.SkillAchieved}%
                  </button>
                  <div className="flex items-center gap-1">
                    <skill.icon
                      size="24"
                      className="text-cyan-500 bg-gray-800 p-1 rounded-md"
                    />
                    <p className="text-cyan-200 text-opacity-30 text-xs">
                      {skill.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-[10px] tracking-wider px-2 py-[2px] rounded-full text-purple-400 bg-purple-500 bg-opacity-20 cursor-text"
                  >
                    {skill.skillLevel}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div>
          {/* Email client compatibility */}
          <div>
            <h2
              className="text-xs text-cyan-300 text-opacity-30 uppercase font-extralight"
              {...aosFadeUp}
            >
              Email client compatibility
            </h2>
            <div className="mt-4 email-client">
              {emailClients?.map(email => (
                <div
                  key={email.name}
                  className="relative flex flex-col items-center justify-center bg-[#0D1520] rounded-xl border-[1px] border-gray-200 border-opacity-10 p-2 "
                  {...aosZoomIn}
                >
                  <FaCheck size="24" className="text-green-800" />
                  <p
                    type="button"
                    className="text-[10px] tracking-wider text-center px-2 py-[2px] text-gray-600 mt-2"
                  >
                    {email.name}
                  </p>
                  <h3 className="text-gray-200 text-md font-semibold">
                    {email.percentage}%
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Currently leveling up section */}
          <div
            className="bg-[#0D1520] rounded-r-xl border-l-8 border-l-cyan-400 border-r-[1px] border-r-gray-700 border-t-gray-700 border-t-[1px] border-b-[1px] border-b-gray-700 p-5 mt-4"
            {...aosZoomIn}
          >
            {/* icon */}
            <div>
              <IoRocketOutline size="18" className="text-gray-300" />
            </div>

            {/* text + button */}
            <div>
              <p>
                <span className="text-cyan-400 text-xs">
                  Currently leveling up --{" "}
                </span>
                <span className="text-cyan-100 text-xs text-opacity-30">
                  exploring new tools to stay ahead
                </span>
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="text-cyan-400 text-xs border-[1px] border-cyan-500 border-opacity-20 px-2 py-[2px] rounded-full cursor-text"
                >
                  GraphQL
                </button>
                <button
                  type="button"
                  className="text-cyan-400 text-xs border-[1px] border-cyan-500 border-opacity-20 px-2 py-[2px] rounded-full cursor-text"
                >
                  Next.js 15
                </button>
                <button
                  type="button"
                  className="text-cyan-400 text-xs border-[1px] border-cyan-500 border-opacity-20 px-2 py-[2px] rounded-full cursor-text"
                >
                  AI Integration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
