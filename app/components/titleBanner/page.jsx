"use client";

import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
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
    // For listening audio sound when user click on the menu button
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();

    setViewResume(true);
    document.body.classList.add("body-fixed");
  };

  // handleing pdf close
  const handleClosePdf = () => {
    const audio = new Audio("/ping.mp3");
    audio.play();
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
        <button
          type="button"
          onClick={handlePdf}
          className="hire-btn py-3 px-4 flex items-center"
        >
          <FaEye className="inline text-lg mr-2" />
          <span>View My Resume</span>
        </button>
      </div>
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
