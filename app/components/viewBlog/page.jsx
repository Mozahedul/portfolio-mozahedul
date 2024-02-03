"use client";

import Link from "next/link";
import { PiPlugsConnectedBold } from "react-icons/pi";

const BlogButton = () => {
  const hanldeHireMeButton = () => {
    // For listening audio sound when user click on the menu button
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();
  };

  return (
    <div className="my-4 md:my-0 md:ml-4">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.upwork.com/freelancers/~015a5d106c74f13430"
        aria-label="The button navigates to the hire me to Upwork"
      >
        <button
          type="button"
          onClick={hanldeHireMeButton}
          className="tracking-wide hire-btn whitespace-nowrap py-2 px-4 flex items-center"
        >
          <PiPlugsConnectedBold className="inline mr-[6px]" />
          <span>Hire Me</span>
        </button>
      </Link>
    </div>
  );
};

export default BlogButton;
