"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import skills from "@/utils/technologies/languages";
import { inter } from "@/utils/google-fonts/fonts";
import SocialMedia from "../media/page";

const SkillSection = () => {
  let scrollPosition = 0;

  useEffect(() => {
    const buttonLeft = document.getElementById("leftBtn");
    buttonLeft.setAttribute("disabled", "");
  }, []);

  const forwardHandler = () => {
    const slider = document.getElementById("langs");
    const buttonRight = document.getElementById("rightBtn");
    const buttonLeft = document.getElementById("leftBtn");
    const singleElmWidth = slider.scrollWidth / skills.length;
    scrollPosition += singleElmWidth;
    const lastScrollPosition =
      slider.scrollWidth - (scrollPosition + slider.offsetWidth);

    console.log(lastScrollPosition);

    if (lastScrollPosition < singleElmWidth) {
      scrollPosition += lastScrollPosition;
      buttonRight.setAttribute("disabled", "");
    }

    if (scrollPosition >= singleElmWidth) {
      buttonLeft.removeAttribute("disabled");
    }

    slider?.scrollTo({
      top: 0,
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const backwardHandler = () => {
    const slider = document.getElementById("langs");
    const buttonLeft = document.getElementById("leftBtn");
    const buttonRight = document.getElementById("rightBtn");
    const singleElmWidth = slider.scrollWidth / skills.length;

    scrollPosition -= singleElmWidth;

    if (scrollPosition < singleElmWidth) {
      scrollPosition = 0;
      buttonLeft.setAttribute("disabled", "");
    }

    if (scrollPosition + slider.offsetWidth < slider.scrollWidth) {
      buttonRight.removeAttribute("disabled");
    }

    slider?.scrollTo({
      top: 0,
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      className={`mt-24 relative px-4 bg-[#0c1027] py-10 md:py-12 lg:py-16 xl:pt-32 xl:pb-20 md:mt-48 lg:px-24 xl:px-36 ${inter.className}`}
      id="skills"
    >
      <SocialMedia />
      <div data-aos="fade-up" data-aos-duration="500">
        <h2 className="text-center mt-6 flex items-center justify-center text-2xl md:text-3xl font-bold leading-8 text-gray-200">
          <p className="flex items-center mr-3">
            <span
              className="w-1 h-1 bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
            />
            <span
              className="w-[5px] h-[5px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
            />
            <span
              className="w-[6px] h-[6px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            />
            <span
              className="w-[7px] h-[7px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
            />
            <span
              className="w-[8px] h-[8px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            />
            <span
              className="w-[9px] h-[10px] bg-gray-300 rounded-full"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            />
          </p>
          <span data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700">
            My Skills
          </span>
          <p className="flex items-center ml-3">
            <span
              className="w-[9px] h-[10px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            />
            <span
              className="w-[8px] h-[8px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            />
            <span
              className="w-[7px] h-[7px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
            />
            <span
              className="w-[6px] h-[6px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            />
            <span
              className="w-[5px] h-[5px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
            />
            <span
              className="w-1 h-1 bg-gray-300 rounded-full"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
            />
          </p>
        </h2>
        <p className="text-center text-sm text-gray-300 mt-3 tracking-wide leading-6 md:w-[450px] md:mx-auto">
          The languages & frameworks encourage me to code for my client to
          fulfill their demands and make some amazing projects.
        </p>
      </div>
      <div
        id="langs"
        className="mt-12 skill-one-row pr-6"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {skills.map(skill => (
          <div
            key={skill.title}
            className="flex flex-col items-center bg-[#060813] border-[1px] border-[#9bc2f518] flex-1 text-gray-400 p-5 rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <skill.icon className="text-5xl" />
            <strong className="whitespace-nowrap tracking-wide text-sm mt-3">
              {skill.title}
            </strong>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          id="leftBtn"
          onClick={backwardHandler}
          type="button"
          className="text-xl disabled:bg-[#06081342] disabled:text-gray-500 disabled:cursor-not-allowed text-gray-200 rounded-md p-2 mr-[2px] bg-[#060813] border-[1px] border-[#9bc2f518]"
        >
          <IoIosArrowBack />
        </button>
        <button
          id="rightBtn"
          onClick={forwardHandler}
          type="button"
          className="text-xl disabled:bg-[#06081342] disabled:text-gray-500 disabled:cursor-not-allowed text-gray-200 rounded-md p-2 ml-[2px] bg-[#060813] border-[1px] border-[#9bc2f518]"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default SkillSection;
