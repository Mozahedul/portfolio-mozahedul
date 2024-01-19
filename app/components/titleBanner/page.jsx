"use client";

import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import AOS from "aos";
import { inter } from "../../../utils/google-fonts/fonts";
import TypeWriter from "../cssFeatures/typingAnimation/page";
import "aos/dist/aos.css";

const TitleHero = () => {
  const [viewResume, setViewResume] = useState(false);

  const animatedText = [
    "Full-stack Web Developer.",
    "MERN Stack Developer.",
    "Web Designer.",
    "Web Developer.",
    "Programmer.",
    "Blogger.",
  ];

  // Pdf container show and hide controller
  const handlePdf = () => {
    setViewResume(true);
    document.body.classList.add("body-fixed");
  };

  // handleing pdf close
  const handleClosePdf = () => {
    setViewResume(false);
    document.body.classList.remove("body-fixed");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
      className={`grid justify-center ${inter.className}`}
    >
      <h2 className="mt-1 md:mt-2 font-bold">
        <strong className="block text-center text-3xl text-gray-300 sm:hidden textClip">
          Hey, It's <br /> Mozahedul Islam.
        </strong>
        <strong className="hidden sm:block text-center text-3xl sm:text-3xl text-gray-300 md:text-5xl textClip">
          Hey, It's Mozahedul Islam.
        </strong>
        <div className="mt-2 md:mt-3 text-center block text-2xl text-gray-500 md:text-3xl lg:text-4xl">
          <TypeWriter animatedText={animatedText} />
        </div>
      </h2>
      <p className="text-sm mt-6 font-normal text-gray-400 text-center sm:mx-auto sm:w-3/4 md:w-3/5">
        As a full-stack developer, I specialize in MongoDB, Express.js, React,
        and Node.js, enabling me to create end-to-end web applications.
      </p>
      <button
        type="button"
        onClick={handlePdf}
        className="btn mt-10 animate-pulse font-normal w-40 mx-auto"
      >
        View My Resume
      </button>
      {viewResume && (
        <div className="fixed left-0 right-0 top-0 bottom-0 z-50 p-4">
          <button
            type="button"
            onClick={handleClosePdf}
            className="absolute left-8 top-6 text-red-600 transition-all duration-500 hover:text-red-400 md:left-20 md:top-7"
            title="Close PDF"
          >
            <AiFillCloseCircle className="text-5xl" />
          </button>
          <iframe
            title="View My Resume"
            src="https://drive.google.com/file/d/1KLtQYOs3X0GXVvFGWnh2M0pjueVgezTE/preview"
            width="100%"
            height="100%"
            allow="autoplay"
          />
        </div>
      )}
    </div>
  );
};

export default TitleHero;
