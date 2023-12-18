/**
 * This is the Archive page component.
 * It displays information about the developer and provides buttons to navigate to different project sections.
 * The component also includes a social media sidebar and a main view section for the frontend projects.
 */

"use client";

import { useEffect } from "react";
import SocialMedia from "@/app/components/social-media/sidebar/page";
import Backend from "@/app/sections/archive/backend/page";
import Frontend from "@/app/sections/archive/frontend/page";

const Archive = () => {
  /**
   * This code adds a click event listener to all elements with the id "btn".
   * When a button is clicked, it scrolls into view smoothly and adds the "active" class to the clicked button, while removing the "active" class from all other buttons.
   */
  useEffect(() => {
    const btns = document.querySelectorAll(".archBtn");
    btns.forEach(btn => {
      btn.addEventListener("click", event => {
        btns.forEach(button => {
          const firstChild = button?.firstElementChild;
          firstChild.classList.remove("active-bar");
          const lastChild = button?.lastElementChild;
          lastChild.classList.remove("active-text");
          button.classList.remove("active");
        });
        event?.currentTarget && btn.classList.add("active");
        const activeBtn = document.querySelector(".active");
        const firstChild = activeBtn?.firstElementChild;
        firstChild.classList.add("active-bar");
        const lastChild = activeBtn?.lastElementChild;
        lastChild.classList.add("active-text");
      });
    });
  }, []);

  const handleToShowProjects = str => {
    const allButtons = document.querySelectorAll(".all");
    const archiveBtns = document.querySelectorAll(`.${str}`);

    allButtons?.forEach(button => {
      const newButton = button;
      newButton.style.display = "none";
    });

    archiveBtns?.forEach(btn => {
      const newBtn = btn;
      newBtn.style.display = "block";
    });
  };

  useEffect(() => {
    handleToShowProjects("frontend");
  }, []);

  return (
    <div className="flex justify-around gap-x-20 mt-20">
      <div>
        <h1 className="text-6xl font-extrabold text-gray-300">Archive.</h1>
        <h2 className="text-4xl font-bold mt-2 text-gray-400">
          Mozahedul Islam
        </h2>
        <p className="text-xl font-semibold text-gray-500 mt-3">
          Experienced Full-stack Developer
        </p>
        <p className="text-md font-medium mt-2 mb-4 text-gray-500">
          I develop exclusive and genuine web projects <br /> for clients.
        </p>
        <div className="flex flex-col items-start mt-5 gap-y-2">
          <button
            onClick={handleToShowProjects("fullstack")}
            type="button"
            className="archBtn text-gray-400 transition-all duration-1000 flex items-center px-3 py-2 hover:bg-cardHover hover:bg-opacity-30 hover:text-slate-200 rounded-full group"
          >
            <span className="w-8 h-[1px] transition-all duration-500 block bg-gray-500 group-hover:bg-gray-400 mr-2 group-hover:w-16 group-hover:h-[2px]" />
            <span className="block uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-400">
              Full-stack
            </span>
          </button>
          <button
            onClick={() => handleToShowProjects("backend")}
            type="button"
            className="archBtn text-gray-400 transition-all duration-1000 flex items-center px-3 py-2 hover:bg-cardHover hover:bg-opacity-30 hover:text-slate-200 rounded-full group"
          >
            <span className="w-8 h-[1px] transition-all duration-500 block bg-gray-500 group-hover:bg-gray-400 mr-2 group-hover:w-16 group-hover:h-[2px]" />
            <span className="block uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-400">
              Backend
            </span>
          </button>
          <button
            onClick={() => handleToShowProjects("frontend")}
            type="button"
            className="archBtn text-gray-400 transition-all duration-1000 flex items-center px-3 py-2 hover:bg-cardHover hover:bg-opacity-30 hover:text-slate-200 rounded-full group"
          >
            <span className="w-8 h-[1px] transition-all duration-500 block bg-gray-500 group-hover:bg-gray-400 mr-2 group-hover:w-16 group-hover:h-[2px]" />
            <span className="block uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-400">
              Frontend
            </span>
          </button>
          <button
            onClick={handleToShowProjects("ui-ux")}
            type="button"
            className="archBtn text-gray-400 transition-all duration-1000 flex items-center px-3 py-2 hover:bg-cardHover hover:bg-opacity-30 hover:text-slate-200 rounded-full group"
          >
            <span className="w-8 h-[1px] transition-all duration-500 block bg-gray-500 group-hover:bg-gray-400 mr-2 group-hover:w-16 group-hover:h-[2px]" />
            <span className="block uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-400">
              UX / UI
            </span>
          </button>
        </div>
        {/* Social media handles */}
        <SocialMedia />
      </div>
      {/* Main view section */}
      <div>
        {/* frontend */}

        <Frontend />
        <Backend />
      </div>
    </div>
  );
};

export default Archive;
