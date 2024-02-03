"use client";

import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import Link from "next/link";
import { inter } from "../../../utils/google-fonts/fonts";
import TypeWriter from "../cssFeatures/typingAnimation/page";
import "aos/dist/aos.css";

const TitleHero = () => {
  const animatedText = [
    "Full-stack Web Developer.",
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
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
      className={`flex flex-col justify-center ${inter.className}`}
    >
      <p className="text-gray-300 text-lg mb-1 font-medium">
        Hello, My Name is
      </p>
      <h2 className="mt-1">
        <strong className="font-bold text-left text-3xl md:text-4xl lg:text-5xl text-gray-300 textClip">
          Mozahedul Islam.
        </strong>
      </h2>
      <div className="mt-2 md:mt-3 text-left block text-gray-300">
        <TypeWriter animatedText={animatedText} />
      </div>
      <p className="text-sm mt-3 md:mt-6 font-normal text-gray-400 text-left mr-2">
        As a full-stack developer, I specialize in MongoDB, Express.js, React,
        and Node.js, enabling me to create end-to-end web applications.
      </p>
      <div className="mt-6 md:mt-12 lg:mt-16 xl:mt-20">
        <Link
          href="https://drive.google.com/file/d/1KLtQYOs3X0GXVvFGWnh2M0pjueVgezTE/preview"
          target="_blank"
          rel="noreferrer"
          aria-label="The button navigates to Resume PDF file"
        >
          <button
            type="button"
            className="hire-btn py-3 px-4 flex items-center"
          >
            <FaEye className="inline text-lg mr-2" />
            <span>View My Resume</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TitleHero;
