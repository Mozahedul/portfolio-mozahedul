"use client";

import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { useEffect } from "react";

const Fullstack = () => {
  // Set the active button for the project section
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-project");
    btns.forEach(btn => {
      btn.addEventListener("click", event => {
        btns.forEach(button => button.classList.remove("active-project-btn"));
        event?.currentTarget && btn.classList.add("active-project-btn");
      });
    });
  }, []);

  // Show project cards by clicking on the button
  const handleToShowProjectCards = str => {
    const allProjectBtns = document.querySelectorAll(".allProject");
    allProjectBtns.forEach(btn => {
      const newBtn = btn;
      newBtn.style.display = "none";
      newBtn.style.opacity = 0;
    });

    const projectCards = document.querySelectorAll(`.${str}`);
    projectCards.forEach(card => {
      const newCard = card;
      newCard.style.display = "block";
      newCard.style.opacity = 1;
    });
  };

  useEffect(() => {
    handleToShowProjectCards("allProject");
  }, []);

  return (
    <div className="fullstack all">
      {/* Header section */}
      <div>
        <h1 className="text-left text-3xl font-bold text-gray-300">
          Fullstack Projects
        </h1>

        <div className="mt-5 flex gap-x-2">
          <button
            onClick={() => handleToShowProjectCards("allProject")}
            type="button"
            className="btn-project active-project-btn text-gray-400 transition-all hover:text-cyan-400 duration-500 text-sm bg-card hover:bg-cardHover px-3 py-2 rounded-lg"
          >
            Show All
          </button>
          <button
            onClick={() => handleToShowProjectCards("ecommerce")}
            type="button"
            className="btn-project text-gray-400 transition-all hover:text-cyan-400 duration-500 text-sm bg-card hover:bg-cardHover px-3 py-2 rounded-lg"
          >
            eCommerce
          </button>
          <button
            onClick={() => handleToShowProjectCards("blog")}
            type="button"
            className="btn-project text-gray-400 transition-all hover:text-cyan-400 duration-500 text-sm bg-card hover:bg-cardHover px-3 py-2 rounded-lg"
          >
            Blog
          </button>
          <button
            onClick={() => handleToShowProjectCards("travel")}
            type="button"
            className="btn-project text-gray-400 transition-all hover:text-cyan-400 duration-500 text-sm bg-card hover:bg-cardHover px-3 py-2 rounded-lg"
          >
            Travel
          </button>
          <button
            onClick={() => handleToShowProjectCards("tech")}
            type="button"
            className="btn-project text-gray-400 transition-all hover:text-cyan-400 duration-500 text-sm bg-card hover:bg-cardHover px-3 py-2 rounded-lg"
          >
            Tech
          </button>
        </div>
        {/* Project cards */}

        <main className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-8 mt-8">
          <div className="transition-all duration-500 relative group ecommerce allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <Link href="/">
                  <button
                    title="View on Github"
                    className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                    type="button"
                  >
                    <FiGithub />
                  </button>
                </Link>
                <Link href="/">
                  <button
                    title="View Live App"
                    className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                    type="button"
                  >
                    <FaArrowUpRightFromSquare />
                  </button>
                </Link>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
          <div className="relative group blog  allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <button
                  title="View on Github"
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                  type="button"
                >
                  <FiGithub />
                </button>
                <button
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                  type="button"
                >
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>

          {/* fullstack card for archive */}
          <div className="relative group travel allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <button
                  title="View on Github"
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                  type="button"
                >
                  <FiGithub />
                </button>
                <button
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                  type="button"
                >
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
          <div className="relative group tech allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <button
                  title="View on Github"
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                  type="button"
                >
                  <FiGithub />
                </button>
                <button
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                  type="button"
                >
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>

          <div className="relative group ecommerce allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <Link href="/">
                  <button
                    title="View on Github"
                    className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                    type="button"
                  >
                    <FiGithub />
                  </button>
                </Link>
                <Link href="/">
                  <button
                    title="View Live App"
                    className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                    type="button"
                  >
                    <FaArrowUpRightFromSquare />
                  </button>
                </Link>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
          <div className="relative group blog  allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <button
                  title="View on Github"
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                  type="button"
                >
                  <FiGithub />
                </button>
                <button
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                  type="button"
                >
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>

          {/* fullstack card for archive */}
          <div className="relative group travel allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <button
                  title="View on Github"
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                  type="button"
                >
                  <FiGithub />
                </button>
                <button
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                  type="button"
                >
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
          <div className="relative group tech allProject">
            <Image
              className="rounded-lg cursor-pointer"
              src="/images/auto-search.png"
              alt="project"
              width={150}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
            {/* hover section */}
            <div className="rounded opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full overflow-hidden p-4 absolute transition-all duration-500 top-0 left-0 right-0; bottom-0 bg-card">
              {/* Links to Github and project */}
              <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                <button
                  title="View on Github"
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                  type="button"
                >
                  <FiGithub />
                </button>
                <button
                  className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                  type="button"
                >
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
              {/* Project title and description */}
              <div>
                <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                  eCommerce online shopping marketplace.
                </h2>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis a nemo iure explicabo, tenetur itaque omnis neque
                </p>
              </div>
              {/* Languages buttons */}
              <div className="absolute bottom-4 flex flex-wrap gap-1">
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  HTML5
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  CSS3
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  JavaScript
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  Git
                </button>
                <button
                  type="button"
                  className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Fullstack;
