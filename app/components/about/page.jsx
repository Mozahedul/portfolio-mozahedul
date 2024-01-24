"use client";

import { useEffect } from "react";
import { LuSun } from "react-icons/lu";
import AOS from "aos";
// import { inter } from "@/utils/google-fonts/fonts";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <button
        type="button"
        className="send-message textClip"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        About me
      </button>
      <h3 data-aos="zoom-in" data-aos-duration="500">
        <strong className="text-2xl md:text-3xl text-gray-300 capitalize">
          Transforming dreams into real project{" "}
          <LuSun className="inline text-3xl md:text-4xl text-[#ffac5e]" />
        </strong>
      </h3>
      <div className="mt-4 md:mt-8 font-medium leading-7 tracking-wide text-gray-400">
        <p
          className="mt-7 about-paragraph"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <span className="w-1 h-full bg-[#a36aff] rounded-full" />
          <span>
            I am a professional full-stack developer with a strong understanding
            of the MERN stack (MongoDB, Express, React, and Node.js) and I am
            able to use these technologies to build scalable and performant web
            applications.
          </span>
        </p>
        <p
          className="mt-7 about-paragraph"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <span className="w-1 h-full bg-[#a36aff] rounded-full" />
          <span>
            I am able to work effectively with other developers and
            stakeholders, and I am currently looking for a new opportunity where
            I can utilize my skills and experience.
          </span>
        </p>
        <p
          className="mt-7 about-paragraph"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <span className="w-1 h-full bg-[#a36aff] rounded-full" />
          <span>
            I am confident that I can be a valuable asset to any team. Here is
            the list of languages and technologies I have been working with
            recently.
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
