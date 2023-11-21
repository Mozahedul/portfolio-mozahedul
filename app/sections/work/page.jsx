"use client";

import { useEffect, useState } from "react";
import Pulse from "@/app/components/animation/pulse/page";
import Card from "@/app/components/workCard/page";
import fetchServerData from "@/app/functions/getData/fetchData";
import { inter } from "@/utils/google-fonts/fonts";

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
        className="btn ml-2 mt-16 block"
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

  // useEffect hook for storing projects data to react state
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchServerData("/api/projects");
      console.log("WORK DATA => ", data);
      setProjects(data.projects);
    };
    fetchData();
  }, [setProjects]);

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

  /**
   *  Show the project in responsive manner according to device ratio
   */

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

  return (
    <div className={`mt-40 ${inter.className}`}>
      <h2 className="text-center text-3xl font-bold leading-5 text-gray-300">
        Notable working projects
      </h2>

      <button
        type="button"
        className="m-auto mb-8 mt-5 block border-cyan-300 text-sm tracking-widest text-cyan-300 transition-all duration-500 hover:text-cyan-500"
      >
        View the archive
      </button>

      {Array.isArray(projects) && projects.length ? (
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:mx-8 lg:grid-cols-3 xl:mx-36">
          {projects.slice(0, showMore).map(project => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              anchor={project.anchor}
              github={project.github}
              language={project.language}
            />
          ))}
        </div>
      ) : (
        <div className="flex xl:mx-36">
          <Pulse />
          <Pulse />
          <Pulse />
        </div>
      )}

      <div className="flex justify-center">
        {showMore < projects.length ? (
          <button
            type="button"
            onClick={handleMoreProject}
            className="btn mr-2 mt-16 block"
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