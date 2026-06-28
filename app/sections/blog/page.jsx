"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";

import "aos/dist/aos.css";
// import { GoDotFill } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { IoMdArrowRoundForward } from "react-icons/io";
import aosFadeUp from "@/utils/animation/aosFadeUp";
import aosZoomIn from "@/utils/animation/aosZoomIn";

const Blog = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="px-4 sm:px-6 my-16" id="blog">
      {/* Blog Header */}
      <div {...aosFadeUp}>
        <p className="text-gray-300 mb-4 mx-auto text-center">
          <span className="font-extralight text-xs px-6 py-2 rounded-full uppercase border-[1px] border-purple-900 border-opacity-30 tracking-wider">
            My blog
          </span>
        </p>
        <h2 className="text-gray-200 text-2xl md:text-3xl text-center text-shadow-lg flex justify-center font-extrabold items-center capitalize">
          <span>Latest articles</span>
          <span className="ml-2 text-cyan-500">&amp; insights</span>
        </h2>
        <p className="text-md mb-1 mt-2 text-gray-300 font-medium flex items-center justify-center">
          <span className="text-sm tracking-wide text-center" {...aosZoomIn}>
            Thoughts, tutorials, and deep dives on web development,
            <br /> email design, and building digital products.
          </span>
        </p>
      </div>

      {/* Blog cards */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8">
        {/* Column 1 */}
        <div
          className="bg-[#0a0919] p-5 grid rounded-2xl border-[2px] border-[#a36aff10]"
          {...aosFadeUp}
        >
          {/* Three dots = macbook like */}
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>

          <Link
            href="https://procodelearn.blogspot.com/2021/11/stripe-card-payment-setup-with-mern.html"
            target="_blank"
            rel="noreferrer"
            aria-label="The button navigates to the blog website"
          >
            <Image
              loading="lazy"
              {...aosZoomIn}
              src="/stripe-payment.png"
              width={600}
              height={400}
              alt="stripe payment"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "640",
                maxHeight: "400",
                // objectFit: "contain",
                // objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>

          <p
            className="flex items-center gap-1 text-xs text-gray-400 mt-1"
            {...aosZoomIn}
          >
            <FaRegCalendarAlt />
            <span className="text-gray-500">November 28, 2021</span>
            <LuDot size="32" />
            <span className="text-gray-500">6 min read</span>
          </p>
          <h2
            className="text-lg font-semibold tracking-wide text-gray-300 leading-6 mb-2"
            {...aosZoomIn}
          >
            Stripe card payment setup with MERN stack app
          </h2>
          <p
            className="text-sm text-gray-500 leading-5 tracking-wide"
            {...aosZoomIn}
          >
            Create a project folder as for example stripe-card-payment and then
            create a folder named backend inside the project directory...
          </p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-[10px] tracking-wide text-gray-400 border-[1px] border-gray-700 border-opacity-50 px-3 py-1 rounded-md cursor-text"
              >
                MERN
              </button>
              <button
                type="button"
                className="text-[10px] tracking-wide text-gray-400 border-[1px] border-gray-700 border-opacity-50 px-3 py-1 rounded-md cursor-text"
              >
                Stripe Payment Gateway
              </button>
            </div>
            <Link
              href="https://procodelearn.blogspot.com/2021/11/stripe-card-payment-setup-with-mern.html"
              target="_blank"
              rel="noreferrer"
              aria-label="The button navigates to the single blog post details"
              className="bg-purple-500 text-lg transition-all duration-500 hover:bg-gray-200 hover:text-card text-gray-300 leading-5 p-2 rounded-full tracking-wide"
            >
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div
          className="bg-[#0a0919] p-5 grid rounded-2xl border-[2px] border-[#a36aff10]"
          {...aosFadeUp}
        >
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>

          <Link
            href="https://procodelearn.blogspot.com/2022/06/const-mainobj-name-mozahedul-age-23.html"
            target="_blank"
            rel="noreferrer"
            aria-label="The button navigates to the single blog post details"
          >
            <Image
              loading="lazy"
              {...aosZoomIn}
              src="/call-bind-apply.png"
              width={600}
              height={400}
              alt="Call, bind, and apply method"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "600",
                maxHeight: "400",
                // objectFit: "contain",
                // objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>

          <p
            className="flex items-center gap-1 text-xs text-gray-400 mt-1"
            {...aosZoomIn}
          >
            <FaRegCalendarAlt />
            <span className="text-gray-500">June 08, 2022</span>
            <LuDot size="32" />
            <span className="text-gray-500">6 min read</span>
          </p>
          <h2
            className="text-lg font-semibold tracking-wide text-gray-300 leading-6 mb-2"
            {...aosZoomIn}
          >
            call(), bind(), apply() method with this keyword in different object
          </h2>
          <p
            className="text-sm text-gray-500 leading-5 tracking-wide"
            {...aosZoomIn}
          >
            methods are used to refer "this" keyword to any object. With these
            methods, an object can use the method belonging to another object...
          </p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-[10px] tracking-wide text-gray-400 border-[1px] border-gray-700 border-opacity-50 px-3 py-1 rounded-md cursor-text"
              >
                MERN
              </button>
              <button
                type="button"
                className="text-[10px] tracking-wide text-gray-400 border-[1px] border-gray-700 border-opacity-50 px-3 py-1 rounded-md cursor-text"
              >
                Stripe Payment Gateway
              </button>
            </div>
            <Link
              href="https://procodelearn.blogspot.com/2022/06/const-mainobj-name-mozahedul-age-23.html"
              target="_blank"
              rel="noreferrer"
              aria-label="The button navigates to the single blog post details"
              className="bg-purple-500 text-lg transition-all duration-500 hover:bg-gray-200 hover:text-card text-gray-300 leading-5 p-2 rounded-full tracking-wide"
            >
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>

        {/* Column 3 */}
        <div
          className="bg-[#0a0919] p-5 grid rounded-2xl border-[2px] border-[#a36aff10]"
          {...aosFadeUp}
        >
          {/* Three dots = macbook like */}
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>

          <Link
            href="https://procodelearn.blogspot.com/2022/06/css-grid-difference-between-autofit-and.html?m=1"
            target="_blank"
            rel="noreferrer"
            aria-label="The button navigates to the single blog post details"
          >
            <Image
              loading="lazy"
              {...aosZoomIn}
              src="/css-grid.png"
              width={600}
              height={400}
              alt="stripe payment"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "600",
                maxHeight: "400",
                // objectFit: "contain",
                // objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>
          <p
            className="flex items-center gap-1 text-xs text-gray-400 mt-1"
            {...aosZoomIn}
          >
            <FaRegCalendarAlt />
            <span className="text-gray-500">June 20, 2022</span>
            <LuDot size="32" />
            <span className="text-gray-500">6 min read</span>
          </p>
          <h2
            className="text-lg font-semibold tracking-wide text-gray-300 leading-6 mb-2"
            {...aosZoomIn}
          >
            Difference between autofit and autofill
          </h2>
          <p
            className="text-sm text-gray-500 leading-5 tracking-wide"
            {...aosZoomIn}
          >
            With autofit when there are not enough grid items to fill the number
            of tracks created, the created empty tracks are collapsed.
          </p>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-[10px] tracking-wide text-gray-400 border-[1px] border-gray-700 border-opacity-50 px-3 py-1 rounded-md cursor-text"
              >
                MERN
              </button>
              <button
                type="button"
                className="text-[10px] tracking-wide text-gray-400 border-[1px] border-gray-700 border-opacity-50 px-3 py-1 rounded-md cursor-text"
              >
                Stripe Payment Gateway
              </button>
            </div>
            <Link
              href="https://procodelearn.blogspot.com/2022/06/css-grid-difference-between-autofit-and.html?m=1"
              target="_blank"
              rel="noreferrer"
              aria-label="The button navigates to the single blog post details"
              className="bg-purple-500 text-lg transition-all duration-500 hover:bg-gray-200 hover:text-card text-gray-300 leading-5 p-2 rounded-full tracking-wide"
            >
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>

      {/* View blog button */}
      <div className="flex justify-center" {...aosZoomIn}>
        <Link
          href="https://procodelearn.blogspot.com"
          target="_blank"
          rel="noreferrer"
          aria-label="The button navigates to the single blog post details"
          className="group relative mt-10 py-1 px-3 text-sm font-medium transition-all duration-500 bg-[#0a0919] text-gray-300 hover:text-purple-500 capitalize"
        >
          <span className="w-2 h-2 inline-block border-l-2 border-t-2 border-gray-500 absolute left-0 top-0 group-hover:border-purple-500" />
          <span className="w-2 h-2 inline-block border-r-2 border-t-2 border-gray-500 absolute right-0 top-0 group-hover:border-purple-500" />
          View all blog
          <span className="w-2 h-2 inline-block border-l-2 border-b-2 border-gray-500 absolute left-0 bottom-0 group-hover:border-purple-500" />
          <span className="w-2 h-2 inline-block border-r-2 border-b-2 border-gray-500 absolute right-0 bottom-0 group-hover:border-purple-500" />
        </Link>
      </div>
    </section>
  );
};

export default Blog;
