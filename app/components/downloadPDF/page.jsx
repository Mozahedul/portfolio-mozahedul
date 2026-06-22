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
        className="group relative tracking-wide  whitespace-nowrap py-[6px] px-3 flex items-center text-gray-300 text-[13px] hover:text-purple-400 hover:transition hover:duration-300"
      >
        <span className="absolute left-0 top-0 w-6 h-5 border-l-2 border-t-2 border-gray-500 border-opacity-40 transition-all duration-1000 group-hover:border-opacity-100 group-hover:border-purple-400" />
        Download CV
        <HiOutlineDownload className="inline ml-[6px]" />
        <span className="absolute right-0 bottom-0 w-6 h-5 rounded-ss-lg border-r-2 border-b-2 border-gray-500 border-opacity-40 transition-all duration-1000 group-hover:border-opacity-100 group-hover:border-purple-400" />
      </Link>
    </div>
  );
};

export default DownloadCV;
