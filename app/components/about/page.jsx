"use client";

import { useEffect } from "react";
import AOS from "aos";
// import { inter } from "@/utils/google-fonts/fonts";
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
      <div className="mt-4 md:mt-8 font-medium leading-7 tracking-wide text-gray-400">
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
      </div>
    </div>
  );
};

export default AboutPage;
