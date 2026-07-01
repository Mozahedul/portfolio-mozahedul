import React from "react";
import { IoLayers } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import aosFadeUp from "@/utils/animation/aosFadeUp";

const Services = () => {
  return (
    <section className="my-4 sm:my-6 md:my-8 lg:my-12">
      {/* Service header */}
      <div className="border-b-[1px] border-gray-700 border-opacity-30 pb-6 px-4 sm:px-6 lg:px-8">
        <p
          {...aosFadeUp}
          className="text-xs flex gap-2 items-center uppercase"
          aria-label="Button for sending message"
        >
          <span className="w-8 h-[1px] bg-[#8B5CF6] inline-block" />
          <span className="text-[#8B5CF6] font-extralight tracking-wide leading-4 uppercase">
            What I offer
          </span>
        </p>
        <h2
          {...aosFadeUp}
          className="text-left text-2xl md:text-3xl lg:text-4xl font-bold leading-8 text-gray-200 flex items-center gap-2 mt-3"
        >
          <span>Services I</span>
          <span className="text-[#8B5CF6]"> provide</span>
        </h2>
        <p {...aosFadeUp} className="text-gray-400 text-sm mt-2 ">
          From full-stack web applications to pixel-perfect email templates —{" "}
          <br />
          here's exactly what you can hire me for.
        </p>
      </div>

      {/* Service body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 sm:mt-8 lg:mt-12">
        {/* Left column */}
        <div className="bg-[#0C0A14] py-4 px-4 sm:px-6 sm:py-6 lg:px-8 lg:py-10 border-t-2 border-purple-600">
          <p
            {...aosFadeUp}
            className="flex items-center gap-1 text-gray-600 text-sm tracking-wider"
          >
            <span className="w-2 h-[1px] bg-gray-600 inline-block" />
            <span>01</span>
          </p>
          <div
            {...aosFadeUp}
            className="flex items-end justify-between mt-4 md:mt-6"
          >
            <button
              type="button"
              className="cursor-text bg-purple-200 bg-opacity-20 p-3"
            >
              <IoLayers size="24" className="text-purple-400" />
            </button>
            <button
              type="button"
              className="text-xs font-extralight py-1 px-3 text-purple-300 text-opacity-50 bg-transparent border-[1px] border-purple-200 border-opacity-20 uppercase tracking-wider"
            >
              Most requested
            </button>
          </div>
          <h2
            {...aosFadeUp}
            className="text-gray-200 font-bold text-xl md:text-2xl tracking-wider leading-6 capitalize mt-4 sm:mt-6"
          >
            Full stack web development
          </h2>
          <p {...aosFadeUp} className="text-gray-300 text-sm mt-4">
            End-to-end MERN stack applications — from database design to
            deployment. I handle the entire build so you don't need to
            coordinate multiple developers.
          </p>

          {/* Service list */}
          <div className="mt-6 grid gap-2 border-b-[1px] border-b-gray-600 border-opacity-30 pb-6">
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Custom React frontend with responsive design
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Node.js + Express backend with REST API
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                MongoDB database design and integration
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Authentication and user management
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Deployment and basic post-launch support
              </span>
            </div>
          </div>

          {/* Service list bottom */}
          <div className="flex items-center justify-between mt-4">
            <p {...aosFadeUp}>
              <span className="text-xs font-extralight text-gray-400 text-opacity-60">
                Starting at{" "}
              </span>{" "}
              <strong className="text-lg font-bold text-gray-300">$800</strong>
            </p>
            <button
              {...aosFadeUp}
              type="button"
              className="text-xs font-semibold tracking-wide text-gray-300 py-2 px-4 bg-[#8B5CF6]"
            >
              Get a quote
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="py-4 px-4 sm:px-6 sm:py-6 lg:px-8 lg:py-10">
          <p
            {...aosFadeUp}
            className="flex items-center gap-1 text-gray-600 text-sm tracking-wider"
          >
            <span className="w-2 h-[1px] bg-gray-600 inline-block" />
            <span>02</span>
          </p>
          <div
            {...aosFadeUp}
            className="flex items-end justify-between mt-4 md:mt-6"
          >
            <button
              type="button"
              className="cursor-text bg-purple-200 bg-opacity-20 p-3"
            >
              <IoLayers size="24" className="text-purple-400" />
            </button>
          </div>
          <h2
            {...aosFadeUp}
            className="text-gray-200 font-bold text-xl md:text-2xl tracking-wider leading-6 capitalize mt-4 sm:mt-6"
          >
            Email Template Development
          </h2>
          <p {...aosFadeUp} className="text-gray-300 text-sm mt-4">
            Pixel-perfect, responsive HTML email templates that render
            flawlessly across every major email client — built for marketing
            teams and agencies.
          </p>

          {/* Service list */}
          <div className="mt-6 grid gap-2 border-b-[1px] border-b-gray-600 border-opacity-30 pb-6">
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Custom MJML / HTML email coding
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Tested across Gmail, Outlook, Apple Mai
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Klaviyo and Mailchimp integration
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Mobile-responsive layouts
              </span>
            </div>
            <div {...aosFadeUp} className="flex items-center gap-2">
              <button
                type="button"
                className="border-[1px] border-gray-600 border-opacity-40 p-[2px]"
              >
                <FaCheck className="text-purple-700" size="12" />
              </button>
              <span className="text-sm text-gray-600 tracking-wide">
                Dark mode compatibility
              </span>
            </div>
          </div>

          {/* Service list bottom */}
          <div className="flex items-center justify-between mt-4">
            <p {...aosFadeUp}>
              <span className="text-xs font-extralight text-gray-400 text-opacity-60">
                Starting at{" "}
              </span>{" "}
              <strong className="text-lg font-bold text-gray-300">$120</strong>
              <span className="text-xs font-extralight text-gray-400 text-opacity-60">
                /template
              </span>
            </p>
            <button
              {...aosFadeUp}
              type="button"
              className="text-xs font-semibold tracking-wide text-gray-300 py-2 px-4 bg-transparent border-[1px] border-gray-700 border-opacity-30"
            >
              Get a quote
            </button>
          </div>
        </div>
      </div>

      {/* Service bottom */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <div {...aosFadeUp} className="p-6">
          <h1 className="text-3xl text-gray-600 text-opacity-40 font-extrabold">
            01
          </h1>
          <h3 className="text-gray-300 text-sm mt-2 font-bold tracking-wide">
            Discovery call
          </h3>
          <p className="text-xs text-gray-400 text-opacity-40 mt-1">
            We discuss your project, goals, and timeline.
          </p>
        </div>
        <div
          {...aosFadeUp}
          className="border-l-2 border-l-gray-600 border-opacity-40 p-6"
        >
          <h1 className="text-3xl text-gray-600 text-opacity-40 font-extrabold">
            02
          </h1>
          <h3 className="text-gray-300 text-sm mt-2 font-bold tracking-wide">
            Proposal & quote
          </h3>
          <p className="text-xs text-gray-400 text-opacity-40 mt-1">
            You receive a clear scope, timeline, and price.
          </p>
        </div>
        <div
          {...aosFadeUp}
          className="border-l-2 border-l-gray-600 border-opacity-40 p-6"
        >
          <h1 className="text-3xl text-gray-600 text-opacity-40 font-extrabold">
            03
          </h1>
          <h3 className="text-gray-300 text-sm mt-2 font-bold tracking-wide">
            Build & updates
          </h3>
          <p className="text-xs text-gray-400 text-opacity-40 mt-1">
            Regular progress check-ins as I build your project.
          </p>
        </div>
        <div
          {...aosFadeUp}
          className="border-l-2 border-l-gray-600 border-opacity-40 p-6"
        >
          <h1 className="text-3xl text-gray-600 text-opacity-40 font-extrabold">
            04
          </h1>
          <h3 className="text-gray-300 text-sm mt-2 font-bold tracking-wide">
            Delivery & support
          </h3>
          <p className="text-xs text-gray-400 text-opacity-40 mt-1">
            Final handoff plus post-launch support included.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
