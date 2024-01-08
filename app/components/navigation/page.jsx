"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Navigation = ({ handleMenuClose }) => {
  // const router = useRouter();

  const handleToShowSection = (event, sectionId) => {
    event.preventDefault();
    const navMenu = document.getElementById("navMenu");
    const section = document.getElementById(sectionId);
    console.log(section.offsetTop, navMenu.offsetHeight);

    const scrollHeight = section.offsetTop - navMenu.offsetHeight;
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });

    handleMenuClose();
  };
  return (
    <nav id="navMenu">
      <ul className="flex flex-col text-lg font-medium tracking-wide text-gray-300 md:flex-row md:text-sm md:font-semibold">
        <li className="m-5 md:m-3 lg:m-5">
          <button
            className="navBtn"
            type="button"
            // onFocus={() => handleToShowSection("/#about")}
            onClick={event => handleToShowSection(event, "about")}
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
            onFocus={event => handleToShowSection(event, "work")}
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
            onFocus={event => handleToShowSection(event, "contact")}
            onClick={handleMenuClose}
          >
            {" "}
            <span className="text-cyan-300">04. </span> Contact
          </button>
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
