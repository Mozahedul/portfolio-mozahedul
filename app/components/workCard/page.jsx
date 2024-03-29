"use client";

import { FiExternalLink } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({
  title = "",
  description = "",
  anchor = "",
  github = "",
  language = [],
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="bg-[#060813] border-[2px] border-[#9bc2f518] group flex cursor-pointer flex-col justify-between rounded-xl p-6 transition-all duration-1000 transform hover:bg-cardHover"
    >
      <div className="mb-4 flex items-center justify-between">
        <GoFileDirectory className="text-4xl text-[#ffac53]" />
        <ul className="flex">
          <li className="mr-2">
            <Link
              href={github}
              target="_blank"
              rel="noreferer"
              title="GitHub Repository"
              aria-label="The button navigates to the GitHub"
            >
              <LuGithub className="ml-2 text-xl text-gray-400 transition-all duration-500 hover:text-[#ffac53]" />
            </Link>
          </li>
          <li>
            <Link
              href={anchor}
              target="_blank"
              rel="noreferer"
              title="Visit Website"
              aria-label="The button navigates to the project website"
            >
              <FiExternalLink className="text-xl text-gray-400 transition-all duration-500 hover:text-[#ffac53]" />
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="text-lg font-semibold text-gray-300 transition-all duration-500 group-hover:text-[#ffac53]">
        {title}
      </h2>
      <p className="mt-4 text-sm font-medium tracking-wide text-gray-400">
        {description}
      </p>
      <ul className="mt-5 flex flex-wrap font-semibold text-gray-200">
        {Array.isArray(language) &&
          language.length > 0 &&
          language.map(lang => (
            <li
              key={lang}
              className="mr-1 mt-1 whitespace-nowrap rounded-full  px-2 py-1"
              style={{ fontSize: "11px", backgroundColor: "rgba(9,25,47)" }}
            >
              <a href="/">{lang}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Card;
