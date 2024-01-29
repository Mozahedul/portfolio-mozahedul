"use client";

import { useCallback, useEffect, useState } from "react";
// import Pulse from "@/app/components/animation/pulse/page";
import AOS from "aos";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Card from "@/app/components/workCard/page";
import fetchServerData from "@/app/functions/getData/fetchData";
import { inter } from "@/utils/google-fonts/fonts";
import Pulse from "@/app/components/animation/pulse/page";

export default function Work() {
  const [showMore, setShowMore] = useState(1);
  const [projects, setProjects] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  /**
   * Purpose: Show more projects when clicked
   * method: array slice method is used
   */
  const handleMoreProject = () => {
    // For small sized device
    if (viewportWidth < 768) {
      const moreProject = showMore + 2;
      setShowMore(moreProject);
    }

    // for medium sized device
    if (viewportWidth >= 768 && viewportWidth < 1024) {
      const moreProject = showMore + 4;
      setShowMore(moreProject);
    }

    // For large sized device
    if (viewportWidth >= 1024) {
      const moreProject = showMore + 6;
      setShowMore(moreProject);
    }
  };

  /**
   * handler is used to return to the default
   * showing stateof the projects
   */
  const handleLessProject = () => {
    // For small sized device
    if (viewportWidth < 768) {
      setShowMore(2);
    }

    // For medium sized device
    if (viewportWidth >= 768 && viewportWidth < 1024) {
      setShowMore(4);
    }

    // For large sized device
    if (viewportWidth >= 1024) {
      setShowMore(6);
    }
  };

  // Show less projects button visibility
  const showLessProject = () => {
    const btn = (
      <button
        type="button"
        onClick={handleLessProject}
        className="btn ml-2 transition-all duration-500 mt-8 md:mt-16 block font-medium tracking-wide hover:text-gray-300 hover:bg-[#ffac5eab] bg-[#ffac5e] rounded-full px-3 py-2 text-xs text-gray-900"
      >
        Show less
      </button>
    );

    // For small device
    if (viewportWidth < 768 && showMore > 2) {
      return btn;
    }

    // For medium device
    if (viewportWidth >= 768 && viewportWidth < 1024 && showMore > 4) {
      return btn;
    }

    // for large device
    if (viewportWidth >= 1024 && showMore > 6) {
      return btn;
    }
    return true;
  };

  // For handling the sound effect during button click
  const handleArchive = () => {
    const audio = new Audio("/ping.mp3");
    audio.play();
  };

  // useEffect hook for storing projects data to react state
  useEffect(() => {
    try {
      const fetchProjects = async () => {
        const data = await fetchServerData("/api/projects");
        setProjects(data.projects);
      };
      fetchProjects();
    } catch (error) {
      console.log("Error during the project fetching");
    }
  }, []);

  // Calculate the viewport width accordance with window resizing
  useEffect(() => {
    const handleViewportResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleViewportResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleViewportResize);
      }
    };
  }, [setViewportWidth]);

  // Show the project in responsive manner according to device ratio
  useEffect(() => {
    // For small sized device
    if (viewportWidth < 768) {
      setShowMore(2);
    }

    // for medium sized device
    if (viewportWidth >= 768 && viewportWidth < 1024) {
      setShowMore(4);
    }

    // For large sized device
    if (viewportWidth >= 1024) {
      setShowMore(6);
    }
  }, [viewportWidth]);

  // For page scroll animation with aos NPM package
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className={`mt-16 md:mt-32 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-36 py-12 md:py-24 lg:py-28 bg-[#ffac5e07] ${inter.className}`}
      id="work"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-center text-2xl md:text-3xl font-bold leading-8 text-gray-200 flex items-center justify-center">
          <p className="flex items-center mr-3">
            <span
              className="w-1 h-1 bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
            />
            <span
              className="w-[5px] h-[5px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
            />
            <span
              className="w-[6px] h-[6px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            />
            <span
              className="w-[7px] h-[7px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
            />
            <span
              className="w-[8px] h-[8px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            />
            <span
              className="w-[9px] h-[10px] bg-gray-300 rounded-full"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            />
          </p>
          <span data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700">
            My Works
          </span>
          <p className="flex items-center ml-3">
            <span
              className="w-[9px] h-[10px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            />
            <span
              className="w-[8px] h-[8px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            />
            <span
              className="w-[7px] h-[7px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
            />
            <span
              className="w-[6px] h-[6px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            />
            <span
              className="w-[5px] h-[5px] bg-gray-300 rounded-full mr-1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
            />
            <span
              className="w-1 h-1 bg-gray-300 rounded-full"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
            />
          </p>
        </h2>

        <div className="flex justify-center mb-8 mt-5">
          <Link href="/pages/archive">
            <button
              type="button"
              onClick={handleArchive}
              className="px-3 py-2 rounded-full bg-[#0c0c21] border-[2px] border-[#9bc2f518] text-[12px] md:text-sm tracking-wide hover:bg-cardHover text-gray-200 transition-all duration-1000 hover:text-[#ffac5e]"
            >
              View the archive
            </button>
          </Link>
        </div>
      </div>

      {Array.isArray(projects) && projects.length ? (
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, showMore).map(project => (
            <Card
              key={uuidv4()}
              title={project.title}
              description={project.description}
              anchor={project.anchor}
              github={project.github}
              language={project.language}
            />
          ))}
        </div>
      ) : (
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(100).keys()].slice(0, showMore).map(() => (
            <Pulse key={uuidv4()} />
          ))}
        </div>
      )}

      <div className="flex justify-center">
        {showMore < projects?.length ? (
          <button
            type="button"
            onClick={handleMoreProject}
            className="btn mr-2 mt-8 transition-all duration-500 md:mt-16 block font-medium tracking-wide hover:text-[#ffac5e] hover:bg-[#a36affad] bg-[#a36aff] rounded-full px-3 py-2 text-xs text-gray-200"
          >
            Show more
          </button>
        ) : (
          ""
        )}

        {showLessProject()}
      </div>
    </div>
  );
}

// export default Work;
