"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Navigation = ({ handleMenuClose }) => {
  const router = useRouter();

  const handleToShowSection = path => {
    router.push(path);
  };
  return (
    <div>
      <ul className="flex flex-col text-lg font-medium tracking-wide text-gray-300 md:flex-row md:text-sm md:font-semibold">
        <li className="m-5 md:m-3 lg:m-5">
          <button
            className="navBtn"
            type="button"
            onFocus={() => handleToShowSection("/#about")}
            onClick={handleMenuClose}
          >
            <span className="text-cyan-300">01. </span>About
          </button>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <button
            className="navBtn"
            type="button"
            onFocus={() => handleToShowSection("/")}
            onClick={handleMenuClose}
          >
            {" "}
            <span className="text-cyan-300">02. </span> Experience
          </button>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <button
            className="navBtn"
            type="button"
            onFocus={() => handleToShowSection("/#work")}
            onClick={handleMenuClose}
          >
            {" "}
            <span className="text-cyan-300">03. </span> Work
          </button>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          {/* <Link href="/#contact"> */}
          <button
            className="navBtn"
            type="button"
            onFocus={() => handleToShowSection("/#contact")}
            onClick={handleMenuClose}
          >
            {" "}
            <span className="text-cyan-300">04. </span> Contact
          </button>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
