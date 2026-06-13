"use client";

import { HiOutlineDownload } from "react-icons/hi";

const DownloadCV = () => {
  const hanldeHireMeButton = () => {
    // For listening audio sound when user click on the menu button
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();
  };

  return (
    <div className="my-2 md:my-0 md:ml-4">
      <a
        href="./resume-modify.pdf"
        download
        onClick={hanldeHireMeButton}
        className="tracking-wide  whitespace-nowrap py-2 px-4 flex items-center text-gray-300 text-sm border-2 hover:border-gray-400 hover:border-opacity-10 rounded-xl hover:text-purple-400 hover:transition hover:duration-300 border-purple-500 border-opacity-20"
      >
        <span>Download CV</span>
        <HiOutlineDownload className="inline ml-[6px]" />
      </a>
    </div>
  );
};

export default DownloadCV;
