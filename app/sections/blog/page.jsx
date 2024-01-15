"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="mx-36 my-16 md:my-28">
      <div className="text-center">
        <p className="text-md text-gray-300 font-medium"> - From my blog - </p>
        <h2 className="text-cyan-400 font-bold text-2xl md:text-3xl">
          <span className="textClip">
            05. Visit my blog and keep <br /> your feedback
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mt-8">
        <div className="bg-[#222939] p-5 grid grid-cols-1 rounded-lg">
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
              src="/stripe-payment.jpg"
              width={640}
              height={427}
              alt="stripe payment"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "640",
                maxHeight: "427",
                objectFit: "contain",
                objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>
          <p className="text-sm mt-6 text-gray-200 leading-5">
            Create a project folder as for example stripe-card-payment and then
            create a folder named backend inside the project directory
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
        <div className="bg-cardHover p-5 grid grid-cols-1 rounded-lg">
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
              src="/stripe-payment.jpg"
              width={640}
              height={427}
              alt="stripe payment"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "640",
                maxHeight: "427",
                objectFit: "contain",
                objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>
          <p className="text-sm mt-6 text-gray-200 leading-5">
            Create a project folder as for example stripe-card-payment and then
            create a folder named backend inside the project directory
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
        <div className="bg-cardHover p-5 grid grid-cols-1 rounded-lg">
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
              src="/stripe-payment.jpg"
              width={640}
              height={427}
              alt="stripe payment"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "640",
                maxHeight: "427",
                objectFit: "contain",
                objectPosition: "left top",
                borderRadius: "6px",
              }}
            />
          </Link>
          <p className="text-sm mt-6 text-gray-200 leading-5">
            Create a project folder as for example stripe-card-payment and then
            create a folder named backend inside the project directory
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
      </div>
    </div>
  );
};

export default Blog;
