"use client";

import { useEffect, useState } from "react";
// import Pulse from "@/app/components/animation/pulse/page";
import AOS from "aos";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Card from "@/app/components/workCard/page";
import fetchServerData from "@/app/functions/getData/fetchData";
import { inter } from "@/utils/google-fonts/fonts";
import Pulse from "@/app/components/animation/pulse/page";
import aosFadeUp from "@/utils/animation/aosFadeUp";

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
        aria-label="Button for show less"
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
    // <div className="wrap">
    //   <div className="glow-1" />
    //   <div className="glow-2" />

    //   <div className="content">
    //     <div className="eyebrow">
    //       <div className="eyebrow-dot" />
    //       <div className="eyebrow-text">Selected work</div>
    //     </div>
    //     <h2 className="hero-title">
    //       Frontend, backend &<br />
    //       <span>email</span> — crafted with care
    //     </h2>
    //     <p className="hero-sub">
    //       A curated collection of full-stack applications and email systems
    //       built for real clients.
    //     </p>

    //     <div className="tab-row">
    //       <div className="tab active">
    //         <i
    //           className="ti ti-apps"
    //           style={{ fontSize: "13px" }}
    //           aria-hidden="true"
    //         />
    //         All
    //       </div>
    //       <div className="tab">
    //         <i
    //           className="ti ti-layout-grid"
    //           style={{ fontSize: "13px" }}
    //           aria-hidden="true"
    //         />
    //         Frontend
    //       </div>
    //       <div className="tab">
    //         <i
    //           className="ti ti-server"
    //           style={{ fontSize: "13px" }}
    //           aria-hidden="true"
    //         />
    //         Backend
    //       </div>
    //       <div className="tab">
    //         <i
    //           className="ti ti-mail"
    //           style={{ fontSize: "13px" }}
    //           aria-hidden="true"
    //         />
    //         Email
    //       </div>
    //     </div>

    //     <div className="grid">
    //       <div className="panel">
    //         <div className="thumb purple">
    //           <i className="ti ti-layout-grid" aria-hidden="true" />
    //         </div>
    //         <div className="cat-chip purple">frontend</div>
    //         <div className="p-title">SaaS dashboard UI</div>
    //         <p className="p-desc">
    //           Dark-themed analytics interface with custom chart components.
    //         </p>
    //         <div className="tag-row">
    //           <span className="tag">React</span>
    //           <span className="tag">Tailwind</span>
    //         </div>
    //         <div className="foot">
    //           <div className="link purple">
    //             View project{" "}
    //             <i className="ti ti-arrow-right" aria-hidden="true" />
    //           </div>
    //           <div className="icon-btn">
    //             <i className="ti ti-brand-github" aria-hidden="true" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="panel">
    //         <div className="thumb cyan">
    //           <i className="ti ti-server" aria-hidden="true" />
    //         </div>
    //         <div className="cat-chip cyan">backend</div>
    //         <div className="p-title">E-commerce REST API</div>
    //         <p className="p-desc">
    //           Order management, auth & Stripe webhook handling.
    //         </p>
    //         <div className="tag-row">
    //           <span className="tag">Node.js</span>
    //           <span className="tag">MongoDB</span>
    //         </div>
    //         <div className="foot">
    //           <div className="link cyan">
    //             View project{" "}
    //             <i className="ti ti-arrow-right" aria-hidden="true" />
    //           </div>
    //           <div className="icon-btn">
    //             <i className="ti ti-brand-github" aria-hidden="true" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="panel">
    //         <div className="thumb green">
    //           <i className="ti ti-mail" aria-hidden="true" />
    //         </div>
    //         <div className="cat-chip green">email</div>
    //         <div className="p-title">Onboarding email series</div>
    //         <p className="p-desc">5-part welcome flow for a fintech startup.</p>
    //         <div className="tag-row">
    //           <span className="tag">MJML</span>
    //           <span className="tag">Klaviyo</span>
    //         </div>
    //         <div className="foot">
    //           <div className="link green">
    //             Preview <i className="ti ti-eye" aria-hidden="true" />
    //           </div>
    //           <div className="icon-btn">
    //             <i className="ti ti-brand-github" aria-hidden="true" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="panel">
    //         <div className="thumb purple">
    //           <i className="ti ti-device-mobile" aria-hidden="true" />
    //         </div>
    //         <div className="cat-chip purple">frontend</div>
    //         <div className="p-title">Fitness app UI kit</div>
    //         <p className="p-desc">
    //           Mobile-first design system with reusable components.
    //         </p>
    //         <div className="tag-row">
    //           <span className="tag">Next.js</span>
    //           <span className="tag">Framer</span>
    //         </div>
    //         <div className="foot">
    //           <div className="link purple">
    //             View project{" "}
    //             <i className="ti ti-arrow-right" aria-hidden="true" />
    //           </div>
    //           <div className="icon-btn">
    //             <i className="ti ti-brand-github" aria-hidden="true" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="panel">
    //         <div className="thumb cyan">
    //           <i className="ti ti-message-2" aria-hidden="true" />
    //         </div>
    //         <div className="cat-chip cyan">backend</div>
    //         <div className="p-title">Real-time chat server</div>
    //         <p className="p-desc">
    //           Socket.io rooms, message queue & file storage.
    //         </p>
    //         <div className="tag-row">
    //           <span className="tag">Socket.io</span>
    //           <span className="tag">Express</span>
    //         </div>
    //         <div className="foot">
    //           <div className="link cyan">
    //             View project{" "}
    //             <i className="ti ti-arrow-right" aria-hidden="true" />
    //           </div>
    //           <div className="icon-btn">
    //             <i className="ti ti-brand-github" aria-hidden="true" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="panel">
    //         <div className="thumb green">
    //           <i className="ti ti-discount-2" aria-hidden="true" />
    //         </div>
    //         <div className="cat-chip green">email</div>
    //         <div className="p-title">Black Friday campaign</div>
    //         <p className="p-desc">
    //           Promo template tested across 15+ email clients.
    //         </p>
    //         <div className="tag-row">
    //           <span className="tag">HTML</span>
    //           <span className="tag">Mailchimp</span>
    //         </div>
    //         <div className="foot">
    //           <div className="link green">
    //             Preview <i className="ti ti-eye" aria-hidden="true" />
    //           </div>
    //           <div className="icon-btn">
    //             <i className="ti ti-brand-github" aria-hidden="true" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      className={`mt-8 px-4 sm:px-6 py-12 bg-[#080C10] rounded-2xl ${inter.className}`}
      id="work"
    >
      {/* My works section */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <h2 className="text-left text-2xl md:text-3xl font-bold leading-8 text-gray-200 flex items-center justify-start">
          <p {...aosFadeUp}>My Recent Works</p>
        </h2>

        {/* subtitle text for recent works */}
        <p className="text-left" {...aosFadeUp}>
          <span className="text-sm text-white mt-4">
            Here are a few past web development projects I've worked on.{" "}
            <a
              className="text-blue-400 cursor-pointer"
              href="mailto:mozahed001@gmail.com"
            >
              Email me
            </a>
          </span>
        </p>
        {/* Start view archive button */}
        <div className="mb-8 mt-5" {...aosFadeUp}>
          <Link
            href="/pages/archive"
            alt="View archive button"
            aria-label="The button navigates to the archive page"
          >
            <button
              type="button"
              onClick={handleArchive}
              className="group relative px-3 py-2 text-xs tracking-wide text-gray-200 transition-all duration-1000 hover:text-purple-400"
              aria-label="Button for view archive"
            >
              <span className="absolute left-0 top-0 w-6 h-5 border-l-2 border-t-2 border-purple-400 border-opacity-40 transition-all duration-1000 group-hover:border-opacity-100" />
              View all works
              <span className="absolute right-0 bottom-0 w-6 h-5 rounded-ss-lg border-r-2 border-b-2 border-purple-400 border-opacity-40 transition-all duration-1000 group-hover:border-opacity-100" />
            </button>
          </Link>
        </div>
        {/* End view archive button */}
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
            aria-label="Button for show more"
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
