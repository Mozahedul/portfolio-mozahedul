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

    const section = document.getElementById(sectionId);
    const scrollHeight = section.offsetTop;

    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });

    handleMenuClose();
  };

  return (
    <nav id="navMenu">
      <ul className="flex flex-col text-lg font-medium tracking-wide text-gray-300 md:flex-row md:text-sm md:font-semibold">
        <li className="m-5 md:m-3">
          <button
            className="navBtn"
            type="button"
            onClick={event => handleToShowSection(event, "about")}
          >
            <span className="text-cyan-300">01. </span>About
          </button>
        </li>
        <li className="m-5 md:m-3">
          <button
            className="navBtn"
            type="button"
            onClick={event => handleToShowSection(event, "skills")}
          >
            {" "}
            <span className="text-cyan-300">02. </span> Skills
          </button>
        </li>
        <li className="m-5 md:m-3">
          <button
            className="navBtn"
            type="button"
            onClick={event => handleToShowSection(event, "work")}
          >
            {" "}
            <span className="text-cyan-300">03. </span> Work
          </button>
        </li>
        <li className="m-5 md:m-3">
          <button
            className="navBtn"
            type="button"
            onClick={event => handleToShowSection(event, "contactMe")}
          >
            {" "}
            <span className="text-cyan-300">04. </span> Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
