"use client";

import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";

const DownloadCV = () => {
  const hanldeHireMeButton = () => {
    // For listening audio sound when user click on the menu button
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();
  };

  return (
    <div className="my-2 md:my-0 md:ml-4">
      <Link
        href="./resume-modify.pdf"
        download
        onClick={hanldeHireMeButton}
        className="group relative tracking-wide whitespace-nowrap py-1 md:py-[6px] px-2 md:px-3 flex items-center text-gray-300 text-xs hover:text-purple-400 hover:transition hover:duration-300"
      >
        <span className="w-8 h-2 inline-block border-l-2 border-t-2 border-gray-500 border-dotted md:border-dashed absolute left-0 top-0 group-hover:border-purple-500" />
        <span className="w-8 h-2 inline-block border-r-2 border-t-2 border-gray-500 border-dotted md:border-dashed absolute right-0 top-0 group-hover:border-purple-500" />
        Download CV
        <HiOutlineDownload className="inline ml-[6px]" />
        <span className="w-8 h-2 inline-block border-l-2 border-b-2 border-gray-500 border-dotted md:border-dashed absolute left-0 bottom-0 group-hover:border-purple-500" />
        <span className="w-8 h-2 inline-block border-r-2 border-b-2 border-gray-500 border-dotted md:border-dashed absolute right-0 bottom-0 group-hover:border-purple-500" />
      </Link>
    </div>
  );
};

export default DownloadCV;
