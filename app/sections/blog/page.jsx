"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="mx-36 my-16 md:my-28">
      {/* Blog Header */}
      <div className="text-center">
        <p className="text-md text-gray-300 font-medium"> - From my blog - </p>
        <h2 className="text-cyan-400 font-bold text-2xl md:text-3xl">
          <span className="textClip">
            05. Visit my blog and keep <br /> your feedback
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mt-8">
        {/* Section 1 */}
        <div className="bg-[#0a0919] p-5 grid grid-cols-1 rounded-lg">
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <p className="text-xs text-gray-400">
            Full-stack / November 28, 2021
          </p>
          <h2 className="text-lg font-medium text-gray-200 leading-6 mb-5 mt-1">
            Stripe card payment setup with MERN stack app
          </h2>
          <Link
            href="https://procodelearn.blogspot.com/2021/11/stripe-card-payment-setup-with-mern.html"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/stripe-payment.png"
              width={600}
              height={400}
              alt="stripe payment"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "640",
                maxHeight: "400",
                objectFit: "contain",
                objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>
          <p className="text-sm mt-6 text-gray-200 leading-5">
            Create a project folder as for example stripe-card-payment and then
            create a folder named backend inside the project directory...
          </p>
          <Link
            href="https://procodelearn.blogspot.com/2021/11/stripe-card-payment-setup-with-mern.html"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="bg-card text-xs transition-all duration-500 hover:bg-gray-200 hover:text-card hover:bg-opacity-400 text-gray-300 leading-5 py-1 px-3 mt-4 rounded-full tracking-wide"
            >
              View Details
            </button>
          </Link>
        </div>

        {/* Section 2 */}
        <div className="bg-[#0a0919] p-5 grid grid-cols-1 rounded-lg">
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <p className="text-xs text-gray-400">Language / June 08, 2022</p>
          <h2 className="text-lg font-medium text-gray-200 leading-6 mb-5 mt-1">
            call(), bind(), apply() method with this keyword in different object
          </h2>
          <Link
            href="https://procodelearn.blogspot.com/2022/06/const-mainobj-name-mozahedul-age-23.html"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/call-bind-apply.png"
              width={600}
              height={400}
              alt="Call, bind, and apply method"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "600",
                maxHeight: "400",
                objectFit: "contain",
                objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>
          <p className="text-sm mt-6 text-gray-200 leading-5">
            methods are used to refer "this" keyword to any object. With these
            methods, an object can use the method belonging to another object...
          </p>
          <Link
            href="https://procodelearn.blogspot.com/2022/06/const-mainobj-name-mozahedul-age-23.html"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="bg-card text-xs transition-all duration-500 hover:bg-gray-200 hover:text-card hover:bg-opacity-400 text-gray-300 leading-5 py-1 px-3 mt-4 rounded-full tracking-wide"
            >
              View Details
            </button>
          </Link>
        </div>

        {/* Section 3 */}
        <div className="bg-[#0a0919] p-5 grid grid-cols-1 rounded-lg">
          <div className="flex mb-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-orange-500 rounded-full mx-1" />
            <span className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <p className="text-xs text-gray-400">Language / June 20, 2022</p>
          <h2 className="text-lg font-medium text-gray-200 leading-6 mb-5 mt-1">
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
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "600",
                maxHeight: "400",
                objectFit: "contain",
                objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>
          <p className="text-sm mt-6 text-gray-200 leading-5">
            With autofit when there are not enough grid items to fill the number
            of tracks created, the created empty tracks are collapsed.
          </p>
          <Link
            href="https://procodelearn.blogspot.com/2022/06/css-grid-difference-between-autofit-and.html?m=1"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="bg-card text-xs transition-all duration-500 hover:bg-gray-200 hover:text-card hover:bg-opacity-400 text-gray-300 leading-5 py-1 px-3 mt-4 rounded-full tracking-wide"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="mt-10 py-2 px-4 text-sm rounded-full hover:bg-[#1e195e] bg-[#0a0919] text-gray-200"
        >
          View Blog
        </button>
      </div>
    </div>
  );
};

export default Blog;
