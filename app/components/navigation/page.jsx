"use client";

import React from "react";

const Navigation = ({ handleMenuClose }) => {
  /**
   * @param {*} event
   * @param {*} sectionId
   * @description when clicking on a navigation menu, scroll to the specified
   * section related the button and button will be active
   */
  const handleToShowSection = (event, sectionId) => {
    event.preventDefault();
    const buttons = document.querySelectorAll(".navBtn");

    buttons.forEach(button => {
      button.classList.remove("active-menu");
    });

    event.currentTarget.classList.add("active-menu");

    const navMenu = document.getElementById("navMenu");
    const section = document.getElementById(sectionId);
    const viewportWidth = window.innerWidth;
    const scrollHeight =
      section !== null && navMenu !== null
        ? viewportWidth < 768
          ? section.offsetTop - (navMenu.offsetHeight + 70)
          : section.offsetTop
        : event.currentTarget.classList.remove("active-menu");

    console.log("SCROLL HEIGHT ==> ", scrollHeight);

    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });

    handleMenuClose();
  };

  return (
    <nav>
      <ul className="flex flex-col text-lg font-medium tracking-wide text-gray-300 md:flex-row md:text-sm md:font-semibold">
        <li className="m-5 md:m-3">
          <button
            className="navBtn flex"
            type="button"
            onClick={event => handleToShowSection(event, "about")}
          >
            <span className="text-cyan-300 mr-1">01.</span>
            <span>About</span>
          </button>
        </li>
        <li className="m-5 md:m-3">
          <button
            className="navBtn flex"
            type="button"
            onClick={event => handleToShowSection(event, "skills")}
          >
            {" "}
            <span className="text-cyan-300 mr-1">02.</span>
            <span>Skills</span>
          </button>
        </li>
        <li className="m-5 md:m-3">
          <button
            className="navBtn flex"
            type="button"
            onClick={event => handleToShowSection(event, "work")}
          >
            {" "}
            <span className="text-cyan-300 mr-1">03.</span>
            <span>Work</span>
          </button>
        </li>
        <li className="m-5 md:m-3">
          <button
            className="navBtn flex"
            type="button"
            onClick={event => handleToShowSection(event, "blog")}
          >
            {" "}
            <span className="text-cyan-300 mr-1">04.</span>
            <span>Blog</span>
          </button>
        </li>
        <li className="m-5 md:m-3">
          <button
            className="navBtn flex"
            type="button"
            onClick={event => handleToShowSection(event, "contactMe")}
          >
            {" "}
            <span className="text-cyan-300 mr-1">05.</span>
            <span>Contact</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
