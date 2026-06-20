"use client";

import React from "react";
import "../../assets/css/bubblyButtons.css";

const Navigation = ({ handleMenuClose }) => {
  /**
   * @param {*} event
   * @param {*} sectionId
   * @description when clicking on a navigation menu, scroll to the specified
   * section related the button and button will be active
   */
  const handleToShowSection = (event, sectionId) => {
    event.preventDefault();

    // For listening audio sound when user click on the menu button
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();

    // Remove animate and active-menu classes
    const bubblyButtons = document.getElementsByClassName("bubbly-button");
    for (let i = 0; i < bubblyButtons.length; i += 1) {
      bubblyButtons[i].classList.remove("animate");
      bubblyButtons[i].classList.remove("active-menu");
    }

    // Add animate and active-menu classes
    event?.currentTarget.classList.add("animate");
    event?.currentTarget.classList.add("active-menu");

    const navMenu = document.getElementById("navMenu");
    const section = document.getElementById(sectionId);
    const viewportWidth = window.innerWidth;

    // Find out the sroll height i.e; how far the scroll goes to
    const scrollHeight =
      section !== null && navMenu !== null
        ? viewportWidth < 768
          ? section.offsetTop - (navMenu.offsetHeight + 70)
          : section.offsetTop
        : event?.currentTarget.classList.remove("active-menu");

    setTimeout(() => {
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }, 100);

    if (viewportWidth < 768) {
      handleMenuClose();
    }
  };

  return (
    <nav className="flex flex-grow justify-center">
      <ul className="flex flex-col font-md tracking-wide text-gray-300 md:flex-row">
        <li className="m-5 sm:m-2 md:mx-2">
          <button
            className="bubbly-button"
            type="button"
            onClick={event => handleToShowSection(event, "about")}
            aria-label="Button for about menu"
          >
            About
          </button>
        </li>
        <li className="m-5 sm:m-2 md:mx-1 lg:mx-2">
          <button
            className="flex bubbly-button"
            type="button"
            onClick={event => handleToShowSection(event, "skills")}
            aria-label="Button for skills menu"
          >
            Stacks
          </button>
        </li>

        <li className="m-5 sm:m-2 md:mx-1 lg:mx-2">
          <button
            className="flex bubbly-button"
            type="button"
            onClick={event => handleToShowSection(event, "skills")}
            aria-label="Button for skills menu"
          >
            Projects
          </button>
        </li>

        <li className="m-5 sm:m-2 md:mx-1 lg:mx-2">
          <button
            className="flex bubbly-button"
            type="button"
            onClick={event => handleToShowSection(event, "skills")}
            aria-label="Button for skills menu"
          >
            Email
          </button>
        </li>
        <li className="m-5 sm:m-2 md:mx-1 lg:mx-2">
          <button
            className="flex bubbly-button"
            type="button"
            onClick={event => handleToShowSection(event, "work")}
            aria-label="Button for work menu"
          >
            Services
          </button>
        </li>
        {/* <li className="m-5 sm:m-2 md:mx-1 lg:mx-2">
          <button
            className="flex bubbly-button"
            type="button"
            onClick={event => handleToShowSection(event, "blog")}
            aria-label="Button for blog menu"
          >
            Blog
          </button>
        </li> */}
        <li className="m-5 sm:m-2 md:mx-1 lg:mx-2">
          <button
            className="flex bubbly-button"
            type="button"
            onClick={event => handleToShowSection(event, "contactMe")}
            aria-label="Button for contact menu"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
