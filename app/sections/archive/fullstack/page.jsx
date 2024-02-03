"use client";

import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Loader from "@/app/components/animation/loader/page";
import Pulse from "@/app/components/animation/pulse/page";

const Fullstack = ({ category }) => {
  const [subcategories, setSubCategories] = useState([]);
  const [archives, setArchives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  // Show project cards by clicking on the button
  const handleToShowProjectCards = (subcatId, subcatName) => {
    setActiveButton(subcatId);
    const allArchivesBtns = document.querySelectorAll(".allArchives");
    allArchivesBtns.forEach(btn => {
      const newBtn = btn;
      newBtn.style.display = "none";
      newBtn.style.opacity = 0;
    });

    const projectCards = document.querySelectorAll(`.${subcatName}`);
    projectCards.forEach(card => {
      const newCard = card;
      newCard.style.display = "block";
      newCard.style.opacity = 1;
    });
  };

  useEffect(() => {
    handleToShowProjectCards(null, "allArchives");
  }, []);

  // Load all subcategories from database according to a specific category
  useEffect(() => {
    const fetchSubCategories = async () => {
      setLoading(true);
      const response = await fetch(
        `/api/subcategories/selective?categoryId=${category}`
      );
      const data = response?.ok && (await response?.json());
      data?.length > 0 && setSubCategories(data);

      if (response?.ok || data.errMessage) {
        setLoading(false);
      }
    };

    fetchSubCategories(category);
  }, [category, setSubCategories]);

  // Fetch all archives from the database
  useEffect(() => {
    const fetchAllArchives = async cat => {
      try {
        const response = await fetch(
          `/api/archive/categories?categoryId=${cat}`
        );
        const data = response?.ok && (await response?.json());
        Array.isArray(data) && data.length > 0 && setArchives(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAllArchives(category);
  }, [category]);

  return (
    <div className="fullstack all">
      {/* Header section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-300 flex-col">
          <span className="block"> Fullstack Projects</span>
          <span className="h-[2px] bg-cardHover grow block mt-2" />
        </h1>

        <div className="mt-5 flex gap-x-2">
          <button
            onClick={() => handleToShowProjectCards(null, "allArchives")}
            type="button"
            className={`btn-project text-gray-400 transition-all hover:text-cyan-400 duration-500 text-sm bg-card hover:bg-cardHover px-3 py-2 rounded-lg ${
              activeButton === null ? "active-project-btn" : ""
            }`}
            aria-label="Button for all fullstack projects"
          >
            Show All
          </button>
          {loading ? (
            <Loader />
          ) : (
            subcategories?.length > 0 &&
            subcategories?.map(subcat => (
              <button
                key={subcat._id}
                onClick={() =>
                  handleToShowProjectCards(subcat._id, subcat.name)
                }
                type="button"
                className={`btn-project text-gray-400 transition-all hover:text-cyan-400 duration-500 text-sm bg-card hover:bg-cardHover px-3 py-2 rounded-lg capitalize ${
                  activeButton === subcat._id ? "active-project-btn" : ""
                }`}
                aria-label="Button for showing subcategories"
              >
                {subcat.name}
              </button>
            ))
          )}
        </div>
        {/* Project cards */}

        <main className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-8 mt-8">
          {archives?.length > 0
            ? archives?.map(archive => (
                <div
                  key={archive._id}
                  className={`transition-all duration-500 relative group ${archive?.subcategory?.name} allArchives`}
                >
                  <Image
                    loading="lazy"
                    className="rounded-lg cursor-pointer"
                    src={archive?.image}
                    alt="project"
                    width={150}
                    height={150}
                    style={{ width: "100%", height: "100%" }}
                  />
                  {/* hover section */}
                  <div className="group-hover:w-[110%] group-hover:h-[110%] group-hover:z-[888] rounded opacity-0 w-0 h-0 group-hover:opacity-100 overflow-hidden p-4 absolute transition-all duration-500 -top-3 -left-3 right-0; bottom-0 bg-card hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.1)]">
                    {/* Links to Github and project */}
                    <div className="bg-appBg block px-2 py-1 rounded absolute top-0 right-0">
                      <Link
                        href={archive?.github}
                        target="_blank"
                        aria-label="The button navigates to the GitHub"
                      >
                        <button
                          title="View on Github"
                          className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 hover:text-cyan-400"
                          type="button"
                          aria-label="Button for navigating to GitHub"
                        >
                          <FiGithub />
                        </button>
                      </Link>
                      <Link
                        href={archive?.anchor}
                        target="_blank"
                        aria-label="The button navigates to the archive website"
                      >
                        <button
                          title="View Live App"
                          className="text-gray-300 text-lg hover:transform hover:scale-125 transition-all duration-500 ml-2 hover:text-cyan-400"
                          type="button"
                          aria-label="Button for navigating to project website"
                        >
                          <FaArrowUpRightFromSquare />
                        </button>
                      </Link>
                    </div>
                    {/* Project title and description */}
                    <div>
                      <h2 className="font-bold text-lg mt-4 text-gray-300 tracking-wide">
                        {archive?.title}
                      </h2>
                      <p className="text-sm text-gray-400 mt-3">
                        {archive?.description}
                      </p>
                    </div>
                    {/* Languages buttons */}
                    <div className="absolute bottom-4 flex flex-wrap gap-1">
                      {archive?.language?.length > 0 &&
                        archive?.language?.map(lang => (
                          <button
                            key={uuidv4()}
                            type="button"
                            className="text-xs font-medium rounded-lg bg-appBg px-2 text-gray-400 py-1"
                            aria-label="Button for showing languages"
                          >
                            {lang}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              ))
            : [...Array.from(3).keys()].map(() => <Pulse key={uuidv4()} />)}
        </main>
      </div>
    </div>
  );
};

export default Fullstack;
