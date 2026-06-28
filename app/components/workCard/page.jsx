"use client";

import { FiExternalLink } from "react-icons/fi";
// import { GoFileDirectory } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const Card = ({
  title = "",
  description = "",
  anchor = "",
  github = "",
  language = [],
  image = "",
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-mirror="false"
      data-aos-once="true"
      data-aos-duration="1000"
      className="relative bg-gray-800 border-[1px] border-[#9bc2f518] group flex cursor-pointer flex-col justify-start rounded-xl transition-all duration-1000 transform hover:bg-cardHover"
    >
      <div className="relative w-full h-[300px]">
        <Image
          src={image}
          alt="Archive"
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover object-top rounded-t-xl"
        />
      </div>

      {/* Section under card image */}
      <div className="mx-4 mt-4 mb-6 flex flex-col justify-between h-full">
        <h2 className="text-md font-bold text-gray-300 leading-5 transition-all duration-500 group-hover:text-[#ffac53] rounded-md pb-2">
          {title}
        </h2>

        <p className="text-xs font-medium tracking-wide text-gray-400">
          {description}
        </p>

        <ul className="flex flex-wrap gap-1 font-semibold text-gray-200 border-b-[1px] border-b-gray-700 border-opacity-50 pb-3">
          {Array.isArray(language) &&
            language.length > 0 &&
            language.map(lang => (
              <li
                key={lang}
                className="whitespace-nowrap mt-2 rounded-md px-2 py-1 text-[10px] tracking-wide bg-gray-900 bg-opacity-80"
              >
                <a href="/">{lang}</a>
              </li>
            ))}
        </ul>

        <ul className="flex items-center justify-between gap-2 mt-3">
          <li>
            <Link
              href={anchor}
              target="_blank"
              rel="noreferer"
              title="Visit Live Website"
              aria-label="The button navigates to the project website"
              className="flex gap-1 items-center"
            >
              <FiExternalLink className="text-xl text-cyan-500 transition-all duration-500 hover:text-purple-500" />{" "}
              <span className="text-gray-300 text-xs font-semibold tracking-wide">
                View Project
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={github}
              target="_blank"
              rel="noreferer"
              title="GitHub Repository"
              aria-label="The button navigates to the GitHub"
              className="flex items-center gap-1 bg-gray-900 bg-opacity-70 py-1 px-2 rounded-[4px]"
            >
              <LuGithub className="text-xl text-purple-500 transition-all duration-500 hover:text-purple-500 hover:bg-gray-300" />
              <span className="text-xs text-gray-400 font-semibold">
                Source code
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
