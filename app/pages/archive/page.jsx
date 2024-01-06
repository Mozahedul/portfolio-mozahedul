/**
 * This is the Archive page component.
 * It displays information about the developer and provides buttons to navigate to different project sections.
 * The component also includes a social media sidebar and a main view section for the frontend projects.
 */

"use client";

import { useEffect, useState } from "react";
import SocialMedia from "@/app/components/social-media/sidebar/page";
import Backend from "@/app/sections/archive/backend/page";
import Frontend from "@/app/sections/archive/frontend/page";
import Fullstack from "@/app/sections/archive/fullstack/page";
import UiUx from "@/app/sections/archive/uiux/page";

const Archive = () => {
  const [categories, setCategories] = useState([]);
  const [fullstack, setFullstack] = useState("");
  const [backend, setBackend] = useState("");
  const [frontend, setFrontend] = useState("");
  const [uiux, setUiux] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  console.log(categories);

  /**
   * This function is used to toggle the visibility of different sections of the archive page.
   * @param {string} str - The name of the section to show or hide.
   */

  const handleToShowProjects = (catId, catName) => {
    setActiveButton(catId);
    if (catName === "fullstack") {
      setFullstack(catId);
      setActiveButton(catId);
    }
    if (catName === "frontend") {
      setFrontend(catId);
    }
    if (catName === "backend") {
      setBackend(catId);
    }
    if (catName === "ui-ux") {
      setUiux(catId);
    }
    /**
     * This code selects all elements with the class "all" and sets their display property to "none".
     * It also selects all elements with the class name that matches the given string and sets their display property to "block".
     */
    const allButtons = document.querySelectorAll(".all");
    const archiveBtns = document.querySelectorAll(`.${catName}`);

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
    handleToShowProjects("658c22af5abfe2f285bdfb95", "frontend");
  }, []);

  // Fetch categories from backend database
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = response.ok && (await response.json());
      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-x-20 mt-20">
      <div className="lg:w-1/4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-300">
          Archive.
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mt-2 text-gray-400 flex items-center">
          Mozahedul Islam
        </h2>
        <p className="text-xl font-semibold text-gray-500 mt-3">
          Experienced Full-stack Developer
        </p>
        <p className="text-md font-medium mt-2 mb-4 text-gray-500">
          I develop exclusive and genuine web projects for clients.
        </p>
        <div className="flex flex-col items-start mt-5 gap-y-2">
          {categories.map(category => (
            <button
              key={category._id}
              onClick={() => handleToShowProjects(category._id, category.name)}
              type="button"
              className={`archBtn text-gray-400 transition-all duration-1000 flex items-center px-3 py-2 hover:bg-cardHover hover:bg-opacity-30 hover:text-slate-200 rounded-full group ${
                activeButton === category._id ? "active" : ""
              }`}
            >
              <span
                className={`w-8 h-[1px] transition-all duration-500 block bg-gray-500 group-hover:bg-gray-400 mr-2 group-hover:w-16 group-hover:h-[2px] ${
                  activeButton === category._id ? "active-bar" : ""
                }`}
              />
              <span
                className={`block uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-400 ${
                  activeButton === category._id ? "active-text" : ""
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
        {/* Social media handles */}
        <SocialMedia />
      </div>
      {/* Main view section */}
      <div className="mt-16 lg:mt-0 lg:w-3/4">
        <Fullstack category={fullstack} />
        <Frontend category={frontend} />
        <Backend category={backend} />
        <UiUx category={uiux} />
      </div>
    </div>
  );
};

export default Archive;
