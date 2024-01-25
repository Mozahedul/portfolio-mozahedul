"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";

import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="lg:mx-8 xl:mx-36 my-16 md:my-28" id="blog">
      {/* Blog Header */}
      <div data-aos="flip-up" data-aos-duration="500">
        <h2 className="text-cyan-400 font-bold text-2xl md:text-3xl text-center flex justify-center items-center">
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
          <span
            className="text-gray-200"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            Latest Blog
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
        <p className="text-md mb-1 mt-2 text-gray-300 font-medium flex items-center justify-center">
          <span
            className="text-sm tracking-wide"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            Visit my blog and keep your feedback
          </span>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8">
        {/* Section 1 */}
        <div
          className="bg-[#0a0919] p-5 grid rounded-2xl border-[2px] border-[#a36aff10]"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <p
            className="text-xs text-gray-400"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Full-stack / November 28, 2021
          </p>
          <h2
            className="text-lg font-semibold tracking-wide text-gray-200 leading-6 mb-5 mt-1"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Stripe card payment setup with MERN stack app
          </h2>
          <Link
            href="https://procodelearn.blogspot.com/2021/11/stripe-card-payment-setup-with-mern.html"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
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
            className="text-sm mt-6 text-gray-200 leading-5 tracking-wide"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Create a project folder as for example stripe-card-payment and then
            create a folder named backend inside the project directory...
          </p>
          <Link
            href="https://procodelearn.blogspot.com/2021/11/stripe-card-payment-setup-with-mern.html"
            target="_blank"
            rel="noreferrer"
          >
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              type="button"
              className="bg-card text-xs transition-all duration-500 hover:bg-gray-200 hover:text-card hover:bg-opacity-400 text-gray-300 leading-5 py-1 px-3 mt-4 rounded-full tracking-wide"
            >
              View Details
            </button>
          </Link>
        </div>

        {/* Section 2 */}
        <div
          className="bg-[#0a0919] p-5 grid rounded-2xl border-[2px] border-[#a36aff10]"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <p
            className="text-xs text-gray-400"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Language / June 08, 2022
          </p>
          <h2
            className="text-lg text-gray-200 leading-6 mb-5 mt-1 font-semibold tracking-wide"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            call(), bind(), apply() method with this keyword in different object
          </h2>
          <Link
            href="https://procodelearn.blogspot.com/2022/06/const-mainobj-name-mozahedul-age-23.html"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
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
            className="text-sm mt-6 text-gray-200 leading-5 tracking-wide"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            methods are used to refer "this" keyword to any object. With these
            methods, an object can use the method belonging to another object...
          </p>
          <Link
            href="https://procodelearn.blogspot.com/2022/06/const-mainobj-name-mozahedul-age-23.html"
            target="_blank"
            rel="noreferrer"
          >
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              type="button"
              className="bg-card text-xs transition-all duration-500 hover:bg-gray-200 hover:text-card hover:bg-opacity-400 text-gray-300 leading-5 py-1 px-3 mt-4 rounded-full tracking-wide"
            >
              View Details
            </button>
          </Link>
        </div>

        {/* Section 3 */}
        <div
          className="bg-[#0a0919] p-5 grid rounded-2xl border-[2px] border-[#a36aff10]"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <p
            className="text-xs text-gray-400"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Language / June 20, 2022
          </p>
          <h2
            className="text-lg font-semibold tracking-wide text-gray-200 leading-6 mb-5 mt-1"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Difference between autofit and autofill
          </h2>
          <Link
            href="https://procodelearn.blogspot.com/2022/06/css-grid-difference-between-autofit-and.html?m=1"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/css-grid.png"
              width={600}
              height={400}
              alt="stripe payment"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
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
            className="text-sm mt-6 text-gray-200 leading-5 tracking-wide"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            With autofit when there are not enough grid items to fill the number
            of tracks created, the created empty tracks are collapsed.
          </p>
          <Link
            href="https://procodelearn.blogspot.com/2022/06/css-grid-difference-between-autofit-and.html?m=1"
            target="_blank"
            rel="noreferrer"
          >
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              type="button"
              className="bg-card text-xs transition-all duration-500 hover:bg-gray-200 hover:text-card hover:bg-opacity-400 text-gray-300 leading-5 py-1 px-3 mt-4 rounded-full tracking-wide"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
      <div
        className="flex justify-center"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <Link
          href="https://procodelearn.blogspot.com"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="mt-10 py-2 px-4 text-sm transition-all duration-500 rounded-full hover:bg-[#1e195e] bg-[#0a0919] text-gray-300 border-[2px] border-[#a36aff10] hover:text-[#ffac5e]"
          >
            View Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
