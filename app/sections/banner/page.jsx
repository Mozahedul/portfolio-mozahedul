"use client";

import Image from "next/image";
import { IoBriefcaseOutline, IoPeople } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { FaLocationDot, FaCode } from "react-icons/fa6";
import TitleHero from "@/app/components/titleBanner/page";
import aosFadeUp from "@/utils/animation/aosFadeUp";
// import BannerDetails from "../bannerDetails/page";

const Hero = () => {
  return (
    <section className="xl:max-w-[1200px] mt-24 md:mt-32 grid sm:grid-cols-2 xl:grid-cols-[2fr_2fr_1fr] items-start mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
      {/* COLUMN 1 */}
      <div>
        <TitleHero />
      </div>
      {/* COLUMN 2 */}
      <div className="justify-self-start mt-10 sm:mt-0" {...aosFadeUp}>
        <Image
          loading="lazy"
          src="/profile.png"
          width={680}
          height={680}
          alt="Profile identity"
          className="banner-image"
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: "1/1",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* COLUMN 3 */}
      <div className="flex flex-col items-start border-slate-400 border-opacity-10 border-2 rounded-xl p-6 bg-[#080D15] sm:mt-6 xl:mt-0">
        {/* PING BUTTON = Available for Freelance */}
        <div className="flex items-center gap-2" {...aosFadeUp}>
          <span className="flex size-3 relative">
            <span className="animate-ping inline-flex absolute rounded-full w-full h-full bg-green-400 opacity-75" />
            <span className="bg-green-500 inline-flex size-3 relative rounded-full" />
          </span>
          <p className="text-green-500 text-sm font-medium">
            Available for Freelance
          </p>
        </div>
        {/* SUBTITLE */}
        <p
          className="text-gray-400 text-xs mt-1 pb-4 border-b-2 border-gray-900 block w-full"
          {...aosFadeUp}
        >
          Open to new opportunities
        </p>

        {/* MAIN BODY OF EXPERIENCE */}
        <div className="mt-4 flex flex-col gap-6 w-full">
          {/*  5+ YEARS EXPERIENCE */}
          <div className="flex gap-3 items-center" {...aosFadeUp}>
            <button
              type="button"
              className="bg-gray-900 border-[1px] border-slate-800 text-purple-400 w-10 h-10 text-center inline-block rounded-md"
            >
              <IoBriefcaseOutline className="mx-auto" />
            </button>
            <div>
              <h2 className="text-gray-200 text-lg font-bold mb-[-2px]">5+</h2>
              <p className="text-gray-500 text-xs">Years Experience</p>
            </div>
          </div>

          {/* 60+ EMAIL TEMPLATES */}
          <div className="flex gap-3 items-center" {...aosFadeUp}>
            <button
              type="button"
              className="bg-gray-900 border-[1px] border-slate-800 text-lg text-purple-400 w-10 h-10 text-center inline-block rounded-md"
            >
              <MdOutlineMail className="mx-auto" />
            </button>
            <div>
              <h2 className="text-gray-200 text-lg font-bold mb-[-2px]">60+</h2>
              <p className="text-gray-500 text-xs">Email Templates</p>
            </div>
          </div>

          {/* 70+ PROJECTS COMPLETED */}
          <div className="flex gap-3 items-center" {...aosFadeUp}>
            <button
              type="button"
              className="bg-gray-900 border-[1px] border-slate-800 text-purple-400 w-10 h-10 text-center inline-block rounded-md"
            >
              <FaCode className="mx-auto" />
            </button>
            <div>
              <h2 className="text-gray-200 text-lg font-bold mb-[-2px]">70+</h2>
              <p className="text-gray-500 text-xs">Projects Completed</p>
            </div>
          </div>

          {/* Client satisfaction */}
          <div
            className="flex gap-3 items-center border-b-2 border-gray-900 w-full pb-4"
            {...aosFadeUp}
          >
            <button
              type="button"
              className="bg-gray-900 border-[1px] border-slate-800 text-purple-400 w-10 h-10 text-center inline-block rounded-md"
            >
              <IoPeople className="mx-auto" />
            </button>
            <div>
              <h2 className="text-gray-200 text-lg font-bold mb-[-2px]">
                100%
              </h2>
              <p className="text-gray-500 text-xs">Client Satisfaction</p>
            </div>
          </div>

          {/* BASED IN BANGLADESH */}
          <div className="flex gap-3 items-center" {...aosFadeUp}>
            <button
              type="button"
              className="bg-gray-900 border-[1px] border-slate-800 text-purple-400 w-10 h-10 text-center inline-block rounded-xl"
            >
              <FaLocationDot className="mx-auto" />
            </button>
            <div>
              <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
                Based in Bangladesh
              </h2>
              <p className="text-gray-500 text-xs">Available worldwide</p>
            </div>
          </div>

          {/* RESPONSE TIME */}
          <div className="flex gap-3 items-center" {...aosFadeUp}>
            <button
              type="button"
              className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-10 h-10 text-center inline-block rounded-xl"
            >
              <GiElectric className="mx-auto" />
            </button>
            <div>
              <h2 className="text-gray-200 text-sm font-bold mb-[-2px]">
                Response Time
              </h2>
              <p className="text-gray-500 text-xs">Within 24 Hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* <BannerDetails /> */}
    </section>
  );
};

export default Hero;
