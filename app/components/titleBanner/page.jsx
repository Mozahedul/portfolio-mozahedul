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
    "full stack web developer.",
    "MERN stack developer.",
    "web designer.",
    "blogger.",
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
      data-aos="fade-left"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      className={`lg:ml-40 ${inter.className}`}
    >
      <p className="font-semibold tracking-widest text-cyan-300">
        Hi, My name is
      </p>
      <h2 className="mt-1 md:mt-6 font-bold">
        <strong className="block text-3xl text-gray-300 md:text-5xl lg:text-6xl textClip">
          Mozahedul Islam.
        </strong>
        <strong className="mt-2 md:mt-3 block  text-2xl text-gray-500 md:text-3xl lg:text-5xl">
          <TypeWriter animatedText={animatedText} />
        </strong>
      </h2>
      <p className="text-md mt-6 font-normal text-gray-500 lg:w-1/2">
        As a full-stack developer, I specialize in MongoDB, Express.js, React,
        and Node.js, enabling me to create end-to-end web applications. I excel
        in crafting responsive front-end interfaces and robust back-end
        solutions. My skills encompass the entire web development process,
        making me a valuable asset for MERN stack projects.
      </p>
      <button
        type="button"
        onClick={handlePdf}
        className="btn mt-14 block animate-pulse font-normal"
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
